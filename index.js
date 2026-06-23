// 1. مصفوفة البيانات (Data Array) لعرض ميزات النظام ديناميكياً
const featureData = [
    {
        icon: "📊",
        title: "MIS Dashboard Integrations",
        desc: "Consolidate complex organizational databases into clean, unified management systems seamlessly."
    },
    {
        icon: "🤖",
        title: "Predictive Smart AI Workflow",
        desc: "Utilize advanced machine learning models to anticipate resource demands and bottle-necks."
    },
    {
        icon: "⚡",
        title: "Agile Development Sync",
        desc: "Bridge operational metrics directly into your technical sprints for optimal team velocity."
    }
];

// 2. دالة لحقن الميزات (Features) داخل الـ HTML عند تحميل الصفحة
function loadFeatures() {
    const container = document.getElementById('features-container');
    let htmlContent = '';

    featureData.forEach(item => {
        htmlContent += `
            <div class="p-6 rounded-2xl border border-slate-800 bg-slate-900/40 hover:border-slate-700 transition-all duration-300">
                <div class="text-3xl mb-4">${item.icon}</div>
                <h3 class="text-lg font-bold mb-2 text-slate-100">${item.title}</h3>
                <p class="text-xs text-slate-400 leading-relaxed">${item.desc}</p>
            </div>
        `;
    });

    container.innerHTML = htmlContent;
}

// 3. معالجة نموذج الإرسال (Form Submission) بشكل تفاعلي
document.getElementById('landingForm').addEventListener('submit', function(event) {
    event.preventDefault(); // منع الصفحة من إعادة التحميل التقليدي
    
    const email = document.getElementById('formEmail').value;
    const service = document.getElementById('formService').value;
    const successMsg = document.getElementById('successMessage');
    
    // إظهار رسالة نجاح تفاعلية بناءً على مدخلات المستخدم
    successMsg.innerText = `Thank you! A demo request for "${service}" has been registered for ${email}.`;
    successMsg.classList.remove('hidden');
    
    // تفريغ الحقول بعد الإرسال
    this.reset();
});

// تشغيل الدوال بمجرد جاهزية مستند الـ HTML
document.addEventListener('DOMContentLoaded', loadFeatures);