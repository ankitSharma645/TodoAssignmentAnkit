import React, { useState } from 'react';
import '../styles/FAQSection.css';

const FAQSection = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    const faqData = [
        {
          category: "General",
          questions: [
            {
              question: "What is a Todo list?",
              answer: "A Todo list is a tool used to manage tasks or items that need to be completed."
            },
            {
              question: "How do I add a new item to my Todo list?",
              answer: "To add a new item, click on the 'Add Item' button and fill out the required fields in the form."
            },
            {
              question: "Can I mark an item as completed?",
              answer: "Yes, you can mark an item as completed by clicking on the 'Mark as Completed' button next to the item."
            }
          ]
        },
        {
          category: "Editing Items",
          questions: [
            {
              question: "How do I edit an existing item?",
              answer: "To edit an item, click on the 'Edit' button next to the item you want to modify. Update the fields in the form and click 'Update Item'."
            },
            {
              question: "What happens when I delete an item?",
              answer: "Deleting an item removes it permanently from your Todo list. Make sure to confirm deletion as it cannot be undone."
            }
          ]
        },
        {
          category: "Completion Status",
          questions: [
            {
              question: "Can I see which items are completed?",
              answer: "Yes, completed items are visually marked as completed in the Todo list."
            },
            {
              question: "How do I undo marking an item as completed?",
              answer: "Currently, marking an item as completed is irreversible. Consider deleting the item and adding it again if needed."
            }
          ]
        }
      ];
      
    return (
      <div className="faq-container">
      <h2>Frequently Asked <span>Questions</span></h2>
      <div className="faq-content-wrapper">
          <div className="faq-categories">
              {faqData.map((item, index) => (
                  <button
                      key={index}
                      className={`faq-category ${index === activeIndex ? 'active' : ''}`}
                      onClick={() => setActiveIndex(index)}
                  >
                      {item.category}
                  </button>
              ))}
          </div>
          <div className="faq-content">
              {faqData[activeIndex].questions.map((q, index) => (
                  <div key={index} className="faq-item">
                      <details>
                          <summary>{q.question}</summary>
                          <p>{q.answer}</p>
                      </details>
                  </div>
              ))}
          </div>
      </div>
  </div>
    );
};


export default FAQSection;
