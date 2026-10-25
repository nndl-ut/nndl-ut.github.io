import './src/style.css'
import Alpine from 'alpinejs'
import {
  course,
  logistics,
  instructor,
  headTAs,
  assignments,
  assignmentNote,
  workshopTAs,
  grading,
  topics,
} from './src/data.js'

window.Alpine = Alpine

const BASE = import.meta.env.BASE_URL // '/' locally, '/<repo>/' on GitHub Pages
const asset = (p) => `${BASE}${p}`
const $ = (sel) => document.querySelector(sel)

// ---------------------------------------------------------------- helpers
const photoSrc = (person) => asset(person.photo || 'avatar-placeholder.svg')

function icons(links = {}) {
  const items = [
    { key: 'linkedin', icon: 'logo-linkedin.svg', label: 'LinkedIn', href: links.linkedin },
    { key: 'github', icon: 'logo-github.svg', label: 'GitHub', href: links.github },
    { key: 'email', icon: 'mail-open-outline.svg', label: 'Email', href: links.email ? `mailto:${links.email}` : '' },
    { key: 'website', icon: 'link.svg', label: 'Website', href: links.website },
  ]
  return items
    .map(
      (i) => `<a class="icon-link ${i.href ? '' : 'is-empty'}" ${
        i.href ? `href="${i.href}" target="_blank" rel="noopener"` : 'aria-disabled="true" tabindex="-1"'
      } title="${i.label}"><img src="${asset(i.icon)}" alt="${i.label}"></a>`
    )
    .join('')
}

function personCard(p, { big = false } = {}) {
  const size = big ? 'w-40 sm:w-52' : 'w-32 sm:w-44'
  return `
  <article class="flex flex-col items-center text-center">
    <img src="${photoSrc(p)}" alt="${p.name}" class="${size} aspect-square object-cover rounded-full border-4 border-primary-400 shadow-md bg-primary-100">
    ${p.topic ? `<p class="text-xs sm:text-sm font-light mt-3 max-w-[12rem]">${p.topic}</p>` : '<div class="mt-3"></div>'}
    ${p.tag ? `<p class="text-xs sm:text-sm text-gray-600">${p.tag}</p>` : ''}
    ${p.title ? `<p class="text-xs sm:text-sm text-gray-600">${p.title}</p>` : ''}
    <p class="mt-1 font-medium sm:text-lg">${p.name}</p>
    <div class="flex items-center gap-2 mt-1">${icons(p.links)}</div>
  </article>`
}

const dateCell = (d) =>
  `<span class="font-medium">${d.fa}</span><br><span class="text-xs text-gray-500">${d.en}</span>`

const taChip = (t) =>
  `<span class="chip"><img src="${photoSrc(t)}" alt="" class="w-7 h-7 rounded-full object-cover bg-primary-100">${t.name}</span>`

// ---------------------------------------------------------------- render
function renderHeader() {
  $('#hdr-title').textContent = course.title
  $('#hdr-term').textContent = course.termFa ? `${course.term} · ${course.termFa}` : course.term
  document.title = `${course.shortTitle} | ${course.university} ECE — ${course.term}`
}

function renderIntro() {
  $('#intro-text').textContent = course.intro
}

function renderStaff() {
  $('#instructor').innerHTML = `
    <h2 class="font-bold sm:text-xl text-center mb-4">Instructor</h2>
    ${personCard(instructor, { big: true })}`

  $('#head-tas').innerHTML = `
    <h2 class="font-bold sm:text-xl text-center mb-4">Head TAs</h2>
    <div class="flex flex-wrap justify-center gap-8">${headTAs.map((t) => personCard(t, { big: true })).join('')}</div>`

  // Assignment TAs — grouped by assignment
  $('#ta-groups').innerHTML = assignments
    .map(
      (a) => `
    <div class="rounded-2xl bg-white/70 border border-primary-100 p-5">
      <h3 class="font-semibold text-primary-700 mb-1">${a.id}${a.bonus ? ' (Bonus)' : ''}: ${a.topic}</h3>
      <div class="grid grid-cols-2 ${a.tas.length > 2 ? 'sm:grid-cols-4' : 'sm:grid-cols-2'} gap-4 mt-3">
        ${a.tas.map((t) => personCard({ ...t, tag: a.id + (a.bonus ? ' (Bonus)' : '') + ' Designer' })).join('')}
      </div>
    </div>`
    )
    .join('')

  $('#workshop-tas').innerHTML = `
    <div class="rounded-2xl bg-white/70 border border-primary-100 p-5">
      <h3 class="font-semibold text-primary-700 mb-1">Workshops</h3>
      <div class="grid grid-cols-2 gap-4 mt-3">${workshopTAs.map((t) => personCard(t)).join('')}</div>
    </div>`
}

function renderLogistics() {
  $('#logistics-body').innerHTML = `
    <dl class="grid sm:grid-cols-3 gap-4 mt-4">
      <div class="rounded-xl border border-primary-100 bg-primary-50 p-4">
        <dt class="text-xs uppercase tracking-wide text-primary-500 font-semibold">Days</dt>
        <dd class="mt-1 font-medium">${logistics.days}</dd>
      </div>
      <div class="rounded-xl border border-primary-100 bg-primary-50 p-4">
        <dt class="text-xs uppercase tracking-wide text-primary-500 font-semibold">Time</dt>
        <dd class="mt-1 font-medium">${logistics.time}</dd>
        <dd class="text-xs text-gray-500">${logistics.timezone}</dd>
      </div>
      <div class="rounded-xl border border-primary-100 bg-primary-50 p-4">
        <dt class="text-xs uppercase tracking-wide text-primary-500 font-semibold">Location</dt>
        <dd class="mt-1 font-medium">${logistics.room}</dd>
        <dd class="text-xs text-gray-500">${logistics.building}</dd>
      </div>
    </dl>
    <p class="mt-4">${logistics.extra.join('<br>')}</p>`
}

