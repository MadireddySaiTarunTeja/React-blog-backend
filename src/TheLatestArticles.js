module.exports = [
	{
		id: "array-3",
		img: "https://s3.ap-south-1.amazonaws.com/blog-images-upload/blog_how_to_clear_aptitude_test.jpg",
		heading: "Array ZigZag",
		category: "Array",
		date: "August 21 2019",
		desc: "Given an array of N integers, convert it into a ZigZag array by choosing any element",
		author: "PrepBytes",
		posted_on: "Mon Aug 24 2020 01:25:52 GMT+0530",
		author_img: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logoPrepBytesMbl.png",
		claps: 25,
		content: "# Array ZigZag\n\n#### CONCEPTS USED:\nArrays\n\n#### DIFFICULTY LEVEL:\nHard\n\n\n#### PROBLEM STATEMENT$($SIMPLIFIED$)$:\nGiven an array of $N$ integers, convert it into a `ZigZag` array by choosing any element and decrementing it by $1$.\n\nAn array $A$ is a `ZigZag` array if either:\n\n1. Every even-indexed element is greater than its adjacent elements, ie. $A0 > A1 < A2 > A3 < A4 > ...$\n\n2. OR, every odd-indexed element is greater than its adjacent elements, ie. $A0 < A1 > A2 < A3 > A4 < ...$\n\nPrint the minimum number of moves to transform the given array into a `ZigZag` array.\n\n#### For Example:\n```\nInput: N = 3 \n       A[] = [2, 3, 4]\n\nOutput: 2\n\nExplanation: \n\nWe can decrease 3 to 1 to form [2, 1, 4] so that all even indexed elements are greater than the neighbours. Hence output is 2.\n```\n\n#### SOLVING APPROACH:\n\n>1. We will solve this problem two times.\n>>1. For the even-indexed array.  \n>>\n>>2. For the odd-indexed array.\n>2. `Minimum` of both the solutions will be our desired solution.  \n>\n>2. Start traversing the array, for each element find the `minimum` value among the element , previous element $- 1$ and next element $- 1$.\n>3. The difference between current element and calculated `minimum` value is the moves required to correctly position these three elements.\n>3. Similarly, keep doing it for the entire array and keep track of a `sum` variable.\n>>$sum$   $+= ( A[i] - min(A[i],A[i-1]-1,A[i+1]-1) )$\n\n#### SOLUTIONS:\n\n#### ONE EXPECTED SOLUTION$($C$)$:\n\n```c\n#include <stdio.h>\n\nint solve(int arr[],int n,int start)\n{\n  int res = 0;\n  for(int i=start;i<n;i+=2)\n  {\n    int to = arr[i];\n    if(i)\n    // make sure current element is less than its left neighboor\n    {\n      if(arr[i-1]-1<to)\n        to = arr[i-1]-1;\n    }\n    if(i+1 != n)\n    // make sure current element is less than its right neighboor\n    {\n      if(arr[i+1]-1<to)\n        to = arr[i+1]-1;\n    }\n // if curr value was decreased to \"to\", add the difference\n    res += arr[i] - to;\n  }\n  return res;\n}\n\nint main()\n{\n  int n;\n  scanf(\"%d\",&n);\n  int arr[n];\n  for(int i=0;i<n;i++)\n    scanf(\"%d\",&arr[i]);\n  int res1 = solve(arr,n,0);\n  int res2 = solve(arr,n,1);\n  \n  if(res1 < res2)\n    printf(\"%d\",res1);\n  else\n    printf(\"%d\",res2);\n  \n  return 0;\n}\n```\n\n#### ONE EXPECTED SOLUTION$($C++$)$:\n \n ```cpp\n#include <bits/stdc++.h>\nusing namespace std;\n\nint solve(int arr[],int n,int start)\n{\n  int res = 0;\n  for(int i=start;i<n;i+=2)\n  {\n    int to = arr[i];\n    if(i){\n    // make sure current element is less than its left neighboor\n     to = min(to,arr[i-1]-1);\n    }\n    if(i+1 != n){\n    // make sure current element is less than its right neighboor\n      to = min(to,arr[i+1]-1);\n    }\n    // if curr value was decreased to \"to\", add the difference\n    res += arr[i] - to;\n  }\n  return res;\n}\n\nint main()\n{\n  int n;cin>>n;\n  int arr[n];\n  for(int i=0;i<n;i++)\n cin>>arr[i];\n  \n  cout<<min(solve(arr,n,0),solve(arr,n,1));\n  \n  return 0;\n}\n```\n\n#### ONE EXPECTED SOLUTION$($JAVA$)$:\n\n```java\nimport java.util.*;\nimport java.io.*;\nimport java.lang.Math;\n\npublic class Main {\n  static int solve(int arr[],int n,int start)\n  {\n    int res = 0;\n    for(int i=start;i<n;i+=2)\n    {\n      int to = arr[i];\n      if(i>0)\n      // make sure current element is less than its left neighboor\n        to = Math.min(to,arr[i-1]-1);\n      if(i+1 != n)\n      // make sure current element is less than its right neighboor\n     to = Math.min(to,arr[i+1]-1);\n      // if curr value was decreased to \"to\", add the difference\n      res += arr[i] - to;\n    }\n    return res;\n  }\n  public static void main(String args[]) throws IOException {\n    \n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt();\n    int arr[] = new int[n];\n    for(int i=0;i<n;i++)\n      arr[i] = sc.nextInt();\n    \n    System.out.println(Math.min(solve(arr,n,0),solve(arr,n,1)));\n  }\n}\n ```\n\n#### Can you guess the `Time Complexity` of the solution ? \n1. $O(N)$  \n\n2. $O(N*logN)$\n\n3. $O(logN)$\n\n4. $O(N^2)$\n\nTime Complexity: $O(N)$\n\nSpace Complexity: $O(1)$\n"
	},
	{
		id: "linklist-3",
		img: "https://s3.ap-south-1.amazonaws.com/blog-images-upload/blog_gd_mistakes.png",
		heading: "Arrange the Salary",
		category: "Linklist",
		date: "August 21 2019",
		desc: "Given a linked list of N elements and a value X, your task is to arrange the list in such a way that all elements less than X comes first, then finally all elements greater than or equal to X.",
		author: "PrepBytes",
		posted_on: "Mon Aug 24 2020 01:25:52 GMT+0530",
		author_img: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logoPrepBytesMbl.png",
		claps: 25,
		content: "# Arrange the Salary\n\n#### CONCEPTS USED:\nBasic Pointer Manipulation\n\n#### DIFFICULTY LEVEL:\nMedium\n\n#### PROBLEM STATEMENT$($SIMPLIFIED$)$:\nGiven a linked list of $N$ elements and a value $X$, your task is to arrange the list in such a way that all elements less than $X$ comes first, then finally all elements greater than or equal to $X$.\n   \n***NOTE*** :  You have to maintain the original relative order of the elements at the time of arranging the salary. \n\n#### For Example:\n\n```\nInput :  \n\nlist = 9 -> 6 -> 3 -> 7 -> 1 -> 4\nK = 5\n\nOutput: 3 -> 1 -> 4 -> 9 -> 6 -> 7\n\nExplaination : Elements smaller than 5 i.e. 3, 1, 4 are arranged at the starting while elements greater than 5 are arranged after them without changing the relative order of all the elements.\n```\n\n#### SOLVING APPROACH:\n\n#### BRUTE FORCE METHOD:\n\n1. The idea is to create two additional arrays `min_arr` and `max_arr` for storing the elements less than $X$ in `min_arr` while to store elements greater than or equal to $X$ in `max_arr`.  \n\n2. Then simply print elements from `min_arr` first and then `max_arr`.\n\n3. This approach is not `efficient` as it uses additional $O(N)$ space.\n\n#### SOLUTIONS:\n\n#### ONE EXPECTED SOLUTION$($Using C++ STL$)$:\n\n```cpp\n#include <bits/stdc++.h>\nusing namespace std;\ntypedef struct Node {\n    int data;\n    struct Node *next;\n}Node;\nNode* temp = NULL;\nNode* insert(Node *head, int data) {\n    if(head == NULL) {\n        head = new Node();\n        head->data = data;\n        head->next = NULL;\n        return temp = head;\n    }\n    Node* node = new Node();\n    node->data = data;\n    node->next = NULL;\n    temp->next = node;\n    temp = temp->next;\n    return head;\n}\n\nvoid print(Node *head) {\n    if(head->next == NULL) {\n        cout << head->data << \" \";\n     return;\n    }\n    cout << head->data << \" \";\n    print(head->next);\n}\n\nNode* ArrangeSalary(Node* head, int X) {\n  \n    if(head == NULL || head->next == NULL)\n      return head;\n      \n    Node *temp = head;\n      \n vector<int> v_min, v_max;\n    while(temp != NULL){\n      if(temp->data < X)\n        v_min.push_back(temp->data);\n      else\n        v_max.push_back(temp->data);\n      temp = temp->next;\n    }\n   \n    temp = head;\n    \n while(temp != NULL){\n      if(!v_min.empty()){\n        temp->data = v_min.front();\n        v_min.erase(v_min.begin());\n      }\n      else if(!v_max.empty()){\n        temp->data = v_max.front();\n        v_max.erase(v_max.begin());\n      }\n      \n      temp = temp->next;\n    }\n    return head;\n\n}\n\nint main()\n{\n\n    Node *head = NULL;\n    Node *ptr = NULL;\n    int n, X;\n    cin >> n >>X;\n    for(int i=0; i<n; i++) {\n        int data;\n cin >> data;\n        head = insert(head, data);\n    }\n    head = ArrangeSalary(head, X);\n    print(head);\n    cout << endl;\n    return 0;\n}\n```\n\n#### EFFICIENT METHOD:\n\n>1. The idea is to create two linked list and initialize their head nodes as NULL -\n>>1. `smaller` list of values smaller than $X$.  \n>>2. `larger` list of values greater than or equal to $X$.\n>2. Now traverse the original list and if an element is less than $X$, append it to the end of the `smaller` list else append it to the end of the `larger` list. Finally concatenate both the `smaller` and `larger` lists to form the resultant list.\n\n#### SOLUTIONS:\n\n#### ONE EXPECTED SOLUTION$($C$)$:\n\n```c\n#include <stdio.h>\n#include <string.h>\n#include <stdlib.h>\ntypedef struct Node {\n    int data;\n    struct Node *next;\n}Node;\nNode* getNode (Node*head, int val)\n{\n    Node *element = (Node*) malloc(sizeof(Node));\n    element->data = val ;\n    element->next = NULL ;\n    Node *temp = head ;\n    if ( head == NULL ) {\n        head = element ;\n        head->next = NULL ;\n        return head ;\n    }\n    while (temp->next != NULL)\n        temp = temp->next ;\n    temp->next = element ;\n    element->next = NULL ;\n    return head ;\n}\n\n\nvoid print(Node *head) {\n    if(head->next == NULL) {\n        printf(\"%d \", head->data);\n        return;\n    }\n    printf(\"%d \", head->data);\n    print(head->next);\n}\n\nNode* ArrangeSalary(Node* head, int X) {\n  \n  /* if list has 0 or 1 elements then return */\n  if(head == NULL || head->next == NULL)\n    return head;\n    \n  /* create two lists one for storing smaller elements than X and\n    another for storing greater than or equal to elements than X */\n \n  /* head pointer for smaller list */\n  Node *smaller = NULL ;\n  \n  /*pointer to the last element in the smaller list */\n  Node *temp_smaller;\n  \n   /* head pointer for greater list */\n  Node *greater = NULL ;\n  \n  /*pointer to the last element in the greater list */\n  Node *temp_greater ;\n  \n  Node *temp = head;\n  \n  while(temp != NULL){\n    Node* t = temp;\n    temp = temp -> next;\n    \n    if(t->data < X){\n      if(smaller == NULL){\n        smaller = t;\n        temp_smaller = t;\n        t -> next = NULL;\n      }\n      else{\n        temp_smaller -> next = t;\n        t -> next = NULL;\n        temp_smaller = t;\n      }\n      \n    }\n    else{\n      if(greater == NULL){\n        greater = t;\n        temp_greater = t;\n        t -> next = NULL;\n      }\n      else{\n        temp_greater -> next = t;\n        t -> next = NULL;\n        temp_greater = t;\n      }\n    }\n  }\n \n  /* concatenating both smaller and greater lists */\n  temp_smaller -> next = greater;\n  \n  return smaller;\n\n}\nint main()\n{\n\n    Node *head = NULL;\n    int n, X;\n    scanf(\"%d %d\", &n,&X);\n    for(int i=0; i<n; i++) {\n        int data;\n        scanf(\"%d\", &data);\n        head = getNode(head, data);\n    }\n    head = ArrangeSalary(head, X);\n    print(head);\n    printf(\"\n\");\n    return 0;\n}\n```\n\n#### ONE EXPECTED SOLUTION$($C++$)$:\n\n```cpp\n#include <bits/stdc++.h>\nusing namespace std;\ntypedef struct Node {\n    int data;\n    struct Node *next;\n}Node;\nNode* temp = NULL;\nNode* insert(Node *head, int data) {\n    if(head == NULL) {\n        head = new Node();\n        head->data = data;\n        head->next = NULL;\n        return temp = head;\n    }\n    Node* node = new Node();\n    node->data = data;\n    node->next = NULL;\n    temp->next = node;\n    temp = temp->next;\n    return head;\n}\n\nvoid print(Node *head) {\n    if(head->next == NULL) {\n        cout << head->data << \" \";\n        return;\n    }\n    cout << head->data << \" \";\n    print(head->next);\n}\n\nNode* ArrangeSalary(Node* head, int X) {\n  \n  /* if list has 0 or 1 elements then return */\n  if(head == NULL || head->next == NULL)\n return head;\n    \n  /* create two lists one for storing smaller elements than X and\n    another for storing greater than or equal to elements than X */\n  \n  /* head pointer for smaller list */\n  Node *smaller = NULL ;\n  \n /*pointer to the last element in the smaller list */\n  Node *temp_smaller= NULL;\n  \n   /* head pointer for greater list */\n  Node *greater = NULL ;\n  \n  /*pointer to the last element in the greater list */\n  Node *temp_greater = NULL;\n  \n  Node *temp = head;\n  \n  while(temp != NULL){\n    Node* t = temp;\n    temp = temp -> next;\n \n    if(t->data < X){\n      if(smaller == NULL){\n        smaller = t;\n        temp_smaller = t;\n        t -> next = NULL;\n      }\n      else{\n        temp_smaller -> next = t;\n        t -> next = NULL;\n        temp_smaller = t;\n      }\n      \n    }\n    else{\n      if(greater == NULL){\n        greater = t;\n        temp_greater = t;\n        t -> next = NULL;\n      }\n      else{\n        temp_greater -> next = t;\n        t -> next = NULL;\n        temp_greater = t;\n      }\n    }\n  }\n  \n  /* concatenating both smaller and greater lists */\n  temp_smaller -> next = greater;\n  \n  return smaller;\n}\n\nint main()\n{\n\n    Node *head = NULL;\n    Node *ptr = NULL;\n    int n, X;\n    cin >> n >>X;\n    for(int i=0; i<n; i++) {\n        int data;\n        cin >> data;\n     head = insert(head, data);\n    }\n    head = ArrangeSalary(head, X);\n    print(head);\n    cout << endl;\n    return 0;\n}\n```\n\n#### ONE EXPECTED SOLUTION$($JAVA$)$:\n\n```java\nimport java.io.*;\nimport java.util.*;\n\npublic class Main {\n    static class SinglyLinkedListNode {\n        public int value;\n        public SinglyLinkedListNode next;\n\n        public SinglyLinkedListNode(int nodeData) {\n            this.value = nodeData;\n            this.next = null;\n        }\n    }\n\n    static class SinglyLinkedList {\n        public SinglyLinkedListNode head;\n        public SinglyLinkedListNode tail;\n\n        public SinglyLinkedList() {\n            this.head = null;\n            this.tail = null;\n        }\n\n        public void insertNode(int nodeData) {\n            SinglyLinkedListNode node = new SinglyLinkedListNode(nodeData);\n\n            if (this.head == null) {\n                this.head = node;\n            } else {\n                this.tail.next = node;\n            }\n\n            this.tail = node;\n        }\n    }\n\n    static void printLinkedList(SinglyLinkedListNode head) {\n        SinglyLinkedListNode temp = head;\n        while (temp != null) {\n            System.out.print(temp.value + \" \");\n           temp = temp.next;\n        }\n        System.out.println();\n    }\n\nstatic SinglyLinkedListNode ArrangeSalary(SinglyLinkedListNode head, int X) {\n\n    /* if list has 0 or 1 elements then return */\n    if(head == null || head.next == null)\n      return head;\n      \n    /* create two lists one for storing smaller elements than X and\n   another for storing greater than or equal to elements than X */\n    \n    /* head pointer for smaller list */\n   SinglyLinkedListNode smaller = null;\n    \n    /*pointer to the last element in the smaller list */\n    SinglyLinkedListNode temp_smaller = null;\n    \n     /* head pointer for greater list */\n    SinglyLinkedListNode greater = null;\n    \n    /*pointer to the last element in the greater list */\n    SinglyLinkedListNode temp_greater = null;\n    \n    SinglyLinkedListNode temp = head;\n    \n    while(temp != null){\n      SinglyLinkedListNode t = temp;\n      temp = temp.next;\n      \n      if(t.value < X){\n        if(smaller == null){\n          smaller = t;\n          temp_smaller = t;\n          t.next = null;\n        }\n        else{\n          temp_smaller.next = t;\n          t.next = null;\n          temp_smaller = t;\n        }\n        \n      }\n      else{\n        if(greater == null){\n          greater = t;\n          temp_greater = t;\n          t.next = null;\n        }\n        else{\n          temp_greater.next = t;\n          t.next = null;\n          temp_greater = t;\n        }\n      }\n   }\n    \n    /* concatenating both smaller and greater lists */\n    temp_smaller.next = greater;\n    \n      return smaller;\n}\n\n\n    private static final Scanner scanner = new Scanner(System.in);\n\n    public static void main(String[] args) throws IOException {\n\n        SinglyLinkedList llist = new SinglyLinkedList();\n        int size = scanner.nextInt();\n        int X = scanner.nextInt();\n\n        for (int i = 0; i < size; i++) {\n           int llistItem = scanner.nextInt();\n\n            llist.insertNode(llistItem);\n        }\n        SinglyLinkedListNode temp = ArrangeSalary(llist.head, X);\n        printLinkedList(temp);\n\n    }\n}\n```\n\n#### Can you guess the `Time and Space Complexity` of the `Efficient` solution ? \n\n1. $O(N)$, $O(1)$\n\n2. $O(N*logN)$, $O(N)$\n\n3. $O(N)$, $O(N)$\n\n4. $O(N^2)$, $O(1)$\n\n\nTime Complexity: $O(N)$\n\nSpace Complexity: $O(1)$"
	},
	{
		id: "recursion-3",
		img: "https://s3.ap-south-1.amazonaws.com/blog-images-upload/blog_how_to_introduce_yourself.png",
		heading: "First Capital Using Recursion",
		category: "Recursion",
		date: "August 21 2019",
		desc: "Given a String T, find the 1'st occurrence of the capital (uppercase) alphabet. Print its index if present, else -1.",
		author: "PrepBytes",
		posted_on: "Mon Aug 24 2020 01:25:52 GMT+0530",
		author_img: "https://s3.ap-south-1.amazonaws.com/www.prepbytes.com/images/logoPrepBytesMbl.png",
		claps: 25,
		content: "# First Capital Using Recursion\n\n#### CONCEPTS USED:\nRecursion\n\n#### DIFFICULTY LEVEL:\nEasy\n\n#### PROBLEM STATEMENT$($SIMPLIFIED$)$:\nGiven a String $T$, find the $1^{st}$ occurrence of the capital (`uppercase`) alphabet. Print its index if present, else $-1$. \n\n#### For Example:\n\n```\nInput : T = prepBytes\n\nOutput : 4\n```\n\n```\nInput : T = helloWorld\n\nOutput : 5\n```\n\n***Can we use `Recursion` here ?***\nYes, the problem can be divided into sub problems, for example $T$ $=$ \"prepBytes\", check if first character is `Upper Case`. If Yes print index else search in the remaining string.\n\n#### SOLVING APPROACH:\n\n1. Create a function with three parameters a `string`, `start` index,  `end` index.  \n\n2. Base conditions form the `Backbone` of recursion, so if `start` becomes greater than `end`, simply return $-1$.\n\n3. Because this implies entire string has been traversed but no `upper case` letter was found.\n\n4. If the Ascii value of current char is greater than or equal to $65$ and less than or equal to $90$, this means an `upper case` letter is found, simply return this `index` value.\n\n#### ALGORITHM:\n\n```\nIsUpperCase(string, i, j)\n\n  if (entire string is traversed or i becomes greater than j)\n    return -1\n\n if (character at ith index is upper case)\n    return i\n  else\n    return IsUpperCase(string, i+1, j)\n```\n\n#### SOLUTIONS:\n\n#### ONE EXPECTED SOLUTION$($C$)$:\n\n```c\n#include <stdio.h>\n\nint first_upper(char s[],int i){\n  if(s[i] == '\\0')                   //base condition\n    return -1;\n  if(s[i] >= 65 && s[i] <=90)\n    return i;\n  else\n    return first_upper(s,i+1);\n}\nint main()\n{\n  int n;\n  scanf(\"%d\",&n);\n  while(n--){\n    char s[100000];\n    scanf(\"%s\",s);\n    printf(\"%d\n\",first_upper(s,0));\n  \n  }\n  return 0; \n}\n```\n\n#### ONE EXPECTED SOLUTION$($C++$)$:\n \n```cpp\n #include <bits/stdc++.h>\nusing namespace std;\n\nint first_upper(string s,int first,int last){\n  \n  if(first>last)       //base condition\n    return -1;\n  if(s[first] >= 65 && s[first] <= 90)\n    return first;\n  else\n    return first_upper(s,first+1,last);\n}\nint main()\n{\n  int n;cin>>n;\n while(n--){\n    string s;cin>>s;\n    int first = 0;\n    int last = s.size()-1;\n    cout<<first_upper(s,first,last)<<\"\n\";\n  }\n  return 0;\n}\n```\n\n#### ONE EXPECTED SOLUTION$($JAVA$)$:\n\n```java\nimport java.util.*;\nimport java.io.*;\n\npublic class Main {\n  \n  static int first_upper(String s,int first){\n  if(first >= s.length())          //base condition\n    return -1;\n  if (Character.isUpperCase(s.charAt(first)))  \n      return first;\n else\n    return first_upper(s,first+1);\n  }\n\n  public static void main(String args[]) throws IOException {\n   \n    Scanner sc = new Scanner(System.in);\n    int n = sc.nextInt();\n    while(n!=0){\n      String s = sc.next();\n      int first = 0;\n      System.out.println(first_upper(s,first));\n      n--;\n    }\n  }\n}\n```\n\n#### What do you think `Time Complexity` of this solution can be ?\n\n1. $O(N)$  \n\n2. $O(N^2)$\n\n3. $O(N*logN)$\n\n4. $O(2^N)$\n\nTime Complexity: $O(N)$\n"
	}
]