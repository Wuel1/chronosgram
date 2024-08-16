import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#16041B',
  },
  contentContainer: {
    padding: 20,
    paddingTop: 80,
  },
  profileBox: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  profileIcon: {
    marginRight: 15,
  },
  textContainer: {
    flex: 1,
  },
  fullName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
  },
  userInfo: {
    fontSize: 16,
    color: '#666',
  },
  horizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#6A0D91',
    marginRight: 10,
  },
  editButton: {
    backgroundColor: '#6A0D91',
    borderRadius: 5,
    padding: 5,
  },
  horizontalScrollView: {
    marginBottom: 20,
  },
  scrollViewContent: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  smallProfileBox: {
    width: '48%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  smallIcon: {
    marginRight: 15,
  },
  smallTextContainer: {
    flex: 1,
  },
  smallUniversity: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  smallCityName: {
    fontSize: 14,
    color: '#666',
  },
  smallCourse: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  smallCourseType: {
    fontSize: 14,
    color: '#666',
  },
  smallUserType: {
    fontSize: 16,
    color: '#666',
  },
  smallTurnoLivre: {
    fontSize: 16,
    color: '#666',
  },
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
  input: {
    backgroundColor: '#f2f2f2',
    borderRadius: 5,
    padding: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default styles;