function renderContent() {
  $('#content-text').textContent = course.content
  $('#topics').innerHTML = topics
    .map(
      (t) => `
    <article class="rounded-xl bg-white border border-primary-100 p-5 shadow-sm">
      <div class="flex items-center gap-3">
        <span class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary-600 text-white font-bold">${t.n}</span>
        <h3 class="font-semibold text-primary-700">${t.title}</h3>
      </div>
      <ul class="mt-3 list-disc pl-5 text-sm space-y-1 marker:text-primary-400">${t.items.map((i) => `<li>${i}</li>`).join('')}</ul>
    </article>`
    )
    .join('')
}

function renderGrading() {
  const ch = (n) => `Chapter ${n}`
  $('#grading-body').innerHTML = `
    <div class="overflow-hidden rounded-2xl border border-primary-100 shadow-sm">
      <div class="bg-primary-600 text-white text-center font-semibold py-3 text-lg">Mini Projects and Exams</div>
      <div class="bg-primary-50 p-4">
        <p class="text-sm font-semibold text-primary-700 mb-3">Mini Projects — ${grading.miniProjectsTotal}%</p>
        <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          ${grading.miniProjects
            .map(
              (m) => `
            <div class="rounded-xl bg-white border border-primary-100 text-center py-3">
              <p class="text-xs text-gray-500">${ch(m.chapter)}</p>
              <p class="font-semibold">${m.short}</p>
              <p class="text-primary-600 font-bold">${m.weight}%</p>
            </div>`
            )
            .join('')}
        </div>
        <p class="text-sm font-semibold text-primary-700 mt-5 mb-3">Exams — ${grading.final.weight}%</p>
        <div class="rounded-xl bg-white border border-primary-100 text-center py-4">
          <p class="font-semibold text-lg">${grading.final.label}</p>
          <p class="text-xs text-gray-500">${grading.final.chapters}</p>
          <p class="text-primary-600 font-bold">${grading.final.weight}%</p>
        </div>
      </div>
      <div class="bg-primary-100 text-center font-semibold py-3">Total Score: ${grading.total}%</div>
    </div>
    <p class="mt-3 text-sm text-gray-600">* ${grading.note}</p>`
}

function renderSchedule() {
  const rows = assignments
    .map(
      (a) => `
    <tr class="align-top ${a.bonus ? 'bg-accent-500/5' : ''}">
      <td class="px-4 py-4 font-bold text-primary-700 whitespace-nowrap">${a.id}${a.bonus ? '<br><span class="text-xs font-semibold text-accent-600">Bonus</span>' : ''}</td>
      <td class="px-4 py-4 font-medium min-w-[12rem]">${a.topic}</td>
      <td class="px-4 py-4 min-w-[18rem]"><ul class="list-disc pl-4 space-y-0.5 text-sm">${a.concepts.map((c) => `<li>${c}</li>`).join('')}</ul></td>
      <td class="px-4 py-4 whitespace-nowrap">${dateCell(a.release)}</td>
      <td class="px-4 py-4 whitespace-nowrap">${dateCell(a.deadline)}</td>
      <td class="px-4 py-4 min-w-[14rem]"><div class="flex flex-col gap-1.5 items-start">${a.tas.map(taChip).join('')}</div></td>
    </tr>`
    )
    .join('')

  const cards = assignments
    .map(
      (a) => `
    <article class="rounded-xl border ${a.bonus ? 'border-accent-500/40' : 'border-primary-100'} bg-white p-4 shadow-sm">
      <div class="flex items-center justify-between">
        <h3 class="font-bold text-primary-700">${a.id}${a.bonus ? ' <span class="text-xs text-accent-600">(Bonus)</span>' : ''}</h3>
        <span class="text-xs text-gray-500">Chapter ${a.chapter}</span>
      </div>
      <p class="font-medium mt-1">${a.topic}</p>
      <ul class="list-disc pl-5 mt-2 text-sm space-y-0.5">${a.concepts.map((c) => `<li>${c}</li>`).join('')}</ul>
      <div class="grid grid-cols-2 gap-3 mt-3 text-sm">
        <div><p class="text-xs uppercase text-primary-500 font-semibold">Release</p>${dateCell(a.release)}</div>
        <div><p class="text-xs uppercase text-primary-500 font-semibold">Deadline</p>${dateCell(a.deadline)}</div>
      </div>
      <p class="text-xs uppercase text-primary-500 font-semibold mt-3 mb-1">Assignment TAs</p>
      <div class="flex flex-wrap gap-1.5">${a.tas.map(taChip).join('')}</div>
    </article>`
    )
    .join('')

  $('#schedule-body').innerHTML = `
    <div class="hidden md:block overflow-x-auto rounded-2xl border border-primary-100 shadow-sm">
      <table class="w-full text-left text-sm">
        <thead class="bg-primary-600 text-white">
          <tr>
            <th class="px-4 py-3">CA #</th><th class="px-4 py-3">Topic</th><th class="px-4 py-3">Covered Concepts</th>
            <th class="px-4 py-3">Release Date</th><th class="px-4 py-3">Deadline</th><th class="px-4 py-3">Assignment TAs</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-primary-100 bg-white">${rows}</tbody>
      </table>
    </div>
    <div class="md:hidden grid gap-4">${cards}</div>
    <p class="mt-3 text-sm text-gray-600">Note: ${assignmentNote}</p>`
}

renderHeader()
renderIntro()
renderStaff()
renderLogistics()
renderContent()
renderGrading()
renderSchedule()

Alpine.start()
