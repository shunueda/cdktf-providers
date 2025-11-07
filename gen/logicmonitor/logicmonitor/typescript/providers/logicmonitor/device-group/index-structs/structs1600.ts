import * as cdktf from 'cdktf';
import { DeviceGroupExtraServicesAPPLICATIONELB,
deviceGroupExtraServicesAPPLICATIONELBToTerraform,
deviceGroupExtraServicesAPPLICATIONELBToHclTerraform,
DeviceGroupExtraServicesAPPLICATIONELBList,
DeviceGroupExtraServicesAPPLICATIONGATEWAY,
deviceGroupExtraServicesAPPLICATIONGATEWAYToTerraform,
deviceGroupExtraServicesAPPLICATIONGATEWAYToHclTerraform,
DeviceGroupExtraServicesAPPLICATIONGATEWAYList,
DeviceGroupExtraServicesAPPLICATIONINSIGHTS,
deviceGroupExtraServicesAPPLICATIONINSIGHTSToTerraform,
deviceGroupExtraServicesAPPLICATIONINSIGHTSToHclTerraform,
DeviceGroupExtraServicesAPPLICATIONINSIGHTSList,
DeviceGroupExtraServicesAPPSERVICE,
deviceGroupExtraServicesAPPSERVICEToTerraform,
deviceGroupExtraServicesAPPSERVICEToHclTerraform,
DeviceGroupExtraServicesAPPSERVICEList,
DeviceGroupExtraServicesAPPSERVICEPLAN,
deviceGroupExtraServicesAPPSERVICEPLANToTerraform,
deviceGroupExtraServicesAPPSERVICEPLANToHclTerraform,
DeviceGroupExtraServicesAPPSERVICEPLANList,
DeviceGroupExtraServicesAPPSTREAM,
deviceGroupExtraServicesAPPSTREAMToTerraform,
deviceGroupExtraServicesAPPSTREAMToHclTerraform,
DeviceGroupExtraServicesAPPSTREAMList,
DeviceGroupExtraServicesATHENA,
deviceGroupExtraServicesATHENAToTerraform,
deviceGroupExtraServicesATHENAToHclTerraform,
DeviceGroupExtraServicesATHENAList,
DeviceGroupExtraServicesAUTOMATIONACCOUNT,
deviceGroupExtraServicesAUTOMATIONACCOUNTToTerraform,
deviceGroupExtraServicesAUTOMATIONACCOUNTToHclTerraform,
DeviceGroupExtraServicesAUTOMATIONACCOUNTList,
DeviceGroupExtraServicesAUTOSCALING,
deviceGroupExtraServicesAUTOSCALINGToTerraform,
deviceGroupExtraServicesAUTOSCALINGToHclTerraform,
DeviceGroupExtraServicesAUTOSCALINGList,
DeviceGroupExtraServicesApiGATEWAY,
deviceGroupExtraServicesApiGATEWAYToTerraform,
deviceGroupExtraServicesApiGATEWAYToHclTerraform,
DeviceGroupExtraServicesApiGATEWAYList,
DeviceGroupExtraServicesApiMANAGEMENT,
deviceGroupExtraServicesApiMANAGEMENTToTerraform,
deviceGroupExtraServicesApiMANAGEMENTToHclTerraform,
DeviceGroupExtraServicesApiMANAGEMENTList,
DeviceGroupExtraServicesBACKUPPROTECTEDITEMS,
deviceGroupExtraServicesBACKUPPROTECTEDITEMSToTerraform,
deviceGroupExtraServicesBACKUPPROTECTEDITEMSToHclTerraform,
DeviceGroupExtraServicesBACKUPPROTECTEDITEMSList,
DeviceGroupExtraServicesBLOBSTORAGE,
deviceGroupExtraServicesBLOBSTORAGEToTerraform,
deviceGroupExtraServicesBLOBSTORAGEToHclTerraform,
DeviceGroupExtraServicesBLOBSTORAGEList,
DeviceGroupExtraServicesCLOUDFRONT,
deviceGroupExtraServicesCLOUDFRONTToTerraform,
deviceGroupExtraServicesCLOUDFRONTToHclTerraform,
DeviceGroupExtraServicesCLOUDFRONTList,
DeviceGroupExtraServicesCLOUDSEARCH,
deviceGroupExtraServicesCLOUDSEARCHToTerraform,
deviceGroupExtraServicesCLOUDSEARCHToHclTerraform,
DeviceGroupExtraServicesCLOUDSEARCHList,
DeviceGroupExtraServicesCODEBUiLD,
deviceGroupExtraServicesCODEBUiLDToTerraform,
deviceGroupExtraServicesCODEBUiLDToHclTerraform,
DeviceGroupExtraServicesCODEBUiLDList,
DeviceGroupExtraServicesCOGNITIVESEARCH,
deviceGroupExtraServicesCOGNITIVESEARCHToTerraform,
deviceGroupExtraServicesCOGNITIVESEARCHToHclTerraform,
DeviceGroupExtraServicesCOGNITIVESEARCHList,
DeviceGroupExtraServicesCOGNITIVESERVICES,
deviceGroupExtraServicesCOGNITIVESERVICESToTerraform,
deviceGroupExtraServicesCOGNITIVESERVICESToHclTerraform,
DeviceGroupExtraServicesCOGNITIVESERVICESList,
DeviceGroupExtraServicesCOGNITO,
deviceGroupExtraServicesCOGNITOToTerraform,
deviceGroupExtraServicesCOGNITOToHclTerraform,
DeviceGroupExtraServicesCOGNITOList,
DeviceGroupExtraServicesCOSMOSDB,
deviceGroupExtraServicesCOSMOSDBToTerraform,
deviceGroupExtraServicesCOSMOSDBToHclTerraform,
DeviceGroupExtraServicesCOSMOSDBList,
DeviceGroupExtraServicesDATAFACTORY,
deviceGroupExtraServicesDATAFACTORYToTerraform,
deviceGroupExtraServicesDATAFACTORYToHclTerraform,
DeviceGroupExtraServicesDATAFACTORYList,
DeviceGroupExtraServicesDIRECTCONNECT,
deviceGroupExtraServicesDIRECTCONNECTToTerraform,
deviceGroupExtraServicesDIRECTCONNECTToHclTerraform,
DeviceGroupExtraServicesDIRECTCONNECTList,
DeviceGroupExtraDevicesList,
DeviceGroupExtraAccount,
deviceGroupExtraAccountToTerraform,
deviceGroupExtraAccountToHclTerraform,
DeviceGroupExtraAccountList,
DeviceGroupExtraDefault,
deviceGroupExtraDefaultToTerraform,
deviceGroupExtraDefaultToHclTerraform,
DeviceGroupExtraDefaultList } from './structs0'
import { DeviceGroupExtraServicesDMSREPLICATION,
deviceGroupExtraServicesDMSREPLICATIONToTerraform,
deviceGroupExtraServicesDMSREPLICATIONToHclTerraform,
DeviceGroupExtraServicesDMSREPLICATIONList,
DeviceGroupExtraServicesDMSREPLICATIONTASKS,
deviceGroupExtraServicesDMSREPLICATIONTASKSToTerraform,
deviceGroupExtraServicesDMSREPLICATIONTASKSToHclTerraform,
DeviceGroupExtraServicesDMSREPLICATIONTASKSList,
DeviceGroupExtraServicesDOCDB,
deviceGroupExtraServicesDOCDBToTerraform,
deviceGroupExtraServicesDOCDBToHclTerraform,
DeviceGroupExtraServicesDOCDBList,
DeviceGroupExtraServicesDYNAMODB,
deviceGroupExtraServicesDYNAMODBToTerraform,
deviceGroupExtraServicesDYNAMODBToHclTerraform,
DeviceGroupExtraServicesDYNAMODBList,
DeviceGroupExtraServicesEBS,
deviceGroupExtraServicesEBSToTerraform,
deviceGroupExtraServicesEBSToHclTerraform,
DeviceGroupExtraServicesEBSList,
DeviceGroupExtraServicesEC2,
deviceGroupExtraServicesEC2ToTerraform,
deviceGroupExtraServicesEC2ToHclTerraform,
DeviceGroupExtraServicesEC2List,
DeviceGroupExtraServicesECS,
deviceGroupExtraServicesECSToTerraform,
deviceGroupExtraServicesECSToHclTerraform,
DeviceGroupExtraServicesECSList,
DeviceGroupExtraServicesEFS,
deviceGroupExtraServicesEFSToTerraform,
deviceGroupExtraServicesEFSToHclTerraform,
DeviceGroupExtraServicesEFSList,
DeviceGroupExtraServicesELASTICACHE,
deviceGroupExtraServicesELASTICACHEToTerraform,
deviceGroupExtraServicesELASTICACHEToHclTerraform,
DeviceGroupExtraServicesELASTICACHEList,
DeviceGroupExtraServicesELASTICBEANSTALK,
deviceGroupExtraServicesELASTICBEANSTALKToTerraform,
deviceGroupExtraServicesELASTICBEANSTALKToHclTerraform,
DeviceGroupExtraServicesELASTICBEANSTALKList,
DeviceGroupExtraServicesELASTICSEARCH,
deviceGroupExtraServicesELASTICSEARCHToTerraform,
deviceGroupExtraServicesELASTICSEARCHToHclTerraform,
DeviceGroupExtraServicesELASTICSEARCHList,
DeviceGroupExtraServicesELASTICTRANSCODER,
deviceGroupExtraServicesELASTICTRANSCODERToTerraform,
deviceGroupExtraServicesELASTICTRANSCODERToHclTerraform,
DeviceGroupExtraServicesELASTICTRANSCODERList,
DeviceGroupExtraServicesELB,
deviceGroupExtraServicesELBToTerraform,
deviceGroupExtraServicesELBToHclTerraform,
DeviceGroupExtraServicesELBList,
DeviceGroupExtraServicesEMR,
deviceGroupExtraServicesEMRToTerraform,
deviceGroupExtraServicesEMRToHclTerraform,
DeviceGroupExtraServicesEMRList,
DeviceGroupExtraServicesEVENTBRIdGE,
deviceGroupExtraServicesEVENTBRIdGEToTerraform,
deviceGroupExtraServicesEVENTBRIdGEToHclTerraform,
DeviceGroupExtraServicesEVENTBRIdGEList,
DeviceGroupExtraServicesEVENTHUB,
deviceGroupExtraServicesEVENTHUBToTerraform,
deviceGroupExtraServicesEVENTHUBToHclTerraform,
DeviceGroupExtraServicesEVENTHUBList,
DeviceGroupExtraServicesEXPRESSROUTECIRCUiT,
deviceGroupExtraServicesEXPRESSROUTECIRCUiTToTerraform,
deviceGroupExtraServicesEXPRESSROUTECIRCUiTToHclTerraform,
DeviceGroupExtraServicesEXPRESSROUTECIRCUiTList,
DeviceGroupExtraServicesFILESTORAGE,
deviceGroupExtraServicesFILESTORAGEToTerraform,
deviceGroupExtraServicesFILESTORAGEToHclTerraform,
DeviceGroupExtraServicesFILESTORAGEList,
DeviceGroupExtraServicesFIREHOSE,
deviceGroupExtraServicesFIREHOSEToTerraform,
deviceGroupExtraServicesFIREHOSEToHclTerraform,
DeviceGroupExtraServicesFIREHOSEList,
DeviceGroupExtraServicesFIREWALL,
deviceGroupExtraServicesFIREWALLToTerraform,
deviceGroupExtraServicesFIREWALLToHclTerraform,
DeviceGroupExtraServicesFIREWALLList,
DeviceGroupExtraServicesFRONTDOORS,
deviceGroupExtraServicesFRONTDOORSToTerraform,
deviceGroupExtraServicesFRONTDOORSToHclTerraform,
DeviceGroupExtraServicesFRONTDOORSList,
DeviceGroupExtraServicesFSX,
deviceGroupExtraServicesFSXToTerraform,
deviceGroupExtraServicesFSXToHclTerraform,
DeviceGroupExtraServicesFSXList,
DeviceGroupExtraServicesGLUE,
deviceGroupExtraServicesGLUEToTerraform,
deviceGroupExtraServicesGLUEToHclTerraform,
DeviceGroupExtraServicesGLUEList,
DeviceGroupExtraServicesKEYVAULT,
deviceGroupExtraServicesKEYVAULTToTerraform,
deviceGroupExtraServicesKEYVAULTToHclTerraform,
DeviceGroupExtraServicesKEYVAULTList,
DeviceGroupExtraServicesKINESIS,
deviceGroupExtraServicesKINESISToTerraform,
deviceGroupExtraServicesKINESISToHclTerraform,
DeviceGroupExtraServicesKINESISList } from './structs400'
import { DeviceGroupExtraServicesKINESISVIdEO,
deviceGroupExtraServicesKINESISVIdEOToTerraform,
deviceGroupExtraServicesKINESISVIdEOToHclTerraform,
DeviceGroupExtraServicesKINESISVIdEOList,
DeviceGroupExtraServicesLAMBDA,
deviceGroupExtraServicesLAMBDAToTerraform,
deviceGroupExtraServicesLAMBDAToHclTerraform,
DeviceGroupExtraServicesLAMBDAList,
DeviceGroupExtraServicesLOADBALANCERS,
deviceGroupExtraServicesLOADBALANCERSToTerraform,
deviceGroupExtraServicesLOADBALANCERSToHclTerraform,
DeviceGroupExtraServicesLOADBALANCERSList,
DeviceGroupExtraServicesLOGANALYTICSWORKSPACES,
deviceGroupExtraServicesLOGANALYTICSWORKSPACESToTerraform,
deviceGroupExtraServicesLOGANALYTICSWORKSPACESToHclTerraform,
DeviceGroupExtraServicesLOGANALYTICSWORKSPACESList,
DeviceGroupExtraServicesLOGICAPPS,
deviceGroupExtraServicesLOGICAPPSToTerraform,
deviceGroupExtraServicesLOGICAPPSToHclTerraform,
DeviceGroupExtraServicesLOGICAPPSList,
DeviceGroupExtraServicesMEDIACONNECT,
deviceGroupExtraServicesMEDIACONNECTToTerraform,
deviceGroupExtraServicesMEDIACONNECTToHclTerraform,
DeviceGroupExtraServicesMEDIACONNECTList,
DeviceGroupExtraServicesMEDIACONVERT,
deviceGroupExtraServicesMEDIACONVERTToTerraform,
deviceGroupExtraServicesMEDIACONVERTToHclTerraform,
DeviceGroupExtraServicesMEDIACONVERTList,
DeviceGroupExtraServicesMEDIAPACKAGELIVE,
deviceGroupExtraServicesMEDIAPACKAGELIVEToTerraform,
deviceGroupExtraServicesMEDIAPACKAGELIVEToHclTerraform,
DeviceGroupExtraServicesMEDIAPACKAGELIVEList,
DeviceGroupExtraServicesMEDIAPACKAGEVOD,
deviceGroupExtraServicesMEDIAPACKAGEVODToTerraform,
deviceGroupExtraServicesMEDIAPACKAGEVODToHclTerraform,
DeviceGroupExtraServicesMEDIAPACKAGEVODList,
DeviceGroupExtraServicesMEDIASTORE,
deviceGroupExtraServicesMEDIASTOREToTerraform,
deviceGroupExtraServicesMEDIASTOREToHclTerraform,
DeviceGroupExtraServicesMEDIASTOREList,
DeviceGroupExtraServicesMEDIATAILOR,
deviceGroupExtraServicesMEDIATAILORToTerraform,
deviceGroupExtraServicesMEDIATAILORToHclTerraform,
DeviceGroupExtraServicesMEDIATAILORList,
DeviceGroupExtraServicesMQ,
deviceGroupExtraServicesMQToTerraform,
deviceGroupExtraServicesMQToHclTerraform,
DeviceGroupExtraServicesMQList,
DeviceGroupExtraServicesMSKBROKER,
deviceGroupExtraServicesMSKBROKERToTerraform,
deviceGroupExtraServicesMSKBROKERToHclTerraform,
DeviceGroupExtraServicesMSKBROKERList,
DeviceGroupExtraServicesMSKCLUSTER,
deviceGroupExtraServicesMSKCLUSTERToTerraform,
deviceGroupExtraServicesMSKCLUSTERToHclTerraform,
DeviceGroupExtraServicesMSKCLUSTERList,
DeviceGroupExtraServicesMYSql,
deviceGroupExtraServicesMYSqlToTerraform,
deviceGroupExtraServicesMYSqlToHclTerraform,
DeviceGroupExtraServicesMYSqlList,
DeviceGroupExtraServicesNATGATEWAY,
deviceGroupExtraServicesNATGATEWAYToTerraform,
deviceGroupExtraServicesNATGATEWAYToHclTerraform,
DeviceGroupExtraServicesNATGATEWAYList,
DeviceGroupExtraServicesNETWORKELB,
deviceGroupExtraServicesNETWORKELBToTerraform,
deviceGroupExtraServicesNETWORKELBToHclTerraform,
DeviceGroupExtraServicesNETWORKELBList,
DeviceGroupExtraServicesNETWORKINTERFACE,
deviceGroupExtraServicesNETWORKINTERFACEToTerraform,
deviceGroupExtraServicesNETWORKINTERFACEToHclTerraform,
DeviceGroupExtraServicesNETWORKINTERFACEList,
DeviceGroupExtraServicesOPSWORKS,
deviceGroupExtraServicesOPSWORKSToTerraform,
deviceGroupExtraServicesOPSWORKSToHclTerraform,
DeviceGroupExtraServicesOPSWORKSList,
DeviceGroupExtraServicesPOSTGRESql,
deviceGroupExtraServicesPOSTGRESqlToTerraform,
deviceGroupExtraServicesPOSTGRESqlToHclTerraform,
DeviceGroupExtraServicesPOSTGRESqlList,
DeviceGroupExtraServicesPUBLICIp,
deviceGroupExtraServicesPUBLICIpToTerraform,
deviceGroupExtraServicesPUBLICIpToHclTerraform,
DeviceGroupExtraServicesPUBLICIpList,
DeviceGroupExtraServicesQUEUESTORAGE,
deviceGroupExtraServicesQUEUESTORAGEToTerraform,
deviceGroupExtraServicesQUEUESTORAGEToHclTerraform,
DeviceGroupExtraServicesQUEUESTORAGEList,
DeviceGroupExtraServicesRDS,
deviceGroupExtraServicesRDSToTerraform,
deviceGroupExtraServicesRDSToHclTerraform,
DeviceGroupExtraServicesRDSList,
DeviceGroupExtraServicesRECOVERYPROTECTEDITEM,
deviceGroupExtraServicesRECOVERYPROTECTEDITEMToTerraform,
deviceGroupExtraServicesRECOVERYPROTECTEDITEMToHclTerraform,
DeviceGroupExtraServicesRECOVERYPROTECTEDITEMList,
DeviceGroupExtraServicesRECOVERYSERVICES,
deviceGroupExtraServicesRECOVERYSERVICESToTerraform,
deviceGroupExtraServicesRECOVERYSERVICESToHclTerraform,
DeviceGroupExtraServicesRECOVERYSERVICESList } from './structs800'
import { DeviceGroupExtraServicesREDISCACHE,
deviceGroupExtraServicesREDISCACHEToTerraform,
deviceGroupExtraServicesREDISCACHEToHclTerraform,
DeviceGroupExtraServicesREDISCACHEList,
DeviceGroupExtraServicesREDSHIFT,
deviceGroupExtraServicesREDSHIFTToTerraform,
deviceGroupExtraServicesREDSHIFTToHclTerraform,
DeviceGroupExtraServicesREDSHIFTList,
DeviceGroupExtraServicesROUTE53,
deviceGroupExtraServicesROUTE53ToTerraform,
deviceGroupExtraServicesROUTE53ToHclTerraform,
DeviceGroupExtraServicesROUTE53List,
DeviceGroupExtraServicesROUTE53RESOLVER,
deviceGroupExtraServicesROUTE53RESOLVERToTerraform,
deviceGroupExtraServicesROUTE53RESOLVERToHclTerraform,
DeviceGroupExtraServicesROUTE53RESOLVERList,
DeviceGroupExtraServicesS3,
deviceGroupExtraServicesS3ToTerraform,
deviceGroupExtraServicesS3ToHclTerraform,
DeviceGroupExtraServicesS3List,
DeviceGroupExtraServicesSAGEMAKER,
deviceGroupExtraServicesSAGEMAKERToTerraform,
deviceGroupExtraServicesSAGEMAKERToHclTerraform,
DeviceGroupExtraServicesSAGEMAKERList,
DeviceGroupExtraServicesSERVICEBUS,
deviceGroupExtraServicesSERVICEBUSToTerraform,
deviceGroupExtraServicesSERVICEBUSToHclTerraform,
DeviceGroupExtraServicesSERVICEBUSList,
DeviceGroupExtraServicesSES,
deviceGroupExtraServicesSESToTerraform,
deviceGroupExtraServicesSESToHclTerraform,
DeviceGroupExtraServicesSESList,
DeviceGroupExtraServicesSNS,
deviceGroupExtraServicesSNSToTerraform,
deviceGroupExtraServicesSNSToHclTerraform,
DeviceGroupExtraServicesSNSList,
DeviceGroupExtraServicesSQS,
deviceGroupExtraServicesSQSToTerraform,
deviceGroupExtraServicesSQSToHclTerraform,
DeviceGroupExtraServicesSQSList,
DeviceGroupExtraServicesSTEPFUNCTIONS,
deviceGroupExtraServicesSTEPFUNCTIONSToTerraform,
deviceGroupExtraServicesSTEPFUNCTIONSToHclTerraform,
DeviceGroupExtraServicesSTEPFUNCTIONSList,
DeviceGroupExtraServicesSTORAGEACCOUNT,
deviceGroupExtraServicesSTORAGEACCOUNTToTerraform,
deviceGroupExtraServicesSTORAGEACCOUNTToHclTerraform,
DeviceGroupExtraServicesSTORAGEACCOUNTList,
DeviceGroupExtraServicesSWFACTIVITY,
deviceGroupExtraServicesSWFACTIVITYToTerraform,
deviceGroupExtraServicesSWFACTIVITYToHclTerraform,
DeviceGroupExtraServicesSWFACTIVITYList,
DeviceGroupExtraServicesSWFWORKFLOW,
deviceGroupExtraServicesSWFWORKFLOWToTerraform,
deviceGroupExtraServicesSWFWORKFLOWToHclTerraform,
DeviceGroupExtraServicesSWFWORKFLOWList,
DeviceGroupExtraServicesSYNAPSEWORKSPACES,
deviceGroupExtraServicesSYNAPSEWORKSPACESToTerraform,
deviceGroupExtraServicesSYNAPSEWORKSPACESToHclTerraform,
DeviceGroupExtraServicesSYNAPSEWORKSPACESList,
DeviceGroupExtraServicesSqlDATABASE,
deviceGroupExtraServicesSqlDATABASEToTerraform,
deviceGroupExtraServicesSqlDATABASEToHclTerraform,
DeviceGroupExtraServicesSqlDATABASEList,
DeviceGroupExtraServicesSqlELASTICPOOL,
deviceGroupExtraServicesSqlELASTICPOOLToTerraform,
deviceGroupExtraServicesSqlELASTICPOOLToHclTerraform,
DeviceGroupExtraServicesSqlELASTICPOOLList,
DeviceGroupExtraServicesSqlMANAGEDINSTANCE,
deviceGroupExtraServicesSqlMANAGEDINSTANCEToTerraform,
deviceGroupExtraServicesSqlMANAGEDINSTANCEToHclTerraform,
DeviceGroupExtraServicesSqlMANAGEDINSTANCEList,
DeviceGroupExtraServicesTABLESTORAGE,
deviceGroupExtraServicesTABLESTORAGEToTerraform,
deviceGroupExtraServicesTABLESTORAGEToHclTerraform,
DeviceGroupExtraServicesTABLESTORAGEList,
DeviceGroupExtraServicesTRAFFICMANAGER,
deviceGroupExtraServicesTRAFFICMANAGERToTerraform,
deviceGroupExtraServicesTRAFFICMANAGERToHclTerraform,
DeviceGroupExtraServicesTRAFFICMANAGERList,
DeviceGroupExtraServicesTRANSITGATEWAY,
deviceGroupExtraServicesTRANSITGATEWAYToTerraform,
deviceGroupExtraServicesTRANSITGATEWAYToHclTerraform,
DeviceGroupExtraServicesTRANSITGATEWAYList,
DeviceGroupExtraServicesVIRTUALDESKTOP,
deviceGroupExtraServicesVIRTUALDESKTOPToTerraform,
deviceGroupExtraServicesVIRTUALDESKTOPToHclTerraform,
DeviceGroupExtraServicesVIRTUALDESKTOPList,
DeviceGroupExtraServicesVIRTUALMACHINE,
deviceGroupExtraServicesVIRTUALMACHINEToTerraform,
deviceGroupExtraServicesVIRTUALMACHINEToHclTerraform,
DeviceGroupExtraServicesVIRTUALMACHINEList,
DeviceGroupExtraServicesVIRTUALMACHINESCALESET,
deviceGroupExtraServicesVIRTUALMACHINESCALESETToTerraform,
deviceGroupExtraServicesVIRTUALMACHINESCALESETToHclTerraform,
DeviceGroupExtraServicesVIRTUALMACHINESCALESETList,
DeviceGroupExtraServicesVIRTUALMACHINESCALESETVm,
deviceGroupExtraServicesVIRTUALMACHINESCALESETVmToTerraform,
deviceGroupExtraServicesVIRTUALMACHINESCALESETVmToHclTerraform,
DeviceGroupExtraServicesVIRTUALMACHINESCALESETVmList } from './structs1200'
export interface DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#name DeviceGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#operation DeviceGroup#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#value DeviceGroup#value}
  */
  readonly value?: string;
}

export function deviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsToTerraform(struct?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsToHclTerraform(struct?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsOutputReference {
    return new DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#applies_to DeviceGroup#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#auto_balanced_collector_group_id DeviceGroup#auto_balanced_collector_group_id}
  */
  readonly autoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#collector_id DeviceGroup#collector_id}
  */
  readonly collectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#priority DeviceGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#use_public_ip DeviceGroup#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function deviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsToTerraform(struct?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    auto_balanced_collector_group_id: cdktf.numberToTerraform(struct!.autoBalancedCollectorGroupId),
    collector_id: cdktf.numberToTerraform(struct!.collectorId),
    priority: cdktf.numberToTerraform(struct!.priority),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}


export function deviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsToHclTerraform(struct?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_balanced_collector_group_id: {
      value: cdktf.numberToHclTerraform(struct!.autoBalancedCollectorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_id: {
      value: cdktf.numberToHclTerraform(struct!.collectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
    }
    if (this._autoBalancedCollectorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBalancedCollectorGroupId = this._autoBalancedCollectorGroupId;
    }
    if (this._collectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorId = this._collectorId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._usePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIp = this._usePublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesTo = undefined;
      this._autoBalancedCollectorGroupId = undefined;
      this._collectorId = undefined;
      this._priority = undefined;
      this._usePublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliesTo = value.appliesTo;
      this._autoBalancedCollectorGroupId = value.autoBalancedCollectorGroupId;
      this._collectorId = value.collectorId;
      this._priority = value.priority;
      this._usePublicIp = value.usePublicIp;
    }
  }

  // applies_to - computed: false, optional: true, required: false
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  public resetAppliesTo() {
    this._appliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // auto_balanced_collector_group_id - computed: false, optional: true, required: false
  private _autoBalancedCollectorGroupId?: number; 
  public get autoBalancedCollectorGroupId() {
    return this.getNumberAttribute('auto_balanced_collector_group_id');
  }
  public set autoBalancedCollectorGroupId(value: number) {
    this._autoBalancedCollectorGroupId = value;
  }
  public resetAutoBalancedCollectorGroupId() {
    this._autoBalancedCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalancedCollectorGroupIdInput() {
    return this._autoBalancedCollectorGroupId;
  }

  // collector_id - computed: false, optional: true, required: false
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  public resetCollectorId() {
    this._collectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // use_public_ip - computed: false, optional: true, required: false
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }
}

export class DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsOutputReference {
    return new DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#collectors DeviceGroup#collectors}
  */
  readonly collectors?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#enabled DeviceGroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function deviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigToTerraform(struct?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collectors: cdktf.listMapper(deviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsToTerraform, false)(struct!.collectors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function deviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigToHclTerraform(struct?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collectors: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectors.internalValue = value.collectors;
      this._enabled = value.enabled;
    }
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigOutputReference {
    return new DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesVIRTUALNETWORKGATEWAY {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#custom_n_s_p_schedule DeviceGroup#custom_n_s_p_schedule}
  */
  readonly customNSPSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#dead_operation DeviceGroup#dead_operation}
  */
  readonly deadOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#device_display_name_template DeviceGroup#device_display_name_template}
  */
  readonly deviceDisplayNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#disable_stop_terminate_host_monitor DeviceGroup#disable_stop_terminate_host_monitor}
  */
  readonly disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#disable_terminated_host_alerting DeviceGroup#disable_terminated_host_alerting}
  */
  readonly disableTerminatedHostAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#monitoring_region_infos DeviceGroup#monitoring_region_infos}
  */
  readonly monitoringRegionInfos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#monitoring_regions DeviceGroup#monitoring_regions}
  */
  readonly monitoringRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#name_filter DeviceGroup#name_filter}
  */
  readonly nameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#select_all DeviceGroup#select_all}
  */
  readonly selectAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#tags DeviceGroup#tags}
  */
  readonly tags?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#use_default DeviceGroup#use_default}
  */
  readonly useDefault: boolean | cdktf.IResolvable;
  /**
  * normal_collector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#normal_collector_config DeviceGroup#normal_collector_config}
  */
  readonly normalCollectorConfig?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig[] | cdktf.IResolvable;
}

export function deviceGroupExtraServicesVIRTUALNETWORKGATEWAYToTerraform(struct?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAY | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_n_s_p_schedule: cdktf.stringToTerraform(struct!.customNSPSchedule),
    dead_operation: cdktf.stringToTerraform(struct!.deadOperation),
    device_display_name_template: cdktf.stringToTerraform(struct!.deviceDisplayNameTemplate),
    disable_stop_terminate_host_monitor: cdktf.booleanToTerraform(struct!.disableStopTerminateHostMonitor),
    disable_terminated_host_alerting: cdktf.booleanToTerraform(struct!.disableTerminatedHostAlerting),
    monitoring_region_infos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegionInfos),
    monitoring_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegions),
    name_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameFilter),
    select_all: cdktf.booleanToTerraform(struct!.selectAll),
    tags: cdktf.listMapper(deviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsToTerraform, false)(struct!.tags),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    normal_collector_config: cdktf.listMapper(deviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigToTerraform, true)(struct!.normalCollectorConfig),
  }
}


export function deviceGroupExtraServicesVIRTUALNETWORKGATEWAYToHclTerraform(struct?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAY | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_n_s_p_schedule: {
      value: cdktf.stringToHclTerraform(struct!.customNSPSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_operation: {
      value: cdktf.stringToHclTerraform(struct!.deadOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_display_name_template: {
      value: cdktf.stringToHclTerraform(struct!.deviceDisplayNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stop_terminate_host_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.disableStopTerminateHostMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_terminated_host_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.disableTerminatedHostAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_region_infos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegionInfos),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    monitoring_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    select_all: {
      value: cdktf.booleanToHclTerraform(struct!.selectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsList",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_collector_config: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigToHclTerraform, true)(struct!.normalCollectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesVIRTUALNETWORKGATEWAY | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNSPSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNSPSchedule = this._customNSPSchedule;
    }
    if (this._deadOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadOperation = this._deadOperation;
    }
    if (this._deviceDisplayNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDisplayNameTemplate = this._deviceDisplayNameTemplate;
    }
    if (this._disableStopTerminateHostMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStopTerminateHostMonitor = this._disableStopTerminateHostMonitor;
    }
    if (this._disableTerminatedHostAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTerminatedHostAlerting = this._disableTerminatedHostAlerting;
    }
    if (this._monitoringRegionInfos !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegionInfos = this._monitoringRegionInfos;
    }
    if (this._monitoringRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegions = this._monitoringRegions;
    }
    if (this._nameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFilter = this._nameFilter;
    }
    if (this._selectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAll = this._selectAll;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._normalCollectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalCollectorConfig = this._normalCollectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAY | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customNSPSchedule = undefined;
      this._deadOperation = undefined;
      this._deviceDisplayNameTemplate = undefined;
      this._disableStopTerminateHostMonitor = undefined;
      this._disableTerminatedHostAlerting = undefined;
      this._monitoringRegionInfos = undefined;
      this._monitoringRegions = undefined;
      this._nameFilter = undefined;
      this._selectAll = undefined;
      this._tags.internalValue = undefined;
      this._useDefault = undefined;
      this._normalCollectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customNSPSchedule = value.customNSPSchedule;
      this._deadOperation = value.deadOperation;
      this._deviceDisplayNameTemplate = value.deviceDisplayNameTemplate;
      this._disableStopTerminateHostMonitor = value.disableStopTerminateHostMonitor;
      this._disableTerminatedHostAlerting = value.disableTerminatedHostAlerting;
      this._monitoringRegionInfos = value.monitoringRegionInfos;
      this._monitoringRegions = value.monitoringRegions;
      this._nameFilter = value.nameFilter;
      this._selectAll = value.selectAll;
      this._tags.internalValue = value.tags;
      this._useDefault = value.useDefault;
      this._normalCollectorConfig.internalValue = value.normalCollectorConfig;
    }
  }

  // custom_n_s_p_schedule - computed: false, optional: true, required: false
  private _customNSPSchedule?: string; 
  public get customNSPSchedule() {
    return this.getStringAttribute('custom_n_s_p_schedule');
  }
  public set customNSPSchedule(value: string) {
    this._customNSPSchedule = value;
  }
  public resetCustomNSPSchedule() {
    this._customNSPSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNSPScheduleInput() {
    return this._customNSPSchedule;
  }

  // dead_operation - computed: false, optional: true, required: false
  private _deadOperation?: string; 
  public get deadOperation() {
    return this.getStringAttribute('dead_operation');
  }
  public set deadOperation(value: string) {
    this._deadOperation = value;
  }
  public resetDeadOperation() {
    this._deadOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadOperationInput() {
    return this._deadOperation;
  }

  // device_display_name_template - computed: false, optional: true, required: false
  private _deviceDisplayNameTemplate?: string; 
  public get deviceDisplayNameTemplate() {
    return this.getStringAttribute('device_display_name_template');
  }
  public set deviceDisplayNameTemplate(value: string) {
    this._deviceDisplayNameTemplate = value;
  }
  public resetDeviceDisplayNameTemplate() {
    this._deviceDisplayNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameTemplateInput() {
    return this._deviceDisplayNameTemplate;
  }

  // disable_stop_terminate_host_monitor - computed: false, optional: true, required: false
  private _disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable; 
  public get disableStopTerminateHostMonitor() {
    return this.getBooleanAttribute('disable_stop_terminate_host_monitor');
  }
  public set disableStopTerminateHostMonitor(value: boolean | cdktf.IResolvable) {
    this._disableStopTerminateHostMonitor = value;
  }
  public resetDisableStopTerminateHostMonitor() {
    this._disableStopTerminateHostMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStopTerminateHostMonitorInput() {
    return this._disableStopTerminateHostMonitor;
  }

  // disable_terminated_host_alerting - computed: false, optional: true, required: false
  private _disableTerminatedHostAlerting?: boolean | cdktf.IResolvable; 
  public get disableTerminatedHostAlerting() {
    return this.getBooleanAttribute('disable_terminated_host_alerting');
  }
  public set disableTerminatedHostAlerting(value: boolean | cdktf.IResolvable) {
    this._disableTerminatedHostAlerting = value;
  }
  public resetDisableTerminatedHostAlerting() {
    this._disableTerminatedHostAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerminatedHostAlertingInput() {
    return this._disableTerminatedHostAlerting;
  }

  // monitoring_region_infos - computed: false, optional: true, required: false
  private _monitoringRegionInfos?: string[]; 
  public get monitoringRegionInfos() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_region_infos'));
  }
  public set monitoringRegionInfos(value: string[]) {
    this._monitoringRegionInfos = value;
  }
  public resetMonitoringRegionInfos() {
    this._monitoringRegionInfos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionInfosInput() {
    return this._monitoringRegionInfos;
  }

  // monitoring_regions - computed: false, optional: true, required: false
  private _monitoringRegions?: string[]; 
  public get monitoringRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_regions'));
  }
  public set monitoringRegions(value: string[]) {
    this._monitoringRegions = value;
  }
  public resetMonitoringRegions() {
    this._monitoringRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionsInput() {
    return this._monitoringRegions;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string[]; 
  public get nameFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('name_filter'));
  }
  public set nameFilter(value: string[]) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // select_all - computed: false, optional: true, required: false
  private _selectAll?: boolean | cdktf.IResolvable; 
  public get selectAll() {
    return this.getBooleanAttribute('select_all');
  }
  public set selectAll(value: boolean | cdktf.IResolvable) {
    this._selectAll = value;
  }
  public resetSelectAll() {
    this._selectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllInput() {
    return this._selectAll;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // use_default - computed: false, optional: false, required: true
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // normal_collector_config - computed: false, optional: true, required: false
  private _normalCollectorConfig = new DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfigList(this, "normal_collector_config", false);
  public get normalCollectorConfig() {
    return this._normalCollectorConfig;
  }
  public putNormalCollectorConfig(value: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYNormalCollectorConfig[] | cdktf.IResolvable) {
    this._normalCollectorConfig.internalValue = value;
  }
  public resetNormalCollectorConfig() {
    this._normalCollectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalCollectorConfigInput() {
    return this._normalCollectorConfig.internalValue;
  }
}

export class DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesVIRTUALNETWORKGATEWAY[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYOutputReference {
    return new DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesVPNTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#name DeviceGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#operation DeviceGroup#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#value DeviceGroup#value}
  */
  readonly value?: string;
}

export function deviceGroupExtraServicesVPNTagsToTerraform(struct?: DeviceGroupExtraServicesVPNTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deviceGroupExtraServicesVPNTagsToHclTerraform(struct?: DeviceGroupExtraServicesVPNTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesVPNTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesVPNTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesVPNTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeviceGroupExtraServicesVPNTagsList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesVPNTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesVPNTagsOutputReference {
    return new DeviceGroupExtraServicesVPNTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesVPNNormalCollectorConfigCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#applies_to DeviceGroup#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#auto_balanced_collector_group_id DeviceGroup#auto_balanced_collector_group_id}
  */
  readonly autoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#collector_id DeviceGroup#collector_id}
  */
  readonly collectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#priority DeviceGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#use_public_ip DeviceGroup#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function deviceGroupExtraServicesVPNNormalCollectorConfigCollectorsToTerraform(struct?: DeviceGroupExtraServicesVPNNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    auto_balanced_collector_group_id: cdktf.numberToTerraform(struct!.autoBalancedCollectorGroupId),
    collector_id: cdktf.numberToTerraform(struct!.collectorId),
    priority: cdktf.numberToTerraform(struct!.priority),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}


export function deviceGroupExtraServicesVPNNormalCollectorConfigCollectorsToHclTerraform(struct?: DeviceGroupExtraServicesVPNNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_balanced_collector_group_id: {
      value: cdktf.numberToHclTerraform(struct!.autoBalancedCollectorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_id: {
      value: cdktf.numberToHclTerraform(struct!.collectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesVPNNormalCollectorConfigCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
    }
    if (this._autoBalancedCollectorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBalancedCollectorGroupId = this._autoBalancedCollectorGroupId;
    }
    if (this._collectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorId = this._collectorId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._usePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIp = this._usePublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesVPNNormalCollectorConfigCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesTo = undefined;
      this._autoBalancedCollectorGroupId = undefined;
      this._collectorId = undefined;
      this._priority = undefined;
      this._usePublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliesTo = value.appliesTo;
      this._autoBalancedCollectorGroupId = value.autoBalancedCollectorGroupId;
      this._collectorId = value.collectorId;
      this._priority = value.priority;
      this._usePublicIp = value.usePublicIp;
    }
  }

  // applies_to - computed: false, optional: true, required: false
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  public resetAppliesTo() {
    this._appliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // auto_balanced_collector_group_id - computed: false, optional: true, required: false
  private _autoBalancedCollectorGroupId?: number; 
  public get autoBalancedCollectorGroupId() {
    return this.getNumberAttribute('auto_balanced_collector_group_id');
  }
  public set autoBalancedCollectorGroupId(value: number) {
    this._autoBalancedCollectorGroupId = value;
  }
  public resetAutoBalancedCollectorGroupId() {
    this._autoBalancedCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalancedCollectorGroupIdInput() {
    return this._autoBalancedCollectorGroupId;
  }

  // collector_id - computed: false, optional: true, required: false
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  public resetCollectorId() {
    this._collectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // use_public_ip - computed: false, optional: true, required: false
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }
}

export class DeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesVPNNormalCollectorConfigCollectors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsOutputReference {
    return new DeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesVPNNormalCollectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#collectors DeviceGroup#collectors}
  */
  readonly collectors?: DeviceGroupExtraServicesVPNNormalCollectorConfigCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#enabled DeviceGroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function deviceGroupExtraServicesVPNNormalCollectorConfigToTerraform(struct?: DeviceGroupExtraServicesVPNNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collectors: cdktf.listMapper(deviceGroupExtraServicesVPNNormalCollectorConfigCollectorsToTerraform, false)(struct!.collectors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function deviceGroupExtraServicesVPNNormalCollectorConfigToHclTerraform(struct?: DeviceGroupExtraServicesVPNNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collectors: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVPNNormalCollectorConfigCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesVPNNormalCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesVPNNormalCollectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesVPNNormalCollectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectors.internalValue = value.collectors;
      this._enabled = value.enabled;
    }
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new DeviceGroupExtraServicesVPNNormalCollectorConfigCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: DeviceGroupExtraServicesVPNNormalCollectorConfigCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DeviceGroupExtraServicesVPNNormalCollectorConfigList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesVPNNormalCollectorConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesVPNNormalCollectorConfigOutputReference {
    return new DeviceGroupExtraServicesVPNNormalCollectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesVPN {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#custom_n_s_p_schedule DeviceGroup#custom_n_s_p_schedule}
  */
  readonly customNSPSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#dead_operation DeviceGroup#dead_operation}
  */
  readonly deadOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#device_display_name_template DeviceGroup#device_display_name_template}
  */
  readonly deviceDisplayNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#disable_stop_terminate_host_monitor DeviceGroup#disable_stop_terminate_host_monitor}
  */
  readonly disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#disable_terminated_host_alerting DeviceGroup#disable_terminated_host_alerting}
  */
  readonly disableTerminatedHostAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#monitoring_region_infos DeviceGroup#monitoring_region_infos}
  */
  readonly monitoringRegionInfos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#monitoring_regions DeviceGroup#monitoring_regions}
  */
  readonly monitoringRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#name_filter DeviceGroup#name_filter}
  */
  readonly nameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#select_all DeviceGroup#select_all}
  */
  readonly selectAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#tags DeviceGroup#tags}
  */
  readonly tags?: DeviceGroupExtraServicesVPNTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#use_default DeviceGroup#use_default}
  */
  readonly useDefault: boolean | cdktf.IResolvable;
  /**
  * normal_collector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#normal_collector_config DeviceGroup#normal_collector_config}
  */
  readonly normalCollectorConfig?: DeviceGroupExtraServicesVPNNormalCollectorConfig[] | cdktf.IResolvable;
}

export function deviceGroupExtraServicesVPNToTerraform(struct?: DeviceGroupExtraServicesVPN | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_n_s_p_schedule: cdktf.stringToTerraform(struct!.customNSPSchedule),
    dead_operation: cdktf.stringToTerraform(struct!.deadOperation),
    device_display_name_template: cdktf.stringToTerraform(struct!.deviceDisplayNameTemplate),
    disable_stop_terminate_host_monitor: cdktf.booleanToTerraform(struct!.disableStopTerminateHostMonitor),
    disable_terminated_host_alerting: cdktf.booleanToTerraform(struct!.disableTerminatedHostAlerting),
    monitoring_region_infos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegionInfos),
    monitoring_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegions),
    name_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameFilter),
    select_all: cdktf.booleanToTerraform(struct!.selectAll),
    tags: cdktf.listMapper(deviceGroupExtraServicesVPNTagsToTerraform, false)(struct!.tags),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    normal_collector_config: cdktf.listMapper(deviceGroupExtraServicesVPNNormalCollectorConfigToTerraform, true)(struct!.normalCollectorConfig),
  }
}


export function deviceGroupExtraServicesVPNToHclTerraform(struct?: DeviceGroupExtraServicesVPN | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_n_s_p_schedule: {
      value: cdktf.stringToHclTerraform(struct!.customNSPSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_operation: {
      value: cdktf.stringToHclTerraform(struct!.deadOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_display_name_template: {
      value: cdktf.stringToHclTerraform(struct!.deviceDisplayNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stop_terminate_host_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.disableStopTerminateHostMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_terminated_host_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.disableTerminatedHostAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_region_infos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegionInfos),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    monitoring_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    select_all: {
      value: cdktf.booleanToHclTerraform(struct!.selectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVPNTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVPNTagsList",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_collector_config: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVPNNormalCollectorConfigToHclTerraform, true)(struct!.normalCollectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVPNNormalCollectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesVPNOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesVPN | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNSPSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNSPSchedule = this._customNSPSchedule;
    }
    if (this._deadOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadOperation = this._deadOperation;
    }
    if (this._deviceDisplayNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDisplayNameTemplate = this._deviceDisplayNameTemplate;
    }
    if (this._disableStopTerminateHostMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStopTerminateHostMonitor = this._disableStopTerminateHostMonitor;
    }
    if (this._disableTerminatedHostAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTerminatedHostAlerting = this._disableTerminatedHostAlerting;
    }
    if (this._monitoringRegionInfos !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegionInfos = this._monitoringRegionInfos;
    }
    if (this._monitoringRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegions = this._monitoringRegions;
    }
    if (this._nameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFilter = this._nameFilter;
    }
    if (this._selectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAll = this._selectAll;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._normalCollectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalCollectorConfig = this._normalCollectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesVPN | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customNSPSchedule = undefined;
      this._deadOperation = undefined;
      this._deviceDisplayNameTemplate = undefined;
      this._disableStopTerminateHostMonitor = undefined;
      this._disableTerminatedHostAlerting = undefined;
      this._monitoringRegionInfos = undefined;
      this._monitoringRegions = undefined;
      this._nameFilter = undefined;
      this._selectAll = undefined;
      this._tags.internalValue = undefined;
      this._useDefault = undefined;
      this._normalCollectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customNSPSchedule = value.customNSPSchedule;
      this._deadOperation = value.deadOperation;
      this._deviceDisplayNameTemplate = value.deviceDisplayNameTemplate;
      this._disableStopTerminateHostMonitor = value.disableStopTerminateHostMonitor;
      this._disableTerminatedHostAlerting = value.disableTerminatedHostAlerting;
      this._monitoringRegionInfos = value.monitoringRegionInfos;
      this._monitoringRegions = value.monitoringRegions;
      this._nameFilter = value.nameFilter;
      this._selectAll = value.selectAll;
      this._tags.internalValue = value.tags;
      this._useDefault = value.useDefault;
      this._normalCollectorConfig.internalValue = value.normalCollectorConfig;
    }
  }

  // custom_n_s_p_schedule - computed: false, optional: true, required: false
  private _customNSPSchedule?: string; 
  public get customNSPSchedule() {
    return this.getStringAttribute('custom_n_s_p_schedule');
  }
  public set customNSPSchedule(value: string) {
    this._customNSPSchedule = value;
  }
  public resetCustomNSPSchedule() {
    this._customNSPSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNSPScheduleInput() {
    return this._customNSPSchedule;
  }

  // dead_operation - computed: false, optional: true, required: false
  private _deadOperation?: string; 
  public get deadOperation() {
    return this.getStringAttribute('dead_operation');
  }
  public set deadOperation(value: string) {
    this._deadOperation = value;
  }
  public resetDeadOperation() {
    this._deadOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadOperationInput() {
    return this._deadOperation;
  }

  // device_display_name_template - computed: false, optional: true, required: false
  private _deviceDisplayNameTemplate?: string; 
  public get deviceDisplayNameTemplate() {
    return this.getStringAttribute('device_display_name_template');
  }
  public set deviceDisplayNameTemplate(value: string) {
    this._deviceDisplayNameTemplate = value;
  }
  public resetDeviceDisplayNameTemplate() {
    this._deviceDisplayNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameTemplateInput() {
    return this._deviceDisplayNameTemplate;
  }

  // disable_stop_terminate_host_monitor - computed: false, optional: true, required: false
  private _disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable; 
  public get disableStopTerminateHostMonitor() {
    return this.getBooleanAttribute('disable_stop_terminate_host_monitor');
  }
  public set disableStopTerminateHostMonitor(value: boolean | cdktf.IResolvable) {
    this._disableStopTerminateHostMonitor = value;
  }
  public resetDisableStopTerminateHostMonitor() {
    this._disableStopTerminateHostMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStopTerminateHostMonitorInput() {
    return this._disableStopTerminateHostMonitor;
  }

  // disable_terminated_host_alerting - computed: false, optional: true, required: false
  private _disableTerminatedHostAlerting?: boolean | cdktf.IResolvable; 
  public get disableTerminatedHostAlerting() {
    return this.getBooleanAttribute('disable_terminated_host_alerting');
  }
  public set disableTerminatedHostAlerting(value: boolean | cdktf.IResolvable) {
    this._disableTerminatedHostAlerting = value;
  }
  public resetDisableTerminatedHostAlerting() {
    this._disableTerminatedHostAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerminatedHostAlertingInput() {
    return this._disableTerminatedHostAlerting;
  }

  // monitoring_region_infos - computed: false, optional: true, required: false
  private _monitoringRegionInfos?: string[]; 
  public get monitoringRegionInfos() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_region_infos'));
  }
  public set monitoringRegionInfos(value: string[]) {
    this._monitoringRegionInfos = value;
  }
  public resetMonitoringRegionInfos() {
    this._monitoringRegionInfos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionInfosInput() {
    return this._monitoringRegionInfos;
  }

  // monitoring_regions - computed: false, optional: true, required: false
  private _monitoringRegions?: string[]; 
  public get monitoringRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_regions'));
  }
  public set monitoringRegions(value: string[]) {
    this._monitoringRegions = value;
  }
  public resetMonitoringRegions() {
    this._monitoringRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionsInput() {
    return this._monitoringRegions;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string[]; 
  public get nameFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('name_filter'));
  }
  public set nameFilter(value: string[]) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // select_all - computed: false, optional: true, required: false
  private _selectAll?: boolean | cdktf.IResolvable; 
  public get selectAll() {
    return this.getBooleanAttribute('select_all');
  }
  public set selectAll(value: boolean | cdktf.IResolvable) {
    this._selectAll = value;
  }
  public resetSelectAll() {
    this._selectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllInput() {
    return this._selectAll;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DeviceGroupExtraServicesVPNTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DeviceGroupExtraServicesVPNTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // use_default - computed: false, optional: false, required: true
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // normal_collector_config - computed: false, optional: true, required: false
  private _normalCollectorConfig = new DeviceGroupExtraServicesVPNNormalCollectorConfigList(this, "normal_collector_config", false);
  public get normalCollectorConfig() {
    return this._normalCollectorConfig;
  }
  public putNormalCollectorConfig(value: DeviceGroupExtraServicesVPNNormalCollectorConfig[] | cdktf.IResolvable) {
    this._normalCollectorConfig.internalValue = value;
  }
  public resetNormalCollectorConfig() {
    this._normalCollectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalCollectorConfigInput() {
    return this._normalCollectorConfig.internalValue;
  }
}

export class DeviceGroupExtraServicesVPNList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesVPN[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesVPNOutputReference {
    return new DeviceGroupExtraServicesVPNOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesWORKSPACETags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#name DeviceGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#operation DeviceGroup#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#value DeviceGroup#value}
  */
  readonly value?: string;
}

export function deviceGroupExtraServicesWORKSPACETagsToTerraform(struct?: DeviceGroupExtraServicesWORKSPACETags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deviceGroupExtraServicesWORKSPACETagsToHclTerraform(struct?: DeviceGroupExtraServicesWORKSPACETags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesWORKSPACETagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesWORKSPACETags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesWORKSPACETags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeviceGroupExtraServicesWORKSPACETagsList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesWORKSPACETags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesWORKSPACETagsOutputReference {
    return new DeviceGroupExtraServicesWORKSPACETagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#applies_to DeviceGroup#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#auto_balanced_collector_group_id DeviceGroup#auto_balanced_collector_group_id}
  */
  readonly autoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#collector_id DeviceGroup#collector_id}
  */
  readonly collectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#priority DeviceGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#use_public_ip DeviceGroup#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function deviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsToTerraform(struct?: DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    auto_balanced_collector_group_id: cdktf.numberToTerraform(struct!.autoBalancedCollectorGroupId),
    collector_id: cdktf.numberToTerraform(struct!.collectorId),
    priority: cdktf.numberToTerraform(struct!.priority),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}


export function deviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsToHclTerraform(struct?: DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_balanced_collector_group_id: {
      value: cdktf.numberToHclTerraform(struct!.autoBalancedCollectorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_id: {
      value: cdktf.numberToHclTerraform(struct!.collectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
    }
    if (this._autoBalancedCollectorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBalancedCollectorGroupId = this._autoBalancedCollectorGroupId;
    }
    if (this._collectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorId = this._collectorId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._usePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIp = this._usePublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesTo = undefined;
      this._autoBalancedCollectorGroupId = undefined;
      this._collectorId = undefined;
      this._priority = undefined;
      this._usePublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliesTo = value.appliesTo;
      this._autoBalancedCollectorGroupId = value.autoBalancedCollectorGroupId;
      this._collectorId = value.collectorId;
      this._priority = value.priority;
      this._usePublicIp = value.usePublicIp;
    }
  }

  // applies_to - computed: false, optional: true, required: false
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  public resetAppliesTo() {
    this._appliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // auto_balanced_collector_group_id - computed: false, optional: true, required: false
  private _autoBalancedCollectorGroupId?: number; 
  public get autoBalancedCollectorGroupId() {
    return this.getNumberAttribute('auto_balanced_collector_group_id');
  }
  public set autoBalancedCollectorGroupId(value: number) {
    this._autoBalancedCollectorGroupId = value;
  }
  public resetAutoBalancedCollectorGroupId() {
    this._autoBalancedCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalancedCollectorGroupIdInput() {
    return this._autoBalancedCollectorGroupId;
  }

  // collector_id - computed: false, optional: true, required: false
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  public resetCollectorId() {
    this._collectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // use_public_ip - computed: false, optional: true, required: false
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }
}

export class DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsOutputReference {
    return new DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesWORKSPACENormalCollectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#collectors DeviceGroup#collectors}
  */
  readonly collectors?: DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#enabled DeviceGroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function deviceGroupExtraServicesWORKSPACENormalCollectorConfigToTerraform(struct?: DeviceGroupExtraServicesWORKSPACENormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collectors: cdktf.listMapper(deviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsToTerraform, false)(struct!.collectors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function deviceGroupExtraServicesWORKSPACENormalCollectorConfigToHclTerraform(struct?: DeviceGroupExtraServicesWORKSPACENormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collectors: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesWORKSPACENormalCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesWORKSPACENormalCollectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesWORKSPACENormalCollectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectors.internalValue = value.collectors;
      this._enabled = value.enabled;
    }
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: DeviceGroupExtraServicesWORKSPACENormalCollectorConfigCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DeviceGroupExtraServicesWORKSPACENormalCollectorConfigList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesWORKSPACENormalCollectorConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesWORKSPACENormalCollectorConfigOutputReference {
    return new DeviceGroupExtraServicesWORKSPACENormalCollectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesWORKSPACE {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#custom_n_s_p_schedule DeviceGroup#custom_n_s_p_schedule}
  */
  readonly customNSPSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#dead_operation DeviceGroup#dead_operation}
  */
  readonly deadOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#device_display_name_template DeviceGroup#device_display_name_template}
  */
  readonly deviceDisplayNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#disable_stop_terminate_host_monitor DeviceGroup#disable_stop_terminate_host_monitor}
  */
  readonly disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#disable_terminated_host_alerting DeviceGroup#disable_terminated_host_alerting}
  */
  readonly disableTerminatedHostAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#monitoring_region_infos DeviceGroup#monitoring_region_infos}
  */
  readonly monitoringRegionInfos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#monitoring_regions DeviceGroup#monitoring_regions}
  */
  readonly monitoringRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#name_filter DeviceGroup#name_filter}
  */
  readonly nameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#select_all DeviceGroup#select_all}
  */
  readonly selectAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#tags DeviceGroup#tags}
  */
  readonly tags?: DeviceGroupExtraServicesWORKSPACETags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#use_default DeviceGroup#use_default}
  */
  readonly useDefault: boolean | cdktf.IResolvable;
  /**
  * normal_collector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#normal_collector_config DeviceGroup#normal_collector_config}
  */
  readonly normalCollectorConfig?: DeviceGroupExtraServicesWORKSPACENormalCollectorConfig[] | cdktf.IResolvable;
}

export function deviceGroupExtraServicesWORKSPACEToTerraform(struct?: DeviceGroupExtraServicesWORKSPACE | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_n_s_p_schedule: cdktf.stringToTerraform(struct!.customNSPSchedule),
    dead_operation: cdktf.stringToTerraform(struct!.deadOperation),
    device_display_name_template: cdktf.stringToTerraform(struct!.deviceDisplayNameTemplate),
    disable_stop_terminate_host_monitor: cdktf.booleanToTerraform(struct!.disableStopTerminateHostMonitor),
    disable_terminated_host_alerting: cdktf.booleanToTerraform(struct!.disableTerminatedHostAlerting),
    monitoring_region_infos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegionInfos),
    monitoring_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegions),
    name_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameFilter),
    select_all: cdktf.booleanToTerraform(struct!.selectAll),
    tags: cdktf.listMapper(deviceGroupExtraServicesWORKSPACETagsToTerraform, false)(struct!.tags),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    normal_collector_config: cdktf.listMapper(deviceGroupExtraServicesWORKSPACENormalCollectorConfigToTerraform, true)(struct!.normalCollectorConfig),
  }
}


export function deviceGroupExtraServicesWORKSPACEToHclTerraform(struct?: DeviceGroupExtraServicesWORKSPACE | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_n_s_p_schedule: {
      value: cdktf.stringToHclTerraform(struct!.customNSPSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_operation: {
      value: cdktf.stringToHclTerraform(struct!.deadOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_display_name_template: {
      value: cdktf.stringToHclTerraform(struct!.deviceDisplayNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stop_terminate_host_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.disableStopTerminateHostMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_terminated_host_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.disableTerminatedHostAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_region_infos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegionInfos),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    monitoring_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    select_all: {
      value: cdktf.booleanToHclTerraform(struct!.selectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesWORKSPACETagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesWORKSPACETagsList",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_collector_config: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesWORKSPACENormalCollectorConfigToHclTerraform, true)(struct!.normalCollectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesWORKSPACENormalCollectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesWORKSPACEOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesWORKSPACE | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNSPSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNSPSchedule = this._customNSPSchedule;
    }
    if (this._deadOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadOperation = this._deadOperation;
    }
    if (this._deviceDisplayNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDisplayNameTemplate = this._deviceDisplayNameTemplate;
    }
    if (this._disableStopTerminateHostMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStopTerminateHostMonitor = this._disableStopTerminateHostMonitor;
    }
    if (this._disableTerminatedHostAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTerminatedHostAlerting = this._disableTerminatedHostAlerting;
    }
    if (this._monitoringRegionInfos !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegionInfos = this._monitoringRegionInfos;
    }
    if (this._monitoringRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegions = this._monitoringRegions;
    }
    if (this._nameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFilter = this._nameFilter;
    }
    if (this._selectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAll = this._selectAll;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._normalCollectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalCollectorConfig = this._normalCollectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesWORKSPACE | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customNSPSchedule = undefined;
      this._deadOperation = undefined;
      this._deviceDisplayNameTemplate = undefined;
      this._disableStopTerminateHostMonitor = undefined;
      this._disableTerminatedHostAlerting = undefined;
      this._monitoringRegionInfos = undefined;
      this._monitoringRegions = undefined;
      this._nameFilter = undefined;
      this._selectAll = undefined;
      this._tags.internalValue = undefined;
      this._useDefault = undefined;
      this._normalCollectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customNSPSchedule = value.customNSPSchedule;
      this._deadOperation = value.deadOperation;
      this._deviceDisplayNameTemplate = value.deviceDisplayNameTemplate;
      this._disableStopTerminateHostMonitor = value.disableStopTerminateHostMonitor;
      this._disableTerminatedHostAlerting = value.disableTerminatedHostAlerting;
      this._monitoringRegionInfos = value.monitoringRegionInfos;
      this._monitoringRegions = value.monitoringRegions;
      this._nameFilter = value.nameFilter;
      this._selectAll = value.selectAll;
      this._tags.internalValue = value.tags;
      this._useDefault = value.useDefault;
      this._normalCollectorConfig.internalValue = value.normalCollectorConfig;
    }
  }

  // custom_n_s_p_schedule - computed: false, optional: true, required: false
  private _customNSPSchedule?: string; 
  public get customNSPSchedule() {
    return this.getStringAttribute('custom_n_s_p_schedule');
  }
  public set customNSPSchedule(value: string) {
    this._customNSPSchedule = value;
  }
  public resetCustomNSPSchedule() {
    this._customNSPSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNSPScheduleInput() {
    return this._customNSPSchedule;
  }

  // dead_operation - computed: false, optional: true, required: false
  private _deadOperation?: string; 
  public get deadOperation() {
    return this.getStringAttribute('dead_operation');
  }
  public set deadOperation(value: string) {
    this._deadOperation = value;
  }
  public resetDeadOperation() {
    this._deadOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadOperationInput() {
    return this._deadOperation;
  }

  // device_display_name_template - computed: false, optional: true, required: false
  private _deviceDisplayNameTemplate?: string; 
  public get deviceDisplayNameTemplate() {
    return this.getStringAttribute('device_display_name_template');
  }
  public set deviceDisplayNameTemplate(value: string) {
    this._deviceDisplayNameTemplate = value;
  }
  public resetDeviceDisplayNameTemplate() {
    this._deviceDisplayNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameTemplateInput() {
    return this._deviceDisplayNameTemplate;
  }

  // disable_stop_terminate_host_monitor - computed: false, optional: true, required: false
  private _disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable; 
  public get disableStopTerminateHostMonitor() {
    return this.getBooleanAttribute('disable_stop_terminate_host_monitor');
  }
  public set disableStopTerminateHostMonitor(value: boolean | cdktf.IResolvable) {
    this._disableStopTerminateHostMonitor = value;
  }
  public resetDisableStopTerminateHostMonitor() {
    this._disableStopTerminateHostMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStopTerminateHostMonitorInput() {
    return this._disableStopTerminateHostMonitor;
  }

  // disable_terminated_host_alerting - computed: false, optional: true, required: false
  private _disableTerminatedHostAlerting?: boolean | cdktf.IResolvable; 
  public get disableTerminatedHostAlerting() {
    return this.getBooleanAttribute('disable_terminated_host_alerting');
  }
  public set disableTerminatedHostAlerting(value: boolean | cdktf.IResolvable) {
    this._disableTerminatedHostAlerting = value;
  }
  public resetDisableTerminatedHostAlerting() {
    this._disableTerminatedHostAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerminatedHostAlertingInput() {
    return this._disableTerminatedHostAlerting;
  }

  // monitoring_region_infos - computed: false, optional: true, required: false
  private _monitoringRegionInfos?: string[]; 
  public get monitoringRegionInfos() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_region_infos'));
  }
  public set monitoringRegionInfos(value: string[]) {
    this._monitoringRegionInfos = value;
  }
  public resetMonitoringRegionInfos() {
    this._monitoringRegionInfos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionInfosInput() {
    return this._monitoringRegionInfos;
  }

  // monitoring_regions - computed: false, optional: true, required: false
  private _monitoringRegions?: string[]; 
  public get monitoringRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_regions'));
  }
  public set monitoringRegions(value: string[]) {
    this._monitoringRegions = value;
  }
  public resetMonitoringRegions() {
    this._monitoringRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionsInput() {
    return this._monitoringRegions;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string[]; 
  public get nameFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('name_filter'));
  }
  public set nameFilter(value: string[]) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // select_all - computed: false, optional: true, required: false
  private _selectAll?: boolean | cdktf.IResolvable; 
  public get selectAll() {
    return this.getBooleanAttribute('select_all');
  }
  public set selectAll(value: boolean | cdktf.IResolvable) {
    this._selectAll = value;
  }
  public resetSelectAll() {
    this._selectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllInput() {
    return this._selectAll;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DeviceGroupExtraServicesWORKSPACETagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DeviceGroupExtraServicesWORKSPACETags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // use_default - computed: false, optional: false, required: true
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // normal_collector_config - computed: false, optional: true, required: false
  private _normalCollectorConfig = new DeviceGroupExtraServicesWORKSPACENormalCollectorConfigList(this, "normal_collector_config", false);
  public get normalCollectorConfig() {
    return this._normalCollectorConfig;
  }
  public putNormalCollectorConfig(value: DeviceGroupExtraServicesWORKSPACENormalCollectorConfig[] | cdktf.IResolvable) {
    this._normalCollectorConfig.internalValue = value;
  }
  public resetNormalCollectorConfig() {
    this._normalCollectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalCollectorConfigInput() {
    return this._normalCollectorConfig.internalValue;
  }
}

export class DeviceGroupExtraServicesWORKSPACEList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesWORKSPACE[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesWORKSPACEOutputReference {
    return new DeviceGroupExtraServicesWORKSPACEOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesWORKSPACEDIRECTORYTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#name DeviceGroup#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#operation DeviceGroup#operation}
  */
  readonly operation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#value DeviceGroup#value}
  */
  readonly value?: string;
}

export function deviceGroupExtraServicesWORKSPACEDIRECTORYTagsToTerraform(struct?: DeviceGroupExtraServicesWORKSPACEDIRECTORYTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    operation: cdktf.stringToTerraform(struct!.operation),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function deviceGroupExtraServicesWORKSPACEDIRECTORYTagsToHclTerraform(struct?: DeviceGroupExtraServicesWORKSPACEDIRECTORYTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesWORKSPACEDIRECTORYTagsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesWORKSPACEDIRECTORYTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesWORKSPACEDIRECTORYTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._operation = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._operation = value.operation;
      this._value = value.value;
    }
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }

  // value - computed: false, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DeviceGroupExtraServicesWORKSPACEDIRECTORYTagsList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesWORKSPACEDIRECTORYTags[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesWORKSPACEDIRECTORYTagsOutputReference {
    return new DeviceGroupExtraServicesWORKSPACEDIRECTORYTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#applies_to DeviceGroup#applies_to}
  */
  readonly appliesTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#auto_balanced_collector_group_id DeviceGroup#auto_balanced_collector_group_id}
  */
  readonly autoBalancedCollectorGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#collector_id DeviceGroup#collector_id}
  */
  readonly collectorId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#priority DeviceGroup#priority}
  */
  readonly priority?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#use_public_ip DeviceGroup#use_public_ip}
  */
  readonly usePublicIp?: boolean | cdktf.IResolvable;
}

export function deviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsToTerraform(struct?: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    applies_to: cdktf.stringToTerraform(struct!.appliesTo),
    auto_balanced_collector_group_id: cdktf.numberToTerraform(struct!.autoBalancedCollectorGroupId),
    collector_id: cdktf.numberToTerraform(struct!.collectorId),
    priority: cdktf.numberToTerraform(struct!.priority),
    use_public_ip: cdktf.booleanToTerraform(struct!.usePublicIp),
  }
}


export function deviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsToHclTerraform(struct?: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    applies_to: {
      value: cdktf.stringToHclTerraform(struct!.appliesTo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_balanced_collector_group_id: {
      value: cdktf.numberToHclTerraform(struct!.autoBalancedCollectorGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    collector_id: {
      value: cdktf.numberToHclTerraform(struct!.collectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    priority: {
      value: cdktf.numberToHclTerraform(struct!.priority),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_public_ip: {
      value: cdktf.booleanToHclTerraform(struct!.usePublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appliesTo !== undefined) {
      hasAnyValues = true;
      internalValueResult.appliesTo = this._appliesTo;
    }
    if (this._autoBalancedCollectorGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoBalancedCollectorGroupId = this._autoBalancedCollectorGroupId;
    }
    if (this._collectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectorId = this._collectorId;
    }
    if (this._priority !== undefined) {
      hasAnyValues = true;
      internalValueResult.priority = this._priority;
    }
    if (this._usePublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.usePublicIp = this._usePublicIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appliesTo = undefined;
      this._autoBalancedCollectorGroupId = undefined;
      this._collectorId = undefined;
      this._priority = undefined;
      this._usePublicIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appliesTo = value.appliesTo;
      this._autoBalancedCollectorGroupId = value.autoBalancedCollectorGroupId;
      this._collectorId = value.collectorId;
      this._priority = value.priority;
      this._usePublicIp = value.usePublicIp;
    }
  }

  // applies_to - computed: false, optional: true, required: false
  private _appliesTo?: string; 
  public get appliesTo() {
    return this.getStringAttribute('applies_to');
  }
  public set appliesTo(value: string) {
    this._appliesTo = value;
  }
  public resetAppliesTo() {
    this._appliesTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appliesToInput() {
    return this._appliesTo;
  }

  // auto_balanced_collector_group_id - computed: false, optional: true, required: false
  private _autoBalancedCollectorGroupId?: number; 
  public get autoBalancedCollectorGroupId() {
    return this.getNumberAttribute('auto_balanced_collector_group_id');
  }
  public set autoBalancedCollectorGroupId(value: number) {
    this._autoBalancedCollectorGroupId = value;
  }
  public resetAutoBalancedCollectorGroupId() {
    this._autoBalancedCollectorGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoBalancedCollectorGroupIdInput() {
    return this._autoBalancedCollectorGroupId;
  }

  // collector_id - computed: false, optional: true, required: false
  private _collectorId?: number; 
  public get collectorId() {
    return this.getNumberAttribute('collector_id');
  }
  public set collectorId(value: number) {
    this._collectorId = value;
  }
  public resetCollectorId() {
    this._collectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorIdInput() {
    return this._collectorId;
  }

  // priority - computed: false, optional: true, required: false
  private _priority?: number; 
  public get priority() {
    return this.getNumberAttribute('priority');
  }
  public set priority(value: number) {
    this._priority = value;
  }
  public resetPriority() {
    this._priority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get priorityInput() {
    return this._priority;
  }

  // use_public_ip - computed: false, optional: true, required: false
  private _usePublicIp?: boolean | cdktf.IResolvable; 
  public get usePublicIp() {
    return this.getBooleanAttribute('use_public_ip');
  }
  public set usePublicIp(value: boolean | cdktf.IResolvable) {
    this._usePublicIp = value;
  }
  public resetUsePublicIp() {
    this._usePublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePublicIpInput() {
    return this._usePublicIp;
  }
}

export class DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsOutputReference {
    return new DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#collectors DeviceGroup#collectors}
  */
  readonly collectors?: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#enabled DeviceGroup#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
}

export function deviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigToTerraform(struct?: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    collectors: cdktf.listMapper(deviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsToTerraform, false)(struct!.collectors),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function deviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigToHclTerraform(struct?: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    collectors: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsToHclTerraform, false)(struct!.collectors),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsList",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._collectors?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.collectors = this._collectors?.internalValue;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._collectors.internalValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._collectors.internalValue = value.collectors;
      this._enabled = value.enabled;
    }
  }

  // collectors - computed: false, optional: true, required: false
  private _collectors = new DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectorsList(this, "collectors", false);
  public get collectors() {
    return this._collectors;
  }
  public putCollectors(value: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigCollectors[] | cdktf.IResolvable) {
    this._collectors.internalValue = value;
  }
  public resetCollectors() {
    this._collectors.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get collectorsInput() {
    return this._collectors.internalValue;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigOutputReference {
    return new DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServicesWORKSPACEDIRECTORY {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#custom_n_s_p_schedule DeviceGroup#custom_n_s_p_schedule}
  */
  readonly customNSPSchedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#dead_operation DeviceGroup#dead_operation}
  */
  readonly deadOperation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#device_display_name_template DeviceGroup#device_display_name_template}
  */
  readonly deviceDisplayNameTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#disable_stop_terminate_host_monitor DeviceGroup#disable_stop_terminate_host_monitor}
  */
  readonly disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#disable_terminated_host_alerting DeviceGroup#disable_terminated_host_alerting}
  */
  readonly disableTerminatedHostAlerting?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#monitoring_region_infos DeviceGroup#monitoring_region_infos}
  */
  readonly monitoringRegionInfos?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#monitoring_regions DeviceGroup#monitoring_regions}
  */
  readonly monitoringRegions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#name_filter DeviceGroup#name_filter}
  */
  readonly nameFilter?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#select_all DeviceGroup#select_all}
  */
  readonly selectAll?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#tags DeviceGroup#tags}
  */
  readonly tags?: DeviceGroupExtraServicesWORKSPACEDIRECTORYTags[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#use_default DeviceGroup#use_default}
  */
  readonly useDefault: boolean | cdktf.IResolvable;
  /**
  * normal_collector_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#normal_collector_config DeviceGroup#normal_collector_config}
  */
  readonly normalCollectorConfig?: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig[] | cdktf.IResolvable;
}

export function deviceGroupExtraServicesWORKSPACEDIRECTORYToTerraform(struct?: DeviceGroupExtraServicesWORKSPACEDIRECTORY | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    custom_n_s_p_schedule: cdktf.stringToTerraform(struct!.customNSPSchedule),
    dead_operation: cdktf.stringToTerraform(struct!.deadOperation),
    device_display_name_template: cdktf.stringToTerraform(struct!.deviceDisplayNameTemplate),
    disable_stop_terminate_host_monitor: cdktf.booleanToTerraform(struct!.disableStopTerminateHostMonitor),
    disable_terminated_host_alerting: cdktf.booleanToTerraform(struct!.disableTerminatedHostAlerting),
    monitoring_region_infos: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegionInfos),
    monitoring_regions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.monitoringRegions),
    name_filter: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameFilter),
    select_all: cdktf.booleanToTerraform(struct!.selectAll),
    tags: cdktf.listMapper(deviceGroupExtraServicesWORKSPACEDIRECTORYTagsToTerraform, false)(struct!.tags),
    use_default: cdktf.booleanToTerraform(struct!.useDefault),
    normal_collector_config: cdktf.listMapper(deviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigToTerraform, true)(struct!.normalCollectorConfig),
  }
}


export function deviceGroupExtraServicesWORKSPACEDIRECTORYToHclTerraform(struct?: DeviceGroupExtraServicesWORKSPACEDIRECTORY | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    custom_n_s_p_schedule: {
      value: cdktf.stringToHclTerraform(struct!.customNSPSchedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_operation: {
      value: cdktf.stringToHclTerraform(struct!.deadOperation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    device_display_name_template: {
      value: cdktf.stringToHclTerraform(struct!.deviceDisplayNameTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_stop_terminate_host_monitor: {
      value: cdktf.booleanToHclTerraform(struct!.disableStopTerminateHostMonitor),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_terminated_host_alerting: {
      value: cdktf.booleanToHclTerraform(struct!.disableTerminatedHostAlerting),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    monitoring_region_infos: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegionInfos),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    monitoring_regions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.monitoringRegions),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    name_filter: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameFilter),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    select_all: {
      value: cdktf.booleanToHclTerraform(struct!.selectAll),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tags: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesWORKSPACEDIRECTORYTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesWORKSPACEDIRECTORYTagsList",
    },
    use_default: {
      value: cdktf.booleanToHclTerraform(struct!.useDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    normal_collector_config: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigToHclTerraform, true)(struct!.normalCollectorConfig),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesWORKSPACEDIRECTORYOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServicesWORKSPACEDIRECTORY | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._customNSPSchedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.customNSPSchedule = this._customNSPSchedule;
    }
    if (this._deadOperation !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadOperation = this._deadOperation;
    }
    if (this._deviceDisplayNameTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceDisplayNameTemplate = this._deviceDisplayNameTemplate;
    }
    if (this._disableStopTerminateHostMonitor !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableStopTerminateHostMonitor = this._disableStopTerminateHostMonitor;
    }
    if (this._disableTerminatedHostAlerting !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableTerminatedHostAlerting = this._disableTerminatedHostAlerting;
    }
    if (this._monitoringRegionInfos !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegionInfos = this._monitoringRegionInfos;
    }
    if (this._monitoringRegions !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitoringRegions = this._monitoringRegions;
    }
    if (this._nameFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameFilter = this._nameFilter;
    }
    if (this._selectAll !== undefined) {
      hasAnyValues = true;
      internalValueResult.selectAll = this._selectAll;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    if (this._useDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.useDefault = this._useDefault;
    }
    if (this._normalCollectorConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.normalCollectorConfig = this._normalCollectorConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServicesWORKSPACEDIRECTORY | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._customNSPSchedule = undefined;
      this._deadOperation = undefined;
      this._deviceDisplayNameTemplate = undefined;
      this._disableStopTerminateHostMonitor = undefined;
      this._disableTerminatedHostAlerting = undefined;
      this._monitoringRegionInfos = undefined;
      this._monitoringRegions = undefined;
      this._nameFilter = undefined;
      this._selectAll = undefined;
      this._tags.internalValue = undefined;
      this._useDefault = undefined;
      this._normalCollectorConfig.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._customNSPSchedule = value.customNSPSchedule;
      this._deadOperation = value.deadOperation;
      this._deviceDisplayNameTemplate = value.deviceDisplayNameTemplate;
      this._disableStopTerminateHostMonitor = value.disableStopTerminateHostMonitor;
      this._disableTerminatedHostAlerting = value.disableTerminatedHostAlerting;
      this._monitoringRegionInfos = value.monitoringRegionInfos;
      this._monitoringRegions = value.monitoringRegions;
      this._nameFilter = value.nameFilter;
      this._selectAll = value.selectAll;
      this._tags.internalValue = value.tags;
      this._useDefault = value.useDefault;
      this._normalCollectorConfig.internalValue = value.normalCollectorConfig;
    }
  }

  // custom_n_s_p_schedule - computed: false, optional: true, required: false
  private _customNSPSchedule?: string; 
  public get customNSPSchedule() {
    return this.getStringAttribute('custom_n_s_p_schedule');
  }
  public set customNSPSchedule(value: string) {
    this._customNSPSchedule = value;
  }
  public resetCustomNSPSchedule() {
    this._customNSPSchedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customNSPScheduleInput() {
    return this._customNSPSchedule;
  }

  // dead_operation - computed: false, optional: true, required: false
  private _deadOperation?: string; 
  public get deadOperation() {
    return this.getStringAttribute('dead_operation');
  }
  public set deadOperation(value: string) {
    this._deadOperation = value;
  }
  public resetDeadOperation() {
    this._deadOperation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadOperationInput() {
    return this._deadOperation;
  }

  // device_display_name_template - computed: false, optional: true, required: false
  private _deviceDisplayNameTemplate?: string; 
  public get deviceDisplayNameTemplate() {
    return this.getStringAttribute('device_display_name_template');
  }
  public set deviceDisplayNameTemplate(value: string) {
    this._deviceDisplayNameTemplate = value;
  }
  public resetDeviceDisplayNameTemplate() {
    this._deviceDisplayNameTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceDisplayNameTemplateInput() {
    return this._deviceDisplayNameTemplate;
  }

  // disable_stop_terminate_host_monitor - computed: false, optional: true, required: false
  private _disableStopTerminateHostMonitor?: boolean | cdktf.IResolvable; 
  public get disableStopTerminateHostMonitor() {
    return this.getBooleanAttribute('disable_stop_terminate_host_monitor');
  }
  public set disableStopTerminateHostMonitor(value: boolean | cdktf.IResolvable) {
    this._disableStopTerminateHostMonitor = value;
  }
  public resetDisableStopTerminateHostMonitor() {
    this._disableStopTerminateHostMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableStopTerminateHostMonitorInput() {
    return this._disableStopTerminateHostMonitor;
  }

  // disable_terminated_host_alerting - computed: false, optional: true, required: false
  private _disableTerminatedHostAlerting?: boolean | cdktf.IResolvable; 
  public get disableTerminatedHostAlerting() {
    return this.getBooleanAttribute('disable_terminated_host_alerting');
  }
  public set disableTerminatedHostAlerting(value: boolean | cdktf.IResolvable) {
    this._disableTerminatedHostAlerting = value;
  }
  public resetDisableTerminatedHostAlerting() {
    this._disableTerminatedHostAlerting = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableTerminatedHostAlertingInput() {
    return this._disableTerminatedHostAlerting;
  }

  // monitoring_region_infos - computed: false, optional: true, required: false
  private _monitoringRegionInfos?: string[]; 
  public get monitoringRegionInfos() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_region_infos'));
  }
  public set monitoringRegionInfos(value: string[]) {
    this._monitoringRegionInfos = value;
  }
  public resetMonitoringRegionInfos() {
    this._monitoringRegionInfos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionInfosInput() {
    return this._monitoringRegionInfos;
  }

  // monitoring_regions - computed: false, optional: true, required: false
  private _monitoringRegions?: string[]; 
  public get monitoringRegions() {
    return cdktf.Fn.tolist(this.getListAttribute('monitoring_regions'));
  }
  public set monitoringRegions(value: string[]) {
    this._monitoringRegions = value;
  }
  public resetMonitoringRegions() {
    this._monitoringRegions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitoringRegionsInput() {
    return this._monitoringRegions;
  }

  // name_filter - computed: false, optional: true, required: false
  private _nameFilter?: string[]; 
  public get nameFilter() {
    return cdktf.Fn.tolist(this.getListAttribute('name_filter'));
  }
  public set nameFilter(value: string[]) {
    this._nameFilter = value;
  }
  public resetNameFilter() {
    this._nameFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameFilterInput() {
    return this._nameFilter;
  }

  // select_all - computed: false, optional: true, required: false
  private _selectAll?: boolean | cdktf.IResolvable; 
  public get selectAll() {
    return this.getBooleanAttribute('select_all');
  }
  public set selectAll(value: boolean | cdktf.IResolvable) {
    this._selectAll = value;
  }
  public resetSelectAll() {
    this._selectAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAllInput() {
    return this._selectAll;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DeviceGroupExtraServicesWORKSPACEDIRECTORYTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DeviceGroupExtraServicesWORKSPACEDIRECTORYTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }

  // use_default - computed: false, optional: false, required: true
  private _useDefault?: boolean | cdktf.IResolvable; 
  public get useDefault() {
    return this.getBooleanAttribute('use_default');
  }
  public set useDefault(value: boolean | cdktf.IResolvable) {
    this._useDefault = value;
  }
  // Temporarily expose input value. Use with caution.
  public get useDefaultInput() {
    return this._useDefault;
  }

  // normal_collector_config - computed: false, optional: true, required: false
  private _normalCollectorConfig = new DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfigList(this, "normal_collector_config", false);
  public get normalCollectorConfig() {
    return this._normalCollectorConfig;
  }
  public putNormalCollectorConfig(value: DeviceGroupExtraServicesWORKSPACEDIRECTORYNormalCollectorConfig[] | cdktf.IResolvable) {
    this._normalCollectorConfig.internalValue = value;
  }
  public resetNormalCollectorConfig() {
    this._normalCollectorConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get normalCollectorConfigInput() {
    return this._normalCollectorConfig.internalValue;
  }
}

export class DeviceGroupExtraServicesWORKSPACEDIRECTORYList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServicesWORKSPACEDIRECTORY[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesWORKSPACEDIRECTORYOutputReference {
    return new DeviceGroupExtraServicesWORKSPACEDIRECTORYOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtraServices {
  /**
  * a_p_p_l_i_c_a_t_i_o_n_e_l_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#a_p_p_l_i_c_a_t_i_o_n_e_l_b DeviceGroup#a_p_p_l_i_c_a_t_i_o_n_e_l_b}
  */
  readonly aPPLICATIONELB?: DeviceGroupExtraServicesAPPLICATIONELB[] | cdktf.IResolvable;
  /**
  * a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y DeviceGroup#a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y}
  */
  readonly aPPLICATIONGATEWAY?: DeviceGroupExtraServicesAPPLICATIONGATEWAY[] | cdktf.IResolvable;
  /**
  * a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s DeviceGroup#a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s}
  */
  readonly aPPLICATIONINSIGHTS?: DeviceGroupExtraServicesAPPLICATIONINSIGHTS[] | cdktf.IResolvable;
  /**
  * a_p_p_s_e_r_v_i_c_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#a_p_p_s_e_r_v_i_c_e DeviceGroup#a_p_p_s_e_r_v_i_c_e}
  */
  readonly aPPSERVICE?: DeviceGroupExtraServicesAPPSERVICE[] | cdktf.IResolvable;
  /**
  * a_p_p_s_e_r_v_i_c_e_p_l_a_n block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#a_p_p_s_e_r_v_i_c_e_p_l_a_n DeviceGroup#a_p_p_s_e_r_v_i_c_e_p_l_a_n}
  */
  readonly aPPSERVICEPLAN?: DeviceGroupExtraServicesAPPSERVICEPLAN[] | cdktf.IResolvable;
  /**
  * a_p_p_s_t_r_e_a_m block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#a_p_p_s_t_r_e_a_m DeviceGroup#a_p_p_s_t_r_e_a_m}
  */
  readonly aPPSTREAM?: DeviceGroupExtraServicesAPPSTREAM[] | cdktf.IResolvable;
  /**
  * a_t_h_e_n_a block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#a_t_h_e_n_a DeviceGroup#a_t_h_e_n_a}
  */
  readonly aTHENA?: DeviceGroupExtraServicesATHENA[] | cdktf.IResolvable;
  /**
  * a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t DeviceGroup#a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t}
  */
  readonly aUTOMATIONACCOUNT?: DeviceGroupExtraServicesAUTOMATIONACCOUNT[] | cdktf.IResolvable;
  /**
  * a_u_t_o_s_c_a_l_i_n_g block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#a_u_t_o_s_c_a_l_i_n_g DeviceGroup#a_u_t_o_s_c_a_l_i_n_g}
  */
  readonly aUTOSCALING?: DeviceGroupExtraServicesAUTOSCALING[] | cdktf.IResolvable;
  /**
  * api_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#api_g_a_t_e_w_a_y DeviceGroup#api_g_a_t_e_w_a_y}
  */
  readonly apiGATEWAY?: DeviceGroupExtraServicesApiGATEWAY[] | cdktf.IResolvable;
  /**
  * api_m_a_n_a_g_e_m_e_n_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#api_m_a_n_a_g_e_m_e_n_t DeviceGroup#api_m_a_n_a_g_e_m_e_n_t}
  */
  readonly apiMANAGEMENT?: DeviceGroupExtraServicesApiMANAGEMENT[] | cdktf.IResolvable;
  /**
  * b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s DeviceGroup#b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s}
  */
  readonly bACKUPPROTECTEDITEMS?: DeviceGroupExtraServicesBACKUPPROTECTEDITEMS[] | cdktf.IResolvable;
  /**
  * b_l_o_b_s_t_o_r_a_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#b_l_o_b_s_t_o_r_a_g_e DeviceGroup#b_l_o_b_s_t_o_r_a_g_e}
  */
  readonly bLOBSTORAGE?: DeviceGroupExtraServicesBLOBSTORAGE[] | cdktf.IResolvable;
  /**
  * c_l_o_u_d_f_r_o_n_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#c_l_o_u_d_f_r_o_n_t DeviceGroup#c_l_o_u_d_f_r_o_n_t}
  */
  readonly cLOUDFRONT?: DeviceGroupExtraServicesCLOUDFRONT[] | cdktf.IResolvable;
  /**
  * c_l_o_u_d_s_e_a_r_c_h block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#c_l_o_u_d_s_e_a_r_c_h DeviceGroup#c_l_o_u_d_s_e_a_r_c_h}
  */
  readonly cLOUDSEARCH?: DeviceGroupExtraServicesCLOUDSEARCH[] | cdktf.IResolvable;
  /**
  * c_o_d_e_b_ui_l_d block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#c_o_d_e_b_ui_l_d DeviceGroup#c_o_d_e_b_ui_l_d}
  */
  readonly cODEBUiLD?: DeviceGroupExtraServicesCODEBUiLD[] | cdktf.IResolvable;
  /**
  * c_o_g_n_i_t_i_v_e_s_e_a_r_c_h block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#c_o_g_n_i_t_i_v_e_s_e_a_r_c_h DeviceGroup#c_o_g_n_i_t_i_v_e_s_e_a_r_c_h}
  */
  readonly cOGNITIVESEARCH?: DeviceGroupExtraServicesCOGNITIVESEARCH[] | cdktf.IResolvable;
  /**
  * c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s DeviceGroup#c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s}
  */
  readonly cOGNITIVESERVICES?: DeviceGroupExtraServicesCOGNITIVESERVICES[] | cdktf.IResolvable;
  /**
  * c_o_g_n_i_t_o block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#c_o_g_n_i_t_o DeviceGroup#c_o_g_n_i_t_o}
  */
  readonly cOGNITO?: DeviceGroupExtraServicesCOGNITO[] | cdktf.IResolvable;
  /**
  * c_o_s_m_o_s_d_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#c_o_s_m_o_s_d_b DeviceGroup#c_o_s_m_o_s_d_b}
  */
  readonly cOSMOSDB?: DeviceGroupExtraServicesCOSMOSDB[] | cdktf.IResolvable;
  /**
  * d_a_t_a_f_a_c_t_o_r_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#d_a_t_a_f_a_c_t_o_r_y DeviceGroup#d_a_t_a_f_a_c_t_o_r_y}
  */
  readonly dATAFACTORY?: DeviceGroupExtraServicesDATAFACTORY[] | cdktf.IResolvable;
  /**
  * d_i_r_e_c_t_c_o_n_n_e_c_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#d_i_r_e_c_t_c_o_n_n_e_c_t DeviceGroup#d_i_r_e_c_t_c_o_n_n_e_c_t}
  */
  readonly dIRECTCONNECT?: DeviceGroupExtraServicesDIRECTCONNECT[] | cdktf.IResolvable;
  /**
  * d_m_s_r_e_p_l_i_c_a_t_i_o_n block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#d_m_s_r_e_p_l_i_c_a_t_i_o_n DeviceGroup#d_m_s_r_e_p_l_i_c_a_t_i_o_n}
  */
  readonly dMSREPLICATION?: DeviceGroupExtraServicesDMSREPLICATION[] | cdktf.IResolvable;
  /**
  * d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s DeviceGroup#d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s}
  */
  readonly dMSREPLICATIONTASKS?: DeviceGroupExtraServicesDMSREPLICATIONTASKS[] | cdktf.IResolvable;
  /**
  * d_o_c_d_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#d_o_c_d_b DeviceGroup#d_o_c_d_b}
  */
  readonly dOCDB?: DeviceGroupExtraServicesDOCDB[] | cdktf.IResolvable;
  /**
  * d_y_n_a_m_o_d_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#d_y_n_a_m_o_d_b DeviceGroup#d_y_n_a_m_o_d_b}
  */
  readonly dYNAMODB?: DeviceGroupExtraServicesDYNAMODB[] | cdktf.IResolvable;
  /**
  * e_b_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_b_s DeviceGroup#e_b_s}
  */
  readonly eBS?: DeviceGroupExtraServicesEBS[] | cdktf.IResolvable;
  /**
  * e_c2 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_c2 DeviceGroup#e_c2}
  */
  readonly eC2?: DeviceGroupExtraServicesEC2[] | cdktf.IResolvable;
  /**
  * e_c_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_c_s DeviceGroup#e_c_s}
  */
  readonly eCS?: DeviceGroupExtraServicesECS[] | cdktf.IResolvable;
  /**
  * e_f_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_f_s DeviceGroup#e_f_s}
  */
  readonly eFS?: DeviceGroupExtraServicesEFS[] | cdktf.IResolvable;
  /**
  * e_l_a_s_t_i_c_a_c_h_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_l_a_s_t_i_c_a_c_h_e DeviceGroup#e_l_a_s_t_i_c_a_c_h_e}
  */
  readonly eLASTICACHE?: DeviceGroupExtraServicesELASTICACHE[] | cdktf.IResolvable;
  /**
  * e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k DeviceGroup#e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k}
  */
  readonly eLASTICBEANSTALK?: DeviceGroupExtraServicesELASTICBEANSTALK[] | cdktf.IResolvable;
  /**
  * e_l_a_s_t_i_c_s_e_a_r_c_h block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_l_a_s_t_i_c_s_e_a_r_c_h DeviceGroup#e_l_a_s_t_i_c_s_e_a_r_c_h}
  */
  readonly eLASTICSEARCH?: DeviceGroupExtraServicesELASTICSEARCH[] | cdktf.IResolvable;
  /**
  * e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r DeviceGroup#e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r}
  */
  readonly eLASTICTRANSCODER?: DeviceGroupExtraServicesELASTICTRANSCODER[] | cdktf.IResolvable;
  /**
  * e_l_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_l_b DeviceGroup#e_l_b}
  */
  readonly eLB?: DeviceGroupExtraServicesELB[] | cdktf.IResolvable;
  /**
  * e_m_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_m_r DeviceGroup#e_m_r}
  */
  readonly eMR?: DeviceGroupExtraServicesEMR[] | cdktf.IResolvable;
  /**
  * e_v_e_n_t_b_r_id_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_v_e_n_t_b_r_id_g_e DeviceGroup#e_v_e_n_t_b_r_id_g_e}
  */
  readonly eVENTBRIdGE?: DeviceGroupExtraServicesEVENTBRIdGE[] | cdktf.IResolvable;
  /**
  * e_v_e_n_t_h_u_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_v_e_n_t_h_u_b DeviceGroup#e_v_e_n_t_h_u_b}
  */
  readonly eVENTHUB?: DeviceGroupExtraServicesEVENTHUB[] | cdktf.IResolvable;
  /**
  * e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t DeviceGroup#e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t}
  */
  readonly eXPRESSROUTECIRCUiT?: DeviceGroupExtraServicesEXPRESSROUTECIRCUiT[] | cdktf.IResolvable;
  /**
  * f_i_l_e_s_t_o_r_a_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#f_i_l_e_s_t_o_r_a_g_e DeviceGroup#f_i_l_e_s_t_o_r_a_g_e}
  */
  readonly fILESTORAGE?: DeviceGroupExtraServicesFILESTORAGE[] | cdktf.IResolvable;
  /**
  * f_i_r_e_h_o_s_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#f_i_r_e_h_o_s_e DeviceGroup#f_i_r_e_h_o_s_e}
  */
  readonly fIREHOSE?: DeviceGroupExtraServicesFIREHOSE[] | cdktf.IResolvable;
  /**
  * f_i_r_e_w_a_l_l block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#f_i_r_e_w_a_l_l DeviceGroup#f_i_r_e_w_a_l_l}
  */
  readonly fIREWALL?: DeviceGroupExtraServicesFIREWALL[] | cdktf.IResolvable;
  /**
  * f_r_o_n_t_d_o_o_r_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#f_r_o_n_t_d_o_o_r_s DeviceGroup#f_r_o_n_t_d_o_o_r_s}
  */
  readonly fRONTDOORS?: DeviceGroupExtraServicesFRONTDOORS[] | cdktf.IResolvable;
  /**
  * f_s_x block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#f_s_x DeviceGroup#f_s_x}
  */
  readonly fSX?: DeviceGroupExtraServicesFSX[] | cdktf.IResolvable;
  /**
  * g_l_u_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#g_l_u_e DeviceGroup#g_l_u_e}
  */
  readonly gLUE?: DeviceGroupExtraServicesGLUE[] | cdktf.IResolvable;
  /**
  * k_e_y_v_a_u_l_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#k_e_y_v_a_u_l_t DeviceGroup#k_e_y_v_a_u_l_t}
  */
  readonly kEYVAULT?: DeviceGroupExtraServicesKEYVAULT[] | cdktf.IResolvable;
  /**
  * k_i_n_e_s_i_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#k_i_n_e_s_i_s DeviceGroup#k_i_n_e_s_i_s}
  */
  readonly kINESIS?: DeviceGroupExtraServicesKINESIS[] | cdktf.IResolvable;
  /**
  * k_i_n_e_s_i_s_v_id_e_o block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#k_i_n_e_s_i_s_v_id_e_o DeviceGroup#k_i_n_e_s_i_s_v_id_e_o}
  */
  readonly kINESISVIdEO?: DeviceGroupExtraServicesKINESISVIdEO[] | cdktf.IResolvable;
  /**
  * l_a_m_b_d_a block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#l_a_m_b_d_a DeviceGroup#l_a_m_b_d_a}
  */
  readonly lAMBDA?: DeviceGroupExtraServicesLAMBDA[] | cdktf.IResolvable;
  /**
  * l_o_a_d_b_a_l_a_n_c_e_r_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#l_o_a_d_b_a_l_a_n_c_e_r_s DeviceGroup#l_o_a_d_b_a_l_a_n_c_e_r_s}
  */
  readonly lOADBALANCERS?: DeviceGroupExtraServicesLOADBALANCERS[] | cdktf.IResolvable;
  /**
  * l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s DeviceGroup#l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s}
  */
  readonly lOGANALYTICSWORKSPACES?: DeviceGroupExtraServicesLOGANALYTICSWORKSPACES[] | cdktf.IResolvable;
  /**
  * l_o_g_i_c_a_p_p_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#l_o_g_i_c_a_p_p_s DeviceGroup#l_o_g_i_c_a_p_p_s}
  */
  readonly lOGICAPPS?: DeviceGroupExtraServicesLOGICAPPS[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_c_o_n_n_e_c_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_e_d_i_a_c_o_n_n_e_c_t DeviceGroup#m_e_d_i_a_c_o_n_n_e_c_t}
  */
  readonly mEDIACONNECT?: DeviceGroupExtraServicesMEDIACONNECT[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_c_o_n_v_e_r_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_e_d_i_a_c_o_n_v_e_r_t DeviceGroup#m_e_d_i_a_c_o_n_v_e_r_t}
  */
  readonly mEDIACONVERT?: DeviceGroupExtraServicesMEDIACONVERT[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e DeviceGroup#m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e}
  */
  readonly mEDIAPACKAGELIVE?: DeviceGroupExtraServicesMEDIAPACKAGELIVE[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_p_a_c_k_a_g_e_v_o_d block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_e_d_i_a_p_a_c_k_a_g_e_v_o_d DeviceGroup#m_e_d_i_a_p_a_c_k_a_g_e_v_o_d}
  */
  readonly mEDIAPACKAGEVOD?: DeviceGroupExtraServicesMEDIAPACKAGEVOD[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_s_t_o_r_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_e_d_i_a_s_t_o_r_e DeviceGroup#m_e_d_i_a_s_t_o_r_e}
  */
  readonly mEDIASTORE?: DeviceGroupExtraServicesMEDIASTORE[] | cdktf.IResolvable;
  /**
  * m_e_d_i_a_t_a_i_l_o_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_e_d_i_a_t_a_i_l_o_r DeviceGroup#m_e_d_i_a_t_a_i_l_o_r}
  */
  readonly mEDIATAILOR?: DeviceGroupExtraServicesMEDIATAILOR[] | cdktf.IResolvable;
  /**
  * m_q block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_q DeviceGroup#m_q}
  */
  readonly mQ?: DeviceGroupExtraServicesMQ[] | cdktf.IResolvable;
  /**
  * m_s_k_b_r_o_k_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_s_k_b_r_o_k_e_r DeviceGroup#m_s_k_b_r_o_k_e_r}
  */
  readonly mSKBROKER?: DeviceGroupExtraServicesMSKBROKER[] | cdktf.IResolvable;
  /**
  * m_s_k_c_l_u_s_t_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_s_k_c_l_u_s_t_e_r DeviceGroup#m_s_k_c_l_u_s_t_e_r}
  */
  readonly mSKCLUSTER?: DeviceGroupExtraServicesMSKCLUSTER[] | cdktf.IResolvable;
  /**
  * m_y_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#m_y_sql DeviceGroup#m_y_sql}
  */
  readonly mYSql?: DeviceGroupExtraServicesMYSql[] | cdktf.IResolvable;
  /**
  * n_a_t_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#n_a_t_g_a_t_e_w_a_y DeviceGroup#n_a_t_g_a_t_e_w_a_y}
  */
  readonly nATGATEWAY?: DeviceGroupExtraServicesNATGATEWAY[] | cdktf.IResolvable;
  /**
  * n_e_t_w_o_r_k_e_l_b block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#n_e_t_w_o_r_k_e_l_b DeviceGroup#n_e_t_w_o_r_k_e_l_b}
  */
  readonly nETWORKELB?: DeviceGroupExtraServicesNETWORKELB[] | cdktf.IResolvable;
  /**
  * n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e DeviceGroup#n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e}
  */
  readonly nETWORKINTERFACE?: DeviceGroupExtraServicesNETWORKINTERFACE[] | cdktf.IResolvable;
  /**
  * o_p_s_w_o_r_k_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#o_p_s_w_o_r_k_s DeviceGroup#o_p_s_w_o_r_k_s}
  */
  readonly oPSWORKS?: DeviceGroupExtraServicesOPSWORKS[] | cdktf.IResolvable;
  /**
  * p_o_s_t_g_r_e_sql block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#p_o_s_t_g_r_e_sql DeviceGroup#p_o_s_t_g_r_e_sql}
  */
  readonly pOSTGRESql?: DeviceGroupExtraServicesPOSTGRESql[] | cdktf.IResolvable;
  /**
  * p_u_b_l_i_c_ip block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#p_u_b_l_i_c_ip DeviceGroup#p_u_b_l_i_c_ip}
  */
  readonly pUBLICIp?: DeviceGroupExtraServicesPUBLICIp[] | cdktf.IResolvable;
  /**
  * q_u_e_u_e_s_t_o_r_a_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#q_u_e_u_e_s_t_o_r_a_g_e DeviceGroup#q_u_e_u_e_s_t_o_r_a_g_e}
  */
  readonly qUEUESTORAGE?: DeviceGroupExtraServicesQUEUESTORAGE[] | cdktf.IResolvable;
  /**
  * r_d_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#r_d_s DeviceGroup#r_d_s}
  */
  readonly rDS?: DeviceGroupExtraServicesRDS[] | cdktf.IResolvable;
  /**
  * r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m DeviceGroup#r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m}
  */
  readonly rECOVERYPROTECTEDITEM?: DeviceGroupExtraServicesRECOVERYPROTECTEDITEM[] | cdktf.IResolvable;
  /**
  * r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s DeviceGroup#r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s}
  */
  readonly rECOVERYSERVICES?: DeviceGroupExtraServicesRECOVERYSERVICES[] | cdktf.IResolvable;
  /**
  * r_e_d_i_s_c_a_c_h_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#r_e_d_i_s_c_a_c_h_e DeviceGroup#r_e_d_i_s_c_a_c_h_e}
  */
  readonly rEDISCACHE?: DeviceGroupExtraServicesREDISCACHE[] | cdktf.IResolvable;
  /**
  * r_e_d_s_h_i_f_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#r_e_d_s_h_i_f_t DeviceGroup#r_e_d_s_h_i_f_t}
  */
  readonly rEDSHIFT?: DeviceGroupExtraServicesREDSHIFT[] | cdktf.IResolvable;
  /**
  * r_o_u_t_e53 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#r_o_u_t_e53 DeviceGroup#r_o_u_t_e53}
  */
  readonly rOUTE53?: DeviceGroupExtraServicesROUTE53[] | cdktf.IResolvable;
  /**
  * r_o_u_t_e53_r_e_s_o_l_v_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#r_o_u_t_e53_r_e_s_o_l_v_e_r DeviceGroup#r_o_u_t_e53_r_e_s_o_l_v_e_r}
  */
  readonly rOUTE53RESOLVER?: DeviceGroupExtraServicesROUTE53RESOLVER[] | cdktf.IResolvable;
  /**
  * s3 block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s3 DeviceGroup#s3}
  */
  readonly s3?: DeviceGroupExtraServicesS3[] | cdktf.IResolvable;
  /**
  * s_a_g_e_m_a_k_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_a_g_e_m_a_k_e_r DeviceGroup#s_a_g_e_m_a_k_e_r}
  */
  readonly sAGEMAKER?: DeviceGroupExtraServicesSAGEMAKER[] | cdktf.IResolvable;
  /**
  * s_e_r_v_i_c_e_b_u_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_e_r_v_i_c_e_b_u_s DeviceGroup#s_e_r_v_i_c_e_b_u_s}
  */
  readonly sERVICEBUS?: DeviceGroupExtraServicesSERVICEBUS[] | cdktf.IResolvable;
  /**
  * s_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_e_s DeviceGroup#s_e_s}
  */
  readonly sES?: DeviceGroupExtraServicesSES[] | cdktf.IResolvable;
  /**
  * s_n_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_n_s DeviceGroup#s_n_s}
  */
  readonly sNS?: DeviceGroupExtraServicesSNS[] | cdktf.IResolvable;
  /**
  * s_q_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_q_s DeviceGroup#s_q_s}
  */
  readonly sQS?: DeviceGroupExtraServicesSQS[] | cdktf.IResolvable;
  /**
  * s_t_e_p_f_u_n_c_t_i_o_n_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_t_e_p_f_u_n_c_t_i_o_n_s DeviceGroup#s_t_e_p_f_u_n_c_t_i_o_n_s}
  */
  readonly sTEPFUNCTIONS?: DeviceGroupExtraServicesSTEPFUNCTIONS[] | cdktf.IResolvable;
  /**
  * s_t_o_r_a_g_e_a_c_c_o_u_n_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_t_o_r_a_g_e_a_c_c_o_u_n_t DeviceGroup#s_t_o_r_a_g_e_a_c_c_o_u_n_t}
  */
  readonly sTORAGEACCOUNT?: DeviceGroupExtraServicesSTORAGEACCOUNT[] | cdktf.IResolvable;
  /**
  * s_w_f_a_c_t_i_v_i_t_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_w_f_a_c_t_i_v_i_t_y DeviceGroup#s_w_f_a_c_t_i_v_i_t_y}
  */
  readonly sWFACTIVITY?: DeviceGroupExtraServicesSWFACTIVITY[] | cdktf.IResolvable;
  /**
  * s_w_f_w_o_r_k_f_l_o_w block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_w_f_w_o_r_k_f_l_o_w DeviceGroup#s_w_f_w_o_r_k_f_l_o_w}
  */
  readonly sWFWORKFLOW?: DeviceGroupExtraServicesSWFWORKFLOW[] | cdktf.IResolvable;
  /**
  * s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s DeviceGroup#s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s}
  */
  readonly sYNAPSEWORKSPACES?: DeviceGroupExtraServicesSYNAPSEWORKSPACES[] | cdktf.IResolvable;
  /**
  * sql_d_a_t_a_b_a_s_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#sql_d_a_t_a_b_a_s_e DeviceGroup#sql_d_a_t_a_b_a_s_e}
  */
  readonly sqlDATABASE?: DeviceGroupExtraServicesSqlDATABASE[] | cdktf.IResolvable;
  /**
  * sql_e_l_a_s_t_i_c_p_o_o_l block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#sql_e_l_a_s_t_i_c_p_o_o_l DeviceGroup#sql_e_l_a_s_t_i_c_p_o_o_l}
  */
  readonly sqlELASTICPOOL?: DeviceGroupExtraServicesSqlELASTICPOOL[] | cdktf.IResolvable;
  /**
  * sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e DeviceGroup#sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e}
  */
  readonly sqlMANAGEDINSTANCE?: DeviceGroupExtraServicesSqlMANAGEDINSTANCE[] | cdktf.IResolvable;
  /**
  * t_a_b_l_e_s_t_o_r_a_g_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#t_a_b_l_e_s_t_o_r_a_g_e DeviceGroup#t_a_b_l_e_s_t_o_r_a_g_e}
  */
  readonly tABLESTORAGE?: DeviceGroupExtraServicesTABLESTORAGE[] | cdktf.IResolvable;
  /**
  * t_r_a_f_f_i_c_m_a_n_a_g_e_r block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#t_r_a_f_f_i_c_m_a_n_a_g_e_r DeviceGroup#t_r_a_f_f_i_c_m_a_n_a_g_e_r}
  */
  readonly tRAFFICMANAGER?: DeviceGroupExtraServicesTRAFFICMANAGER[] | cdktf.IResolvable;
  /**
  * t_r_a_n_s_i_t_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#t_r_a_n_s_i_t_g_a_t_e_w_a_y DeviceGroup#t_r_a_n_s_i_t_g_a_t_e_w_a_y}
  */
  readonly tRANSITGATEWAY?: DeviceGroupExtraServicesTRANSITGATEWAY[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_d_e_s_k_t_o_p block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#v_i_r_t_u_a_l_d_e_s_k_t_o_p DeviceGroup#v_i_r_t_u_a_l_d_e_s_k_t_o_p}
  */
  readonly vIRTUALDESKTOP?: DeviceGroupExtraServicesVIRTUALDESKTOP[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_m_a_c_h_i_n_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#v_i_r_t_u_a_l_m_a_c_h_i_n_e DeviceGroup#v_i_r_t_u_a_l_m_a_c_h_i_n_e}
  */
  readonly vIRTUALMACHINE?: DeviceGroupExtraServicesVIRTUALMACHINE[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t DeviceGroup#v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t}
  */
  readonly vIRTUALMACHINESCALESET?: DeviceGroupExtraServicesVIRTUALMACHINESCALESET[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm DeviceGroup#v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm}
  */
  readonly vIRTUALMACHINESCALESETVm?: DeviceGroupExtraServicesVIRTUALMACHINESCALESETVm[] | cdktf.IResolvable;
  /**
  * v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y DeviceGroup#v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y}
  */
  readonly vIRTUALNETWORKGATEWAY?: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAY[] | cdktf.IResolvable;
  /**
  * v_p_n block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#v_p_n DeviceGroup#v_p_n}
  */
  readonly vPN?: DeviceGroupExtraServicesVPN[] | cdktf.IResolvable;
  /**
  * w_o_r_k_s_p_a_c_e block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#w_o_r_k_s_p_a_c_e DeviceGroup#w_o_r_k_s_p_a_c_e}
  */
  readonly wORKSPACE?: DeviceGroupExtraServicesWORKSPACE[] | cdktf.IResolvable;
  /**
  * w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y DeviceGroup#w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y}
  */
  readonly wORKSPACEDIRECTORY?: DeviceGroupExtraServicesWORKSPACEDIRECTORY[] | cdktf.IResolvable;
}

export function deviceGroupExtraServicesToTerraform(struct?: DeviceGroupExtraServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    a_p_p_l_i_c_a_t_i_o_n_e_l_b: cdktf.listMapper(deviceGroupExtraServicesAPPLICATIONELBToTerraform, true)(struct!.aPPLICATIONELB),
    a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y: cdktf.listMapper(deviceGroupExtraServicesAPPLICATIONGATEWAYToTerraform, true)(struct!.aPPLICATIONGATEWAY),
    a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s: cdktf.listMapper(deviceGroupExtraServicesAPPLICATIONINSIGHTSToTerraform, true)(struct!.aPPLICATIONINSIGHTS),
    a_p_p_s_e_r_v_i_c_e: cdktf.listMapper(deviceGroupExtraServicesAPPSERVICEToTerraform, true)(struct!.aPPSERVICE),
    a_p_p_s_e_r_v_i_c_e_p_l_a_n: cdktf.listMapper(deviceGroupExtraServicesAPPSERVICEPLANToTerraform, true)(struct!.aPPSERVICEPLAN),
    a_p_p_s_t_r_e_a_m: cdktf.listMapper(deviceGroupExtraServicesAPPSTREAMToTerraform, true)(struct!.aPPSTREAM),
    a_t_h_e_n_a: cdktf.listMapper(deviceGroupExtraServicesATHENAToTerraform, true)(struct!.aTHENA),
    a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t: cdktf.listMapper(deviceGroupExtraServicesAUTOMATIONACCOUNTToTerraform, true)(struct!.aUTOMATIONACCOUNT),
    a_u_t_o_s_c_a_l_i_n_g: cdktf.listMapper(deviceGroupExtraServicesAUTOSCALINGToTerraform, true)(struct!.aUTOSCALING),
    api_g_a_t_e_w_a_y: cdktf.listMapper(deviceGroupExtraServicesApiGATEWAYToTerraform, true)(struct!.apiGATEWAY),
    api_m_a_n_a_g_e_m_e_n_t: cdktf.listMapper(deviceGroupExtraServicesApiMANAGEMENTToTerraform, true)(struct!.apiMANAGEMENT),
    b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s: cdktf.listMapper(deviceGroupExtraServicesBACKUPPROTECTEDITEMSToTerraform, true)(struct!.bACKUPPROTECTEDITEMS),
    b_l_o_b_s_t_o_r_a_g_e: cdktf.listMapper(deviceGroupExtraServicesBLOBSTORAGEToTerraform, true)(struct!.bLOBSTORAGE),
    c_l_o_u_d_f_r_o_n_t: cdktf.listMapper(deviceGroupExtraServicesCLOUDFRONTToTerraform, true)(struct!.cLOUDFRONT),
    c_l_o_u_d_s_e_a_r_c_h: cdktf.listMapper(deviceGroupExtraServicesCLOUDSEARCHToTerraform, true)(struct!.cLOUDSEARCH),
    c_o_d_e_b_ui_l_d: cdktf.listMapper(deviceGroupExtraServicesCODEBUiLDToTerraform, true)(struct!.cODEBUiLD),
    c_o_g_n_i_t_i_v_e_s_e_a_r_c_h: cdktf.listMapper(deviceGroupExtraServicesCOGNITIVESEARCHToTerraform, true)(struct!.cOGNITIVESEARCH),
    c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s: cdktf.listMapper(deviceGroupExtraServicesCOGNITIVESERVICESToTerraform, true)(struct!.cOGNITIVESERVICES),
    c_o_g_n_i_t_o: cdktf.listMapper(deviceGroupExtraServicesCOGNITOToTerraform, true)(struct!.cOGNITO),
    c_o_s_m_o_s_d_b: cdktf.listMapper(deviceGroupExtraServicesCOSMOSDBToTerraform, true)(struct!.cOSMOSDB),
    d_a_t_a_f_a_c_t_o_r_y: cdktf.listMapper(deviceGroupExtraServicesDATAFACTORYToTerraform, true)(struct!.dATAFACTORY),
    d_i_r_e_c_t_c_o_n_n_e_c_t: cdktf.listMapper(deviceGroupExtraServicesDIRECTCONNECTToTerraform, true)(struct!.dIRECTCONNECT),
    d_m_s_r_e_p_l_i_c_a_t_i_o_n: cdktf.listMapper(deviceGroupExtraServicesDMSREPLICATIONToTerraform, true)(struct!.dMSREPLICATION),
    d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s: cdktf.listMapper(deviceGroupExtraServicesDMSREPLICATIONTASKSToTerraform, true)(struct!.dMSREPLICATIONTASKS),
    d_o_c_d_b: cdktf.listMapper(deviceGroupExtraServicesDOCDBToTerraform, true)(struct!.dOCDB),
    d_y_n_a_m_o_d_b: cdktf.listMapper(deviceGroupExtraServicesDYNAMODBToTerraform, true)(struct!.dYNAMODB),
    e_b_s: cdktf.listMapper(deviceGroupExtraServicesEBSToTerraform, true)(struct!.eBS),
    e_c2: cdktf.listMapper(deviceGroupExtraServicesEC2ToTerraform, true)(struct!.eC2),
    e_c_s: cdktf.listMapper(deviceGroupExtraServicesECSToTerraform, true)(struct!.eCS),
    e_f_s: cdktf.listMapper(deviceGroupExtraServicesEFSToTerraform, true)(struct!.eFS),
    e_l_a_s_t_i_c_a_c_h_e: cdktf.listMapper(deviceGroupExtraServicesELASTICACHEToTerraform, true)(struct!.eLASTICACHE),
    e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k: cdktf.listMapper(deviceGroupExtraServicesELASTICBEANSTALKToTerraform, true)(struct!.eLASTICBEANSTALK),
    e_l_a_s_t_i_c_s_e_a_r_c_h: cdktf.listMapper(deviceGroupExtraServicesELASTICSEARCHToTerraform, true)(struct!.eLASTICSEARCH),
    e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r: cdktf.listMapper(deviceGroupExtraServicesELASTICTRANSCODERToTerraform, true)(struct!.eLASTICTRANSCODER),
    e_l_b: cdktf.listMapper(deviceGroupExtraServicesELBToTerraform, true)(struct!.eLB),
    e_m_r: cdktf.listMapper(deviceGroupExtraServicesEMRToTerraform, true)(struct!.eMR),
    e_v_e_n_t_b_r_id_g_e: cdktf.listMapper(deviceGroupExtraServicesEVENTBRIdGEToTerraform, true)(struct!.eVENTBRIdGE),
    e_v_e_n_t_h_u_b: cdktf.listMapper(deviceGroupExtraServicesEVENTHUBToTerraform, true)(struct!.eVENTHUB),
    e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t: cdktf.listMapper(deviceGroupExtraServicesEXPRESSROUTECIRCUiTToTerraform, true)(struct!.eXPRESSROUTECIRCUiT),
    f_i_l_e_s_t_o_r_a_g_e: cdktf.listMapper(deviceGroupExtraServicesFILESTORAGEToTerraform, true)(struct!.fILESTORAGE),
    f_i_r_e_h_o_s_e: cdktf.listMapper(deviceGroupExtraServicesFIREHOSEToTerraform, true)(struct!.fIREHOSE),
    f_i_r_e_w_a_l_l: cdktf.listMapper(deviceGroupExtraServicesFIREWALLToTerraform, true)(struct!.fIREWALL),
    f_r_o_n_t_d_o_o_r_s: cdktf.listMapper(deviceGroupExtraServicesFRONTDOORSToTerraform, true)(struct!.fRONTDOORS),
    f_s_x: cdktf.listMapper(deviceGroupExtraServicesFSXToTerraform, true)(struct!.fSX),
    g_l_u_e: cdktf.listMapper(deviceGroupExtraServicesGLUEToTerraform, true)(struct!.gLUE),
    k_e_y_v_a_u_l_t: cdktf.listMapper(deviceGroupExtraServicesKEYVAULTToTerraform, true)(struct!.kEYVAULT),
    k_i_n_e_s_i_s: cdktf.listMapper(deviceGroupExtraServicesKINESISToTerraform, true)(struct!.kINESIS),
    k_i_n_e_s_i_s_v_id_e_o: cdktf.listMapper(deviceGroupExtraServicesKINESISVIdEOToTerraform, true)(struct!.kINESISVIdEO),
    l_a_m_b_d_a: cdktf.listMapper(deviceGroupExtraServicesLAMBDAToTerraform, true)(struct!.lAMBDA),
    l_o_a_d_b_a_l_a_n_c_e_r_s: cdktf.listMapper(deviceGroupExtraServicesLOADBALANCERSToTerraform, true)(struct!.lOADBALANCERS),
    l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s: cdktf.listMapper(deviceGroupExtraServicesLOGANALYTICSWORKSPACESToTerraform, true)(struct!.lOGANALYTICSWORKSPACES),
    l_o_g_i_c_a_p_p_s: cdktf.listMapper(deviceGroupExtraServicesLOGICAPPSToTerraform, true)(struct!.lOGICAPPS),
    m_e_d_i_a_c_o_n_n_e_c_t: cdktf.listMapper(deviceGroupExtraServicesMEDIACONNECTToTerraform, true)(struct!.mEDIACONNECT),
    m_e_d_i_a_c_o_n_v_e_r_t: cdktf.listMapper(deviceGroupExtraServicesMEDIACONVERTToTerraform, true)(struct!.mEDIACONVERT),
    m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e: cdktf.listMapper(deviceGroupExtraServicesMEDIAPACKAGELIVEToTerraform, true)(struct!.mEDIAPACKAGELIVE),
    m_e_d_i_a_p_a_c_k_a_g_e_v_o_d: cdktf.listMapper(deviceGroupExtraServicesMEDIAPACKAGEVODToTerraform, true)(struct!.mEDIAPACKAGEVOD),
    m_e_d_i_a_s_t_o_r_e: cdktf.listMapper(deviceGroupExtraServicesMEDIASTOREToTerraform, true)(struct!.mEDIASTORE),
    m_e_d_i_a_t_a_i_l_o_r: cdktf.listMapper(deviceGroupExtraServicesMEDIATAILORToTerraform, true)(struct!.mEDIATAILOR),
    m_q: cdktf.listMapper(deviceGroupExtraServicesMQToTerraform, true)(struct!.mQ),
    m_s_k_b_r_o_k_e_r: cdktf.listMapper(deviceGroupExtraServicesMSKBROKERToTerraform, true)(struct!.mSKBROKER),
    m_s_k_c_l_u_s_t_e_r: cdktf.listMapper(deviceGroupExtraServicesMSKCLUSTERToTerraform, true)(struct!.mSKCLUSTER),
    m_y_sql: cdktf.listMapper(deviceGroupExtraServicesMYSqlToTerraform, true)(struct!.mYSql),
    n_a_t_g_a_t_e_w_a_y: cdktf.listMapper(deviceGroupExtraServicesNATGATEWAYToTerraform, true)(struct!.nATGATEWAY),
    n_e_t_w_o_r_k_e_l_b: cdktf.listMapper(deviceGroupExtraServicesNETWORKELBToTerraform, true)(struct!.nETWORKELB),
    n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e: cdktf.listMapper(deviceGroupExtraServicesNETWORKINTERFACEToTerraform, true)(struct!.nETWORKINTERFACE),
    o_p_s_w_o_r_k_s: cdktf.listMapper(deviceGroupExtraServicesOPSWORKSToTerraform, true)(struct!.oPSWORKS),
    p_o_s_t_g_r_e_sql: cdktf.listMapper(deviceGroupExtraServicesPOSTGRESqlToTerraform, true)(struct!.pOSTGRESql),
    p_u_b_l_i_c_ip: cdktf.listMapper(deviceGroupExtraServicesPUBLICIpToTerraform, true)(struct!.pUBLICIp),
    q_u_e_u_e_s_t_o_r_a_g_e: cdktf.listMapper(deviceGroupExtraServicesQUEUESTORAGEToTerraform, true)(struct!.qUEUESTORAGE),
    r_d_s: cdktf.listMapper(deviceGroupExtraServicesRDSToTerraform, true)(struct!.rDS),
    r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m: cdktf.listMapper(deviceGroupExtraServicesRECOVERYPROTECTEDITEMToTerraform, true)(struct!.rECOVERYPROTECTEDITEM),
    r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s: cdktf.listMapper(deviceGroupExtraServicesRECOVERYSERVICESToTerraform, true)(struct!.rECOVERYSERVICES),
    r_e_d_i_s_c_a_c_h_e: cdktf.listMapper(deviceGroupExtraServicesREDISCACHEToTerraform, true)(struct!.rEDISCACHE),
    r_e_d_s_h_i_f_t: cdktf.listMapper(deviceGroupExtraServicesREDSHIFTToTerraform, true)(struct!.rEDSHIFT),
    r_o_u_t_e53: cdktf.listMapper(deviceGroupExtraServicesROUTE53ToTerraform, true)(struct!.rOUTE53),
    r_o_u_t_e53_r_e_s_o_l_v_e_r: cdktf.listMapper(deviceGroupExtraServicesROUTE53RESOLVERToTerraform, true)(struct!.rOUTE53RESOLVER),
    s3: cdktf.listMapper(deviceGroupExtraServicesS3ToTerraform, true)(struct!.s3),
    s_a_g_e_m_a_k_e_r: cdktf.listMapper(deviceGroupExtraServicesSAGEMAKERToTerraform, true)(struct!.sAGEMAKER),
    s_e_r_v_i_c_e_b_u_s: cdktf.listMapper(deviceGroupExtraServicesSERVICEBUSToTerraform, true)(struct!.sERVICEBUS),
    s_e_s: cdktf.listMapper(deviceGroupExtraServicesSESToTerraform, true)(struct!.sES),
    s_n_s: cdktf.listMapper(deviceGroupExtraServicesSNSToTerraform, true)(struct!.sNS),
    s_q_s: cdktf.listMapper(deviceGroupExtraServicesSQSToTerraform, true)(struct!.sQS),
    s_t_e_p_f_u_n_c_t_i_o_n_s: cdktf.listMapper(deviceGroupExtraServicesSTEPFUNCTIONSToTerraform, true)(struct!.sTEPFUNCTIONS),
    s_t_o_r_a_g_e_a_c_c_o_u_n_t: cdktf.listMapper(deviceGroupExtraServicesSTORAGEACCOUNTToTerraform, true)(struct!.sTORAGEACCOUNT),
    s_w_f_a_c_t_i_v_i_t_y: cdktf.listMapper(deviceGroupExtraServicesSWFACTIVITYToTerraform, true)(struct!.sWFACTIVITY),
    s_w_f_w_o_r_k_f_l_o_w: cdktf.listMapper(deviceGroupExtraServicesSWFWORKFLOWToTerraform, true)(struct!.sWFWORKFLOW),
    s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s: cdktf.listMapper(deviceGroupExtraServicesSYNAPSEWORKSPACESToTerraform, true)(struct!.sYNAPSEWORKSPACES),
    sql_d_a_t_a_b_a_s_e: cdktf.listMapper(deviceGroupExtraServicesSqlDATABASEToTerraform, true)(struct!.sqlDATABASE),
    sql_e_l_a_s_t_i_c_p_o_o_l: cdktf.listMapper(deviceGroupExtraServicesSqlELASTICPOOLToTerraform, true)(struct!.sqlELASTICPOOL),
    sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e: cdktf.listMapper(deviceGroupExtraServicesSqlMANAGEDINSTANCEToTerraform, true)(struct!.sqlMANAGEDINSTANCE),
    t_a_b_l_e_s_t_o_r_a_g_e: cdktf.listMapper(deviceGroupExtraServicesTABLESTORAGEToTerraform, true)(struct!.tABLESTORAGE),
    t_r_a_f_f_i_c_m_a_n_a_g_e_r: cdktf.listMapper(deviceGroupExtraServicesTRAFFICMANAGERToTerraform, true)(struct!.tRAFFICMANAGER),
    t_r_a_n_s_i_t_g_a_t_e_w_a_y: cdktf.listMapper(deviceGroupExtraServicesTRANSITGATEWAYToTerraform, true)(struct!.tRANSITGATEWAY),
    v_i_r_t_u_a_l_d_e_s_k_t_o_p: cdktf.listMapper(deviceGroupExtraServicesVIRTUALDESKTOPToTerraform, true)(struct!.vIRTUALDESKTOP),
    v_i_r_t_u_a_l_m_a_c_h_i_n_e: cdktf.listMapper(deviceGroupExtraServicesVIRTUALMACHINEToTerraform, true)(struct!.vIRTUALMACHINE),
    v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t: cdktf.listMapper(deviceGroupExtraServicesVIRTUALMACHINESCALESETToTerraform, true)(struct!.vIRTUALMACHINESCALESET),
    v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm: cdktf.listMapper(deviceGroupExtraServicesVIRTUALMACHINESCALESETVmToTerraform, true)(struct!.vIRTUALMACHINESCALESETVm),
    v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y: cdktf.listMapper(deviceGroupExtraServicesVIRTUALNETWORKGATEWAYToTerraform, true)(struct!.vIRTUALNETWORKGATEWAY),
    v_p_n: cdktf.listMapper(deviceGroupExtraServicesVPNToTerraform, true)(struct!.vPN),
    w_o_r_k_s_p_a_c_e: cdktf.listMapper(deviceGroupExtraServicesWORKSPACEToTerraform, true)(struct!.wORKSPACE),
    w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y: cdktf.listMapper(deviceGroupExtraServicesWORKSPACEDIRECTORYToTerraform, true)(struct!.wORKSPACEDIRECTORY),
  }
}


export function deviceGroupExtraServicesToHclTerraform(struct?: DeviceGroupExtraServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    a_p_p_l_i_c_a_t_i_o_n_e_l_b: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesAPPLICATIONELBToHclTerraform, true)(struct!.aPPLICATIONELB),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesAPPLICATIONELBList",
    },
    a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesAPPLICATIONGATEWAYToHclTerraform, true)(struct!.aPPLICATIONGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesAPPLICATIONGATEWAYList",
    },
    a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesAPPLICATIONINSIGHTSToHclTerraform, true)(struct!.aPPLICATIONINSIGHTS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesAPPLICATIONINSIGHTSList",
    },
    a_p_p_s_e_r_v_i_c_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesAPPSERVICEToHclTerraform, true)(struct!.aPPSERVICE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesAPPSERVICEList",
    },
    a_p_p_s_e_r_v_i_c_e_p_l_a_n: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesAPPSERVICEPLANToHclTerraform, true)(struct!.aPPSERVICEPLAN),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesAPPSERVICEPLANList",
    },
    a_p_p_s_t_r_e_a_m: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesAPPSTREAMToHclTerraform, true)(struct!.aPPSTREAM),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesAPPSTREAMList",
    },
    a_t_h_e_n_a: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesATHENAToHclTerraform, true)(struct!.aTHENA),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesATHENAList",
    },
    a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesAUTOMATIONACCOUNTToHclTerraform, true)(struct!.aUTOMATIONACCOUNT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesAUTOMATIONACCOUNTList",
    },
    a_u_t_o_s_c_a_l_i_n_g: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesAUTOSCALINGToHclTerraform, true)(struct!.aUTOSCALING),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesAUTOSCALINGList",
    },
    api_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesApiGATEWAYToHclTerraform, true)(struct!.apiGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesApiGATEWAYList",
    },
    api_m_a_n_a_g_e_m_e_n_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesApiMANAGEMENTToHclTerraform, true)(struct!.apiMANAGEMENT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesApiMANAGEMENTList",
    },
    b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesBACKUPPROTECTEDITEMSToHclTerraform, true)(struct!.bACKUPPROTECTEDITEMS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesBACKUPPROTECTEDITEMSList",
    },
    b_l_o_b_s_t_o_r_a_g_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesBLOBSTORAGEToHclTerraform, true)(struct!.bLOBSTORAGE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesBLOBSTORAGEList",
    },
    c_l_o_u_d_f_r_o_n_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesCLOUDFRONTToHclTerraform, true)(struct!.cLOUDFRONT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesCLOUDFRONTList",
    },
    c_l_o_u_d_s_e_a_r_c_h: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesCLOUDSEARCHToHclTerraform, true)(struct!.cLOUDSEARCH),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesCLOUDSEARCHList",
    },
    c_o_d_e_b_ui_l_d: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesCODEBUiLDToHclTerraform, true)(struct!.cODEBUiLD),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesCODEBUiLDList",
    },
    c_o_g_n_i_t_i_v_e_s_e_a_r_c_h: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesCOGNITIVESEARCHToHclTerraform, true)(struct!.cOGNITIVESEARCH),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesCOGNITIVESEARCHList",
    },
    c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesCOGNITIVESERVICESToHclTerraform, true)(struct!.cOGNITIVESERVICES),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesCOGNITIVESERVICESList",
    },
    c_o_g_n_i_t_o: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesCOGNITOToHclTerraform, true)(struct!.cOGNITO),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesCOGNITOList",
    },
    c_o_s_m_o_s_d_b: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesCOSMOSDBToHclTerraform, true)(struct!.cOSMOSDB),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesCOSMOSDBList",
    },
    d_a_t_a_f_a_c_t_o_r_y: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesDATAFACTORYToHclTerraform, true)(struct!.dATAFACTORY),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesDATAFACTORYList",
    },
    d_i_r_e_c_t_c_o_n_n_e_c_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesDIRECTCONNECTToHclTerraform, true)(struct!.dIRECTCONNECT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesDIRECTCONNECTList",
    },
    d_m_s_r_e_p_l_i_c_a_t_i_o_n: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesDMSREPLICATIONToHclTerraform, true)(struct!.dMSREPLICATION),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesDMSREPLICATIONList",
    },
    d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesDMSREPLICATIONTASKSToHclTerraform, true)(struct!.dMSREPLICATIONTASKS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesDMSREPLICATIONTASKSList",
    },
    d_o_c_d_b: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesDOCDBToHclTerraform, true)(struct!.dOCDB),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesDOCDBList",
    },
    d_y_n_a_m_o_d_b: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesDYNAMODBToHclTerraform, true)(struct!.dYNAMODB),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesDYNAMODBList",
    },
    e_b_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesEBSToHclTerraform, true)(struct!.eBS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesEBSList",
    },
    e_c2: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesEC2ToHclTerraform, true)(struct!.eC2),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesEC2List",
    },
    e_c_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesECSToHclTerraform, true)(struct!.eCS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesECSList",
    },
    e_f_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesEFSToHclTerraform, true)(struct!.eFS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesEFSList",
    },
    e_l_a_s_t_i_c_a_c_h_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesELASTICACHEToHclTerraform, true)(struct!.eLASTICACHE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesELASTICACHEList",
    },
    e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesELASTICBEANSTALKToHclTerraform, true)(struct!.eLASTICBEANSTALK),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesELASTICBEANSTALKList",
    },
    e_l_a_s_t_i_c_s_e_a_r_c_h: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesELASTICSEARCHToHclTerraform, true)(struct!.eLASTICSEARCH),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesELASTICSEARCHList",
    },
    e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesELASTICTRANSCODERToHclTerraform, true)(struct!.eLASTICTRANSCODER),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesELASTICTRANSCODERList",
    },
    e_l_b: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesELBToHclTerraform, true)(struct!.eLB),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesELBList",
    },
    e_m_r: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesEMRToHclTerraform, true)(struct!.eMR),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesEMRList",
    },
    e_v_e_n_t_b_r_id_g_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesEVENTBRIdGEToHclTerraform, true)(struct!.eVENTBRIdGE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesEVENTBRIdGEList",
    },
    e_v_e_n_t_h_u_b: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesEVENTHUBToHclTerraform, true)(struct!.eVENTHUB),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesEVENTHUBList",
    },
    e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesEXPRESSROUTECIRCUiTToHclTerraform, true)(struct!.eXPRESSROUTECIRCUiT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesEXPRESSROUTECIRCUiTList",
    },
    f_i_l_e_s_t_o_r_a_g_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesFILESTORAGEToHclTerraform, true)(struct!.fILESTORAGE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesFILESTORAGEList",
    },
    f_i_r_e_h_o_s_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesFIREHOSEToHclTerraform, true)(struct!.fIREHOSE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesFIREHOSEList",
    },
    f_i_r_e_w_a_l_l: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesFIREWALLToHclTerraform, true)(struct!.fIREWALL),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesFIREWALLList",
    },
    f_r_o_n_t_d_o_o_r_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesFRONTDOORSToHclTerraform, true)(struct!.fRONTDOORS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesFRONTDOORSList",
    },
    f_s_x: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesFSXToHclTerraform, true)(struct!.fSX),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesFSXList",
    },
    g_l_u_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesGLUEToHclTerraform, true)(struct!.gLUE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesGLUEList",
    },
    k_e_y_v_a_u_l_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesKEYVAULTToHclTerraform, true)(struct!.kEYVAULT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesKEYVAULTList",
    },
    k_i_n_e_s_i_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesKINESISToHclTerraform, true)(struct!.kINESIS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesKINESISList",
    },
    k_i_n_e_s_i_s_v_id_e_o: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesKINESISVIdEOToHclTerraform, true)(struct!.kINESISVIdEO),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesKINESISVIdEOList",
    },
    l_a_m_b_d_a: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesLAMBDAToHclTerraform, true)(struct!.lAMBDA),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesLAMBDAList",
    },
    l_o_a_d_b_a_l_a_n_c_e_r_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesLOADBALANCERSToHclTerraform, true)(struct!.lOADBALANCERS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesLOADBALANCERSList",
    },
    l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesLOGANALYTICSWORKSPACESToHclTerraform, true)(struct!.lOGANALYTICSWORKSPACES),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesLOGANALYTICSWORKSPACESList",
    },
    l_o_g_i_c_a_p_p_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesLOGICAPPSToHclTerraform, true)(struct!.lOGICAPPS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesLOGICAPPSList",
    },
    m_e_d_i_a_c_o_n_n_e_c_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMEDIACONNECTToHclTerraform, true)(struct!.mEDIACONNECT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMEDIACONNECTList",
    },
    m_e_d_i_a_c_o_n_v_e_r_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMEDIACONVERTToHclTerraform, true)(struct!.mEDIACONVERT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMEDIACONVERTList",
    },
    m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMEDIAPACKAGELIVEToHclTerraform, true)(struct!.mEDIAPACKAGELIVE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMEDIAPACKAGELIVEList",
    },
    m_e_d_i_a_p_a_c_k_a_g_e_v_o_d: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMEDIAPACKAGEVODToHclTerraform, true)(struct!.mEDIAPACKAGEVOD),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMEDIAPACKAGEVODList",
    },
    m_e_d_i_a_s_t_o_r_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMEDIASTOREToHclTerraform, true)(struct!.mEDIASTORE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMEDIASTOREList",
    },
    m_e_d_i_a_t_a_i_l_o_r: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMEDIATAILORToHclTerraform, true)(struct!.mEDIATAILOR),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMEDIATAILORList",
    },
    m_q: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMQToHclTerraform, true)(struct!.mQ),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMQList",
    },
    m_s_k_b_r_o_k_e_r: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMSKBROKERToHclTerraform, true)(struct!.mSKBROKER),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMSKBROKERList",
    },
    m_s_k_c_l_u_s_t_e_r: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMSKCLUSTERToHclTerraform, true)(struct!.mSKCLUSTER),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMSKCLUSTERList",
    },
    m_y_sql: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesMYSqlToHclTerraform, true)(struct!.mYSql),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesMYSqlList",
    },
    n_a_t_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesNATGATEWAYToHclTerraform, true)(struct!.nATGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesNATGATEWAYList",
    },
    n_e_t_w_o_r_k_e_l_b: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesNETWORKELBToHclTerraform, true)(struct!.nETWORKELB),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesNETWORKELBList",
    },
    n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesNETWORKINTERFACEToHclTerraform, true)(struct!.nETWORKINTERFACE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesNETWORKINTERFACEList",
    },
    o_p_s_w_o_r_k_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesOPSWORKSToHclTerraform, true)(struct!.oPSWORKS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesOPSWORKSList",
    },
    p_o_s_t_g_r_e_sql: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesPOSTGRESqlToHclTerraform, true)(struct!.pOSTGRESql),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesPOSTGRESqlList",
    },
    p_u_b_l_i_c_ip: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesPUBLICIpToHclTerraform, true)(struct!.pUBLICIp),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesPUBLICIpList",
    },
    q_u_e_u_e_s_t_o_r_a_g_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesQUEUESTORAGEToHclTerraform, true)(struct!.qUEUESTORAGE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesQUEUESTORAGEList",
    },
    r_d_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesRDSToHclTerraform, true)(struct!.rDS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesRDSList",
    },
    r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesRECOVERYPROTECTEDITEMToHclTerraform, true)(struct!.rECOVERYPROTECTEDITEM),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesRECOVERYPROTECTEDITEMList",
    },
    r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesRECOVERYSERVICESToHclTerraform, true)(struct!.rECOVERYSERVICES),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesRECOVERYSERVICESList",
    },
    r_e_d_i_s_c_a_c_h_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesREDISCACHEToHclTerraform, true)(struct!.rEDISCACHE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesREDISCACHEList",
    },
    r_e_d_s_h_i_f_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesREDSHIFTToHclTerraform, true)(struct!.rEDSHIFT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesREDSHIFTList",
    },
    r_o_u_t_e53: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesROUTE53ToHclTerraform, true)(struct!.rOUTE53),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesROUTE53List",
    },
    r_o_u_t_e53_r_e_s_o_l_v_e_r: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesROUTE53RESOLVERToHclTerraform, true)(struct!.rOUTE53RESOLVER),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesROUTE53RESOLVERList",
    },
    s3: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesS3ToHclTerraform, true)(struct!.s3),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesS3List",
    },
    s_a_g_e_m_a_k_e_r: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSAGEMAKERToHclTerraform, true)(struct!.sAGEMAKER),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSAGEMAKERList",
    },
    s_e_r_v_i_c_e_b_u_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSERVICEBUSToHclTerraform, true)(struct!.sERVICEBUS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSERVICEBUSList",
    },
    s_e_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSESToHclTerraform, true)(struct!.sES),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSESList",
    },
    s_n_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSNSToHclTerraform, true)(struct!.sNS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSNSList",
    },
    s_q_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSQSToHclTerraform, true)(struct!.sQS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSQSList",
    },
    s_t_e_p_f_u_n_c_t_i_o_n_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSTEPFUNCTIONSToHclTerraform, true)(struct!.sTEPFUNCTIONS),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSTEPFUNCTIONSList",
    },
    s_t_o_r_a_g_e_a_c_c_o_u_n_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSTORAGEACCOUNTToHclTerraform, true)(struct!.sTORAGEACCOUNT),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSTORAGEACCOUNTList",
    },
    s_w_f_a_c_t_i_v_i_t_y: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSWFACTIVITYToHclTerraform, true)(struct!.sWFACTIVITY),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSWFACTIVITYList",
    },
    s_w_f_w_o_r_k_f_l_o_w: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSWFWORKFLOWToHclTerraform, true)(struct!.sWFWORKFLOW),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSWFWORKFLOWList",
    },
    s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSYNAPSEWORKSPACESToHclTerraform, true)(struct!.sYNAPSEWORKSPACES),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSYNAPSEWORKSPACESList",
    },
    sql_d_a_t_a_b_a_s_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSqlDATABASEToHclTerraform, true)(struct!.sqlDATABASE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSqlDATABASEList",
    },
    sql_e_l_a_s_t_i_c_p_o_o_l: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSqlELASTICPOOLToHclTerraform, true)(struct!.sqlELASTICPOOL),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSqlELASTICPOOLList",
    },
    sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesSqlMANAGEDINSTANCEToHclTerraform, true)(struct!.sqlMANAGEDINSTANCE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesSqlMANAGEDINSTANCEList",
    },
    t_a_b_l_e_s_t_o_r_a_g_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesTABLESTORAGEToHclTerraform, true)(struct!.tABLESTORAGE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesTABLESTORAGEList",
    },
    t_r_a_f_f_i_c_m_a_n_a_g_e_r: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesTRAFFICMANAGERToHclTerraform, true)(struct!.tRAFFICMANAGER),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesTRAFFICMANAGERList",
    },
    t_r_a_n_s_i_t_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesTRANSITGATEWAYToHclTerraform, true)(struct!.tRANSITGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesTRANSITGATEWAYList",
    },
    v_i_r_t_u_a_l_d_e_s_k_t_o_p: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVIRTUALDESKTOPToHclTerraform, true)(struct!.vIRTUALDESKTOP),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVIRTUALDESKTOPList",
    },
    v_i_r_t_u_a_l_m_a_c_h_i_n_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVIRTUALMACHINEToHclTerraform, true)(struct!.vIRTUALMACHINE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVIRTUALMACHINEList",
    },
    v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVIRTUALMACHINESCALESETToHclTerraform, true)(struct!.vIRTUALMACHINESCALESET),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVIRTUALMACHINESCALESETList",
    },
    v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVIRTUALMACHINESCALESETVmToHclTerraform, true)(struct!.vIRTUALMACHINESCALESETVm),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVIRTUALMACHINESCALESETVmList",
    },
    v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVIRTUALNETWORKGATEWAYToHclTerraform, true)(struct!.vIRTUALNETWORKGATEWAY),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYList",
    },
    v_p_n: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesVPNToHclTerraform, true)(struct!.vPN),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesVPNList",
    },
    w_o_r_k_s_p_a_c_e: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesWORKSPACEToHclTerraform, true)(struct!.wORKSPACE),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesWORKSPACEList",
    },
    w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesWORKSPACEDIRECTORYToHclTerraform, true)(struct!.wORKSPACEDIRECTORY),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesWORKSPACEDIRECTORYList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtraServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._aPPLICATIONELB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPLICATIONELB = this._aPPLICATIONELB?.internalValue;
    }
    if (this._aPPLICATIONGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPLICATIONGATEWAY = this._aPPLICATIONGATEWAY?.internalValue;
    }
    if (this._aPPLICATIONINSIGHTS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPLICATIONINSIGHTS = this._aPPLICATIONINSIGHTS?.internalValue;
    }
    if (this._aPPSERVICE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPSERVICE = this._aPPSERVICE?.internalValue;
    }
    if (this._aPPSERVICEPLAN?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPSERVICEPLAN = this._aPPSERVICEPLAN?.internalValue;
    }
    if (this._aPPSTREAM?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aPPSTREAM = this._aPPSTREAM?.internalValue;
    }
    if (this._aTHENA?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aTHENA = this._aTHENA?.internalValue;
    }
    if (this._aUTOMATIONACCOUNT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aUTOMATIONACCOUNT = this._aUTOMATIONACCOUNT?.internalValue;
    }
    if (this._aUTOSCALING?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.aUTOSCALING = this._aUTOSCALING?.internalValue;
    }
    if (this._apiGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiGATEWAY = this._apiGATEWAY?.internalValue;
    }
    if (this._apiMANAGEMENT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiMANAGEMENT = this._apiMANAGEMENT?.internalValue;
    }
    if (this._bACKUPPROTECTEDITEMS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bACKUPPROTECTEDITEMS = this._bACKUPPROTECTEDITEMS?.internalValue;
    }
    if (this._bLOBSTORAGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bLOBSTORAGE = this._bLOBSTORAGE?.internalValue;
    }
    if (this._cLOUDFRONT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cLOUDFRONT = this._cLOUDFRONT?.internalValue;
    }
    if (this._cLOUDSEARCH?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cLOUDSEARCH = this._cLOUDSEARCH?.internalValue;
    }
    if (this._cODEBUiLD?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cODEBUiLD = this._cODEBUiLD?.internalValue;
    }
    if (this._cOGNITIVESEARCH?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cOGNITIVESEARCH = this._cOGNITIVESEARCH?.internalValue;
    }
    if (this._cOGNITIVESERVICES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cOGNITIVESERVICES = this._cOGNITIVESERVICES?.internalValue;
    }
    if (this._cOGNITO?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cOGNITO = this._cOGNITO?.internalValue;
    }
    if (this._cOSMOSDB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cOSMOSDB = this._cOSMOSDB?.internalValue;
    }
    if (this._dATAFACTORY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dATAFACTORY = this._dATAFACTORY?.internalValue;
    }
    if (this._dIRECTCONNECT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dIRECTCONNECT = this._dIRECTCONNECT?.internalValue;
    }
    if (this._dMSREPLICATION?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dMSREPLICATION = this._dMSREPLICATION?.internalValue;
    }
    if (this._dMSREPLICATIONTASKS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dMSREPLICATIONTASKS = this._dMSREPLICATIONTASKS?.internalValue;
    }
    if (this._dOCDB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dOCDB = this._dOCDB?.internalValue;
    }
    if (this._dYNAMODB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dYNAMODB = this._dYNAMODB?.internalValue;
    }
    if (this._eBS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eBS = this._eBS?.internalValue;
    }
    if (this._eC2?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eC2 = this._eC2?.internalValue;
    }
    if (this._eCS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eCS = this._eCS?.internalValue;
    }
    if (this._eFS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eFS = this._eFS?.internalValue;
    }
    if (this._eLASTICACHE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLASTICACHE = this._eLASTICACHE?.internalValue;
    }
    if (this._eLASTICBEANSTALK?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLASTICBEANSTALK = this._eLASTICBEANSTALK?.internalValue;
    }
    if (this._eLASTICSEARCH?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLASTICSEARCH = this._eLASTICSEARCH?.internalValue;
    }
    if (this._eLASTICTRANSCODER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLASTICTRANSCODER = this._eLASTICTRANSCODER?.internalValue;
    }
    if (this._eLB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eLB = this._eLB?.internalValue;
    }
    if (this._eMR?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eMR = this._eMR?.internalValue;
    }
    if (this._eVENTBRIdGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eVENTBRIdGE = this._eVENTBRIdGE?.internalValue;
    }
    if (this._eVENTHUB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eVENTHUB = this._eVENTHUB?.internalValue;
    }
    if (this._eXPRESSROUTECIRCUiT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.eXPRESSROUTECIRCUiT = this._eXPRESSROUTECIRCUiT?.internalValue;
    }
    if (this._fILESTORAGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fILESTORAGE = this._fILESTORAGE?.internalValue;
    }
    if (this._fIREHOSE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fIREHOSE = this._fIREHOSE?.internalValue;
    }
    if (this._fIREWALL?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fIREWALL = this._fIREWALL?.internalValue;
    }
    if (this._fRONTDOORS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fRONTDOORS = this._fRONTDOORS?.internalValue;
    }
    if (this._fSX?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fSX = this._fSX?.internalValue;
    }
    if (this._gLUE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gLUE = this._gLUE?.internalValue;
    }
    if (this._kEYVAULT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kEYVAULT = this._kEYVAULT?.internalValue;
    }
    if (this._kINESIS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kINESIS = this._kINESIS?.internalValue;
    }
    if (this._kINESISVIdEO?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kINESISVIdEO = this._kINESISVIdEO?.internalValue;
    }
    if (this._lAMBDA?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lAMBDA = this._lAMBDA?.internalValue;
    }
    if (this._lOADBALANCERS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lOADBALANCERS = this._lOADBALANCERS?.internalValue;
    }
    if (this._lOGANALYTICSWORKSPACES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lOGANALYTICSWORKSPACES = this._lOGANALYTICSWORKSPACES?.internalValue;
    }
    if (this._lOGICAPPS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lOGICAPPS = this._lOGICAPPS?.internalValue;
    }
    if (this._mEDIACONNECT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIACONNECT = this._mEDIACONNECT?.internalValue;
    }
    if (this._mEDIACONVERT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIACONVERT = this._mEDIACONVERT?.internalValue;
    }
    if (this._mEDIAPACKAGELIVE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIAPACKAGELIVE = this._mEDIAPACKAGELIVE?.internalValue;
    }
    if (this._mEDIAPACKAGEVOD?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIAPACKAGEVOD = this._mEDIAPACKAGEVOD?.internalValue;
    }
    if (this._mEDIASTORE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIASTORE = this._mEDIASTORE?.internalValue;
    }
    if (this._mEDIATAILOR?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mEDIATAILOR = this._mEDIATAILOR?.internalValue;
    }
    if (this._mQ?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mQ = this._mQ?.internalValue;
    }
    if (this._mSKBROKER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mSKBROKER = this._mSKBROKER?.internalValue;
    }
    if (this._mSKCLUSTER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mSKCLUSTER = this._mSKCLUSTER?.internalValue;
    }
    if (this._mYSql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mYSql = this._mYSql?.internalValue;
    }
    if (this._nATGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nATGATEWAY = this._nATGATEWAY?.internalValue;
    }
    if (this._nETWORKELB?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nETWORKELB = this._nETWORKELB?.internalValue;
    }
    if (this._nETWORKINTERFACE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nETWORKINTERFACE = this._nETWORKINTERFACE?.internalValue;
    }
    if (this._oPSWORKS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oPSWORKS = this._oPSWORKS?.internalValue;
    }
    if (this._pOSTGRESql?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pOSTGRESql = this._pOSTGRESql?.internalValue;
    }
    if (this._pUBLICIp?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pUBLICIp = this._pUBLICIp?.internalValue;
    }
    if (this._qUEUESTORAGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.qUEUESTORAGE = this._qUEUESTORAGE?.internalValue;
    }
    if (this._rDS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rDS = this._rDS?.internalValue;
    }
    if (this._rECOVERYPROTECTEDITEM?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rECOVERYPROTECTEDITEM = this._rECOVERYPROTECTEDITEM?.internalValue;
    }
    if (this._rECOVERYSERVICES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rECOVERYSERVICES = this._rECOVERYSERVICES?.internalValue;
    }
    if (this._rEDISCACHE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rEDISCACHE = this._rEDISCACHE?.internalValue;
    }
    if (this._rEDSHIFT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rEDSHIFT = this._rEDSHIFT?.internalValue;
    }
    if (this._rOUTE53?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rOUTE53 = this._rOUTE53?.internalValue;
    }
    if (this._rOUTE53RESOLVER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rOUTE53RESOLVER = this._rOUTE53RESOLVER?.internalValue;
    }
    if (this._s3?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.s3 = this._s3?.internalValue;
    }
    if (this._sAGEMAKER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sAGEMAKER = this._sAGEMAKER?.internalValue;
    }
    if (this._sERVICEBUS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sERVICEBUS = this._sERVICEBUS?.internalValue;
    }
    if (this._sES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sES = this._sES?.internalValue;
    }
    if (this._sNS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sNS = this._sNS?.internalValue;
    }
    if (this._sQS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sQS = this._sQS?.internalValue;
    }
    if (this._sTEPFUNCTIONS?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sTEPFUNCTIONS = this._sTEPFUNCTIONS?.internalValue;
    }
    if (this._sTORAGEACCOUNT?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sTORAGEACCOUNT = this._sTORAGEACCOUNT?.internalValue;
    }
    if (this._sWFACTIVITY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sWFACTIVITY = this._sWFACTIVITY?.internalValue;
    }
    if (this._sWFWORKFLOW?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sWFWORKFLOW = this._sWFWORKFLOW?.internalValue;
    }
    if (this._sYNAPSEWORKSPACES?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sYNAPSEWORKSPACES = this._sYNAPSEWORKSPACES?.internalValue;
    }
    if (this._sqlDATABASE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlDATABASE = this._sqlDATABASE?.internalValue;
    }
    if (this._sqlELASTICPOOL?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlELASTICPOOL = this._sqlELASTICPOOL?.internalValue;
    }
    if (this._sqlMANAGEDINSTANCE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sqlMANAGEDINSTANCE = this._sqlMANAGEDINSTANCE?.internalValue;
    }
    if (this._tABLESTORAGE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tABLESTORAGE = this._tABLESTORAGE?.internalValue;
    }
    if (this._tRAFFICMANAGER?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tRAFFICMANAGER = this._tRAFFICMANAGER?.internalValue;
    }
    if (this._tRANSITGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tRANSITGATEWAY = this._tRANSITGATEWAY?.internalValue;
    }
    if (this._vIRTUALDESKTOP?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALDESKTOP = this._vIRTUALDESKTOP?.internalValue;
    }
    if (this._vIRTUALMACHINE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALMACHINE = this._vIRTUALMACHINE?.internalValue;
    }
    if (this._vIRTUALMACHINESCALESET?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALMACHINESCALESET = this._vIRTUALMACHINESCALESET?.internalValue;
    }
    if (this._vIRTUALMACHINESCALESETVm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALMACHINESCALESETVm = this._vIRTUALMACHINESCALESETVm?.internalValue;
    }
    if (this._vIRTUALNETWORKGATEWAY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vIRTUALNETWORKGATEWAY = this._vIRTUALNETWORKGATEWAY?.internalValue;
    }
    if (this._vPN?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vPN = this._vPN?.internalValue;
    }
    if (this._wORKSPACE?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wORKSPACE = this._wORKSPACE?.internalValue;
    }
    if (this._wORKSPACEDIRECTORY?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.wORKSPACEDIRECTORY = this._wORKSPACEDIRECTORY?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtraServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._aPPLICATIONELB.internalValue = undefined;
      this._aPPLICATIONGATEWAY.internalValue = undefined;
      this._aPPLICATIONINSIGHTS.internalValue = undefined;
      this._aPPSERVICE.internalValue = undefined;
      this._aPPSERVICEPLAN.internalValue = undefined;
      this._aPPSTREAM.internalValue = undefined;
      this._aTHENA.internalValue = undefined;
      this._aUTOMATIONACCOUNT.internalValue = undefined;
      this._aUTOSCALING.internalValue = undefined;
      this._apiGATEWAY.internalValue = undefined;
      this._apiMANAGEMENT.internalValue = undefined;
      this._bACKUPPROTECTEDITEMS.internalValue = undefined;
      this._bLOBSTORAGE.internalValue = undefined;
      this._cLOUDFRONT.internalValue = undefined;
      this._cLOUDSEARCH.internalValue = undefined;
      this._cODEBUiLD.internalValue = undefined;
      this._cOGNITIVESEARCH.internalValue = undefined;
      this._cOGNITIVESERVICES.internalValue = undefined;
      this._cOGNITO.internalValue = undefined;
      this._cOSMOSDB.internalValue = undefined;
      this._dATAFACTORY.internalValue = undefined;
      this._dIRECTCONNECT.internalValue = undefined;
      this._dMSREPLICATION.internalValue = undefined;
      this._dMSREPLICATIONTASKS.internalValue = undefined;
      this._dOCDB.internalValue = undefined;
      this._dYNAMODB.internalValue = undefined;
      this._eBS.internalValue = undefined;
      this._eC2.internalValue = undefined;
      this._eCS.internalValue = undefined;
      this._eFS.internalValue = undefined;
      this._eLASTICACHE.internalValue = undefined;
      this._eLASTICBEANSTALK.internalValue = undefined;
      this._eLASTICSEARCH.internalValue = undefined;
      this._eLASTICTRANSCODER.internalValue = undefined;
      this._eLB.internalValue = undefined;
      this._eMR.internalValue = undefined;
      this._eVENTBRIdGE.internalValue = undefined;
      this._eVENTHUB.internalValue = undefined;
      this._eXPRESSROUTECIRCUiT.internalValue = undefined;
      this._fILESTORAGE.internalValue = undefined;
      this._fIREHOSE.internalValue = undefined;
      this._fIREWALL.internalValue = undefined;
      this._fRONTDOORS.internalValue = undefined;
      this._fSX.internalValue = undefined;
      this._gLUE.internalValue = undefined;
      this._kEYVAULT.internalValue = undefined;
      this._kINESIS.internalValue = undefined;
      this._kINESISVIdEO.internalValue = undefined;
      this._lAMBDA.internalValue = undefined;
      this._lOADBALANCERS.internalValue = undefined;
      this._lOGANALYTICSWORKSPACES.internalValue = undefined;
      this._lOGICAPPS.internalValue = undefined;
      this._mEDIACONNECT.internalValue = undefined;
      this._mEDIACONVERT.internalValue = undefined;
      this._mEDIAPACKAGELIVE.internalValue = undefined;
      this._mEDIAPACKAGEVOD.internalValue = undefined;
      this._mEDIASTORE.internalValue = undefined;
      this._mEDIATAILOR.internalValue = undefined;
      this._mQ.internalValue = undefined;
      this._mSKBROKER.internalValue = undefined;
      this._mSKCLUSTER.internalValue = undefined;
      this._mYSql.internalValue = undefined;
      this._nATGATEWAY.internalValue = undefined;
      this._nETWORKELB.internalValue = undefined;
      this._nETWORKINTERFACE.internalValue = undefined;
      this._oPSWORKS.internalValue = undefined;
      this._pOSTGRESql.internalValue = undefined;
      this._pUBLICIp.internalValue = undefined;
      this._qUEUESTORAGE.internalValue = undefined;
      this._rDS.internalValue = undefined;
      this._rECOVERYPROTECTEDITEM.internalValue = undefined;
      this._rECOVERYSERVICES.internalValue = undefined;
      this._rEDISCACHE.internalValue = undefined;
      this._rEDSHIFT.internalValue = undefined;
      this._rOUTE53.internalValue = undefined;
      this._rOUTE53RESOLVER.internalValue = undefined;
      this._s3.internalValue = undefined;
      this._sAGEMAKER.internalValue = undefined;
      this._sERVICEBUS.internalValue = undefined;
      this._sES.internalValue = undefined;
      this._sNS.internalValue = undefined;
      this._sQS.internalValue = undefined;
      this._sTEPFUNCTIONS.internalValue = undefined;
      this._sTORAGEACCOUNT.internalValue = undefined;
      this._sWFACTIVITY.internalValue = undefined;
      this._sWFWORKFLOW.internalValue = undefined;
      this._sYNAPSEWORKSPACES.internalValue = undefined;
      this._sqlDATABASE.internalValue = undefined;
      this._sqlELASTICPOOL.internalValue = undefined;
      this._sqlMANAGEDINSTANCE.internalValue = undefined;
      this._tABLESTORAGE.internalValue = undefined;
      this._tRAFFICMANAGER.internalValue = undefined;
      this._tRANSITGATEWAY.internalValue = undefined;
      this._vIRTUALDESKTOP.internalValue = undefined;
      this._vIRTUALMACHINE.internalValue = undefined;
      this._vIRTUALMACHINESCALESET.internalValue = undefined;
      this._vIRTUALMACHINESCALESETVm.internalValue = undefined;
      this._vIRTUALNETWORKGATEWAY.internalValue = undefined;
      this._vPN.internalValue = undefined;
      this._wORKSPACE.internalValue = undefined;
      this._wORKSPACEDIRECTORY.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._aPPLICATIONELB.internalValue = value.aPPLICATIONELB;
      this._aPPLICATIONGATEWAY.internalValue = value.aPPLICATIONGATEWAY;
      this._aPPLICATIONINSIGHTS.internalValue = value.aPPLICATIONINSIGHTS;
      this._aPPSERVICE.internalValue = value.aPPSERVICE;
      this._aPPSERVICEPLAN.internalValue = value.aPPSERVICEPLAN;
      this._aPPSTREAM.internalValue = value.aPPSTREAM;
      this._aTHENA.internalValue = value.aTHENA;
      this._aUTOMATIONACCOUNT.internalValue = value.aUTOMATIONACCOUNT;
      this._aUTOSCALING.internalValue = value.aUTOSCALING;
      this._apiGATEWAY.internalValue = value.apiGATEWAY;
      this._apiMANAGEMENT.internalValue = value.apiMANAGEMENT;
      this._bACKUPPROTECTEDITEMS.internalValue = value.bACKUPPROTECTEDITEMS;
      this._bLOBSTORAGE.internalValue = value.bLOBSTORAGE;
      this._cLOUDFRONT.internalValue = value.cLOUDFRONT;
      this._cLOUDSEARCH.internalValue = value.cLOUDSEARCH;
      this._cODEBUiLD.internalValue = value.cODEBUiLD;
      this._cOGNITIVESEARCH.internalValue = value.cOGNITIVESEARCH;
      this._cOGNITIVESERVICES.internalValue = value.cOGNITIVESERVICES;
      this._cOGNITO.internalValue = value.cOGNITO;
      this._cOSMOSDB.internalValue = value.cOSMOSDB;
      this._dATAFACTORY.internalValue = value.dATAFACTORY;
      this._dIRECTCONNECT.internalValue = value.dIRECTCONNECT;
      this._dMSREPLICATION.internalValue = value.dMSREPLICATION;
      this._dMSREPLICATIONTASKS.internalValue = value.dMSREPLICATIONTASKS;
      this._dOCDB.internalValue = value.dOCDB;
      this._dYNAMODB.internalValue = value.dYNAMODB;
      this._eBS.internalValue = value.eBS;
      this._eC2.internalValue = value.eC2;
      this._eCS.internalValue = value.eCS;
      this._eFS.internalValue = value.eFS;
      this._eLASTICACHE.internalValue = value.eLASTICACHE;
      this._eLASTICBEANSTALK.internalValue = value.eLASTICBEANSTALK;
      this._eLASTICSEARCH.internalValue = value.eLASTICSEARCH;
      this._eLASTICTRANSCODER.internalValue = value.eLASTICTRANSCODER;
      this._eLB.internalValue = value.eLB;
      this._eMR.internalValue = value.eMR;
      this._eVENTBRIdGE.internalValue = value.eVENTBRIdGE;
      this._eVENTHUB.internalValue = value.eVENTHUB;
      this._eXPRESSROUTECIRCUiT.internalValue = value.eXPRESSROUTECIRCUiT;
      this._fILESTORAGE.internalValue = value.fILESTORAGE;
      this._fIREHOSE.internalValue = value.fIREHOSE;
      this._fIREWALL.internalValue = value.fIREWALL;
      this._fRONTDOORS.internalValue = value.fRONTDOORS;
      this._fSX.internalValue = value.fSX;
      this._gLUE.internalValue = value.gLUE;
      this._kEYVAULT.internalValue = value.kEYVAULT;
      this._kINESIS.internalValue = value.kINESIS;
      this._kINESISVIdEO.internalValue = value.kINESISVIdEO;
      this._lAMBDA.internalValue = value.lAMBDA;
      this._lOADBALANCERS.internalValue = value.lOADBALANCERS;
      this._lOGANALYTICSWORKSPACES.internalValue = value.lOGANALYTICSWORKSPACES;
      this._lOGICAPPS.internalValue = value.lOGICAPPS;
      this._mEDIACONNECT.internalValue = value.mEDIACONNECT;
      this._mEDIACONVERT.internalValue = value.mEDIACONVERT;
      this._mEDIAPACKAGELIVE.internalValue = value.mEDIAPACKAGELIVE;
      this._mEDIAPACKAGEVOD.internalValue = value.mEDIAPACKAGEVOD;
      this._mEDIASTORE.internalValue = value.mEDIASTORE;
      this._mEDIATAILOR.internalValue = value.mEDIATAILOR;
      this._mQ.internalValue = value.mQ;
      this._mSKBROKER.internalValue = value.mSKBROKER;
      this._mSKCLUSTER.internalValue = value.mSKCLUSTER;
      this._mYSql.internalValue = value.mYSql;
      this._nATGATEWAY.internalValue = value.nATGATEWAY;
      this._nETWORKELB.internalValue = value.nETWORKELB;
      this._nETWORKINTERFACE.internalValue = value.nETWORKINTERFACE;
      this._oPSWORKS.internalValue = value.oPSWORKS;
      this._pOSTGRESql.internalValue = value.pOSTGRESql;
      this._pUBLICIp.internalValue = value.pUBLICIp;
      this._qUEUESTORAGE.internalValue = value.qUEUESTORAGE;
      this._rDS.internalValue = value.rDS;
      this._rECOVERYPROTECTEDITEM.internalValue = value.rECOVERYPROTECTEDITEM;
      this._rECOVERYSERVICES.internalValue = value.rECOVERYSERVICES;
      this._rEDISCACHE.internalValue = value.rEDISCACHE;
      this._rEDSHIFT.internalValue = value.rEDSHIFT;
      this._rOUTE53.internalValue = value.rOUTE53;
      this._rOUTE53RESOLVER.internalValue = value.rOUTE53RESOLVER;
      this._s3.internalValue = value.s3;
      this._sAGEMAKER.internalValue = value.sAGEMAKER;
      this._sERVICEBUS.internalValue = value.sERVICEBUS;
      this._sES.internalValue = value.sES;
      this._sNS.internalValue = value.sNS;
      this._sQS.internalValue = value.sQS;
      this._sTEPFUNCTIONS.internalValue = value.sTEPFUNCTIONS;
      this._sTORAGEACCOUNT.internalValue = value.sTORAGEACCOUNT;
      this._sWFACTIVITY.internalValue = value.sWFACTIVITY;
      this._sWFWORKFLOW.internalValue = value.sWFWORKFLOW;
      this._sYNAPSEWORKSPACES.internalValue = value.sYNAPSEWORKSPACES;
      this._sqlDATABASE.internalValue = value.sqlDATABASE;
      this._sqlELASTICPOOL.internalValue = value.sqlELASTICPOOL;
      this._sqlMANAGEDINSTANCE.internalValue = value.sqlMANAGEDINSTANCE;
      this._tABLESTORAGE.internalValue = value.tABLESTORAGE;
      this._tRAFFICMANAGER.internalValue = value.tRAFFICMANAGER;
      this._tRANSITGATEWAY.internalValue = value.tRANSITGATEWAY;
      this._vIRTUALDESKTOP.internalValue = value.vIRTUALDESKTOP;
      this._vIRTUALMACHINE.internalValue = value.vIRTUALMACHINE;
      this._vIRTUALMACHINESCALESET.internalValue = value.vIRTUALMACHINESCALESET;
      this._vIRTUALMACHINESCALESETVm.internalValue = value.vIRTUALMACHINESCALESETVm;
      this._vIRTUALNETWORKGATEWAY.internalValue = value.vIRTUALNETWORKGATEWAY;
      this._vPN.internalValue = value.vPN;
      this._wORKSPACE.internalValue = value.wORKSPACE;
      this._wORKSPACEDIRECTORY.internalValue = value.wORKSPACEDIRECTORY;
    }
  }

  // a_p_p_l_i_c_a_t_i_o_n_e_l_b - computed: false, optional: true, required: false
  private _aPPLICATIONELB = new DeviceGroupExtraServicesAPPLICATIONELBList(this, "a_p_p_l_i_c_a_t_i_o_n_e_l_b", false);
  public get aPPLICATIONELB() {
    return this._aPPLICATIONELB;
  }
  public putAPPLICATIONELB(value: DeviceGroupExtraServicesAPPLICATIONELB[] | cdktf.IResolvable) {
    this._aPPLICATIONELB.internalValue = value;
  }
  public resetAPPLICATIONELB() {
    this._aPPLICATIONELB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPLICATIONELBInput() {
    return this._aPPLICATIONELB.internalValue;
  }

  // a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _aPPLICATIONGATEWAY = new DeviceGroupExtraServicesAPPLICATIONGATEWAYList(this, "a_p_p_l_i_c_a_t_i_o_n_g_a_t_e_w_a_y", false);
  public get aPPLICATIONGATEWAY() {
    return this._aPPLICATIONGATEWAY;
  }
  public putAPPLICATIONGATEWAY(value: DeviceGroupExtraServicesAPPLICATIONGATEWAY[] | cdktf.IResolvable) {
    this._aPPLICATIONGATEWAY.internalValue = value;
  }
  public resetAPPLICATIONGATEWAY() {
    this._aPPLICATIONGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPLICATIONGATEWAYInput() {
    return this._aPPLICATIONGATEWAY.internalValue;
  }

  // a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s - computed: false, optional: true, required: false
  private _aPPLICATIONINSIGHTS = new DeviceGroupExtraServicesAPPLICATIONINSIGHTSList(this, "a_p_p_l_i_c_a_t_i_o_n_i_n_s_i_g_h_t_s", false);
  public get aPPLICATIONINSIGHTS() {
    return this._aPPLICATIONINSIGHTS;
  }
  public putAPPLICATIONINSIGHTS(value: DeviceGroupExtraServicesAPPLICATIONINSIGHTS[] | cdktf.IResolvable) {
    this._aPPLICATIONINSIGHTS.internalValue = value;
  }
  public resetAPPLICATIONINSIGHTS() {
    this._aPPLICATIONINSIGHTS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPLICATIONINSIGHTSInput() {
    return this._aPPLICATIONINSIGHTS.internalValue;
  }

  // a_p_p_s_e_r_v_i_c_e - computed: false, optional: true, required: false
  private _aPPSERVICE = new DeviceGroupExtraServicesAPPSERVICEList(this, "a_p_p_s_e_r_v_i_c_e", false);
  public get aPPSERVICE() {
    return this._aPPSERVICE;
  }
  public putAPPSERVICE(value: DeviceGroupExtraServicesAPPSERVICE[] | cdktf.IResolvable) {
    this._aPPSERVICE.internalValue = value;
  }
  public resetAPPSERVICE() {
    this._aPPSERVICE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPSERVICEInput() {
    return this._aPPSERVICE.internalValue;
  }

  // a_p_p_s_e_r_v_i_c_e_p_l_a_n - computed: false, optional: true, required: false
  private _aPPSERVICEPLAN = new DeviceGroupExtraServicesAPPSERVICEPLANList(this, "a_p_p_s_e_r_v_i_c_e_p_l_a_n", false);
  public get aPPSERVICEPLAN() {
    return this._aPPSERVICEPLAN;
  }
  public putAPPSERVICEPLAN(value: DeviceGroupExtraServicesAPPSERVICEPLAN[] | cdktf.IResolvable) {
    this._aPPSERVICEPLAN.internalValue = value;
  }
  public resetAPPSERVICEPLAN() {
    this._aPPSERVICEPLAN.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPSERVICEPLANInput() {
    return this._aPPSERVICEPLAN.internalValue;
  }

  // a_p_p_s_t_r_e_a_m - computed: false, optional: true, required: false
  private _aPPSTREAM = new DeviceGroupExtraServicesAPPSTREAMList(this, "a_p_p_s_t_r_e_a_m", false);
  public get aPPSTREAM() {
    return this._aPPSTREAM;
  }
  public putAPPSTREAM(value: DeviceGroupExtraServicesAPPSTREAM[] | cdktf.IResolvable) {
    this._aPPSTREAM.internalValue = value;
  }
  public resetAPPSTREAM() {
    this._aPPSTREAM.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aPPSTREAMInput() {
    return this._aPPSTREAM.internalValue;
  }

  // a_t_h_e_n_a - computed: false, optional: true, required: false
  private _aTHENA = new DeviceGroupExtraServicesATHENAList(this, "a_t_h_e_n_a", false);
  public get aTHENA() {
    return this._aTHENA;
  }
  public putATHENA(value: DeviceGroupExtraServicesATHENA[] | cdktf.IResolvable) {
    this._aTHENA.internalValue = value;
  }
  public resetATHENA() {
    this._aTHENA.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aTHENAInput() {
    return this._aTHENA.internalValue;
  }

  // a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t - computed: false, optional: true, required: false
  private _aUTOMATIONACCOUNT = new DeviceGroupExtraServicesAUTOMATIONACCOUNTList(this, "a_u_t_o_m_a_t_i_o_n_a_c_c_o_u_n_t", false);
  public get aUTOMATIONACCOUNT() {
    return this._aUTOMATIONACCOUNT;
  }
  public putAUTOMATIONACCOUNT(value: DeviceGroupExtraServicesAUTOMATIONACCOUNT[] | cdktf.IResolvable) {
    this._aUTOMATIONACCOUNT.internalValue = value;
  }
  public resetAUTOMATIONACCOUNT() {
    this._aUTOMATIONACCOUNT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aUTOMATIONACCOUNTInput() {
    return this._aUTOMATIONACCOUNT.internalValue;
  }

  // a_u_t_o_s_c_a_l_i_n_g - computed: false, optional: true, required: false
  private _aUTOSCALING = new DeviceGroupExtraServicesAUTOSCALINGList(this, "a_u_t_o_s_c_a_l_i_n_g", false);
  public get aUTOSCALING() {
    return this._aUTOSCALING;
  }
  public putAUTOSCALING(value: DeviceGroupExtraServicesAUTOSCALING[] | cdktf.IResolvable) {
    this._aUTOSCALING.internalValue = value;
  }
  public resetAUTOSCALING() {
    this._aUTOSCALING.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aUTOSCALINGInput() {
    return this._aUTOSCALING.internalValue;
  }

  // api_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _apiGATEWAY = new DeviceGroupExtraServicesApiGATEWAYList(this, "api_g_a_t_e_w_a_y", false);
  public get apiGATEWAY() {
    return this._apiGATEWAY;
  }
  public putApiGATEWAY(value: DeviceGroupExtraServicesApiGATEWAY[] | cdktf.IResolvable) {
    this._apiGATEWAY.internalValue = value;
  }
  public resetApiGATEWAY() {
    this._apiGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiGATEWAYInput() {
    return this._apiGATEWAY.internalValue;
  }

  // api_m_a_n_a_g_e_m_e_n_t - computed: false, optional: true, required: false
  private _apiMANAGEMENT = new DeviceGroupExtraServicesApiMANAGEMENTList(this, "api_m_a_n_a_g_e_m_e_n_t", false);
  public get apiMANAGEMENT() {
    return this._apiMANAGEMENT;
  }
  public putApiMANAGEMENT(value: DeviceGroupExtraServicesApiMANAGEMENT[] | cdktf.IResolvable) {
    this._apiMANAGEMENT.internalValue = value;
  }
  public resetApiMANAGEMENT() {
    this._apiMANAGEMENT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiMANAGEMENTInput() {
    return this._apiMANAGEMENT.internalValue;
  }

  // b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s - computed: false, optional: true, required: false
  private _bACKUPPROTECTEDITEMS = new DeviceGroupExtraServicesBACKUPPROTECTEDITEMSList(this, "b_a_c_k_u_p_p_r_o_t_e_c_t_e_d_i_t_e_m_s", false);
  public get bACKUPPROTECTEDITEMS() {
    return this._bACKUPPROTECTEDITEMS;
  }
  public putBACKUPPROTECTEDITEMS(value: DeviceGroupExtraServicesBACKUPPROTECTEDITEMS[] | cdktf.IResolvable) {
    this._bACKUPPROTECTEDITEMS.internalValue = value;
  }
  public resetBACKUPPROTECTEDITEMS() {
    this._bACKUPPROTECTEDITEMS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bACKUPPROTECTEDITEMSInput() {
    return this._bACKUPPROTECTEDITEMS.internalValue;
  }

  // b_l_o_b_s_t_o_r_a_g_e - computed: false, optional: true, required: false
  private _bLOBSTORAGE = new DeviceGroupExtraServicesBLOBSTORAGEList(this, "b_l_o_b_s_t_o_r_a_g_e", false);
  public get bLOBSTORAGE() {
    return this._bLOBSTORAGE;
  }
  public putBLOBSTORAGE(value: DeviceGroupExtraServicesBLOBSTORAGE[] | cdktf.IResolvable) {
    this._bLOBSTORAGE.internalValue = value;
  }
  public resetBLOBSTORAGE() {
    this._bLOBSTORAGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bLOBSTORAGEInput() {
    return this._bLOBSTORAGE.internalValue;
  }

  // c_l_o_u_d_f_r_o_n_t - computed: false, optional: true, required: false
  private _cLOUDFRONT = new DeviceGroupExtraServicesCLOUDFRONTList(this, "c_l_o_u_d_f_r_o_n_t", false);
  public get cLOUDFRONT() {
    return this._cLOUDFRONT;
  }
  public putCLOUDFRONT(value: DeviceGroupExtraServicesCLOUDFRONT[] | cdktf.IResolvable) {
    this._cLOUDFRONT.internalValue = value;
  }
  public resetCLOUDFRONT() {
    this._cLOUDFRONT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cLOUDFRONTInput() {
    return this._cLOUDFRONT.internalValue;
  }

  // c_l_o_u_d_s_e_a_r_c_h - computed: false, optional: true, required: false
  private _cLOUDSEARCH = new DeviceGroupExtraServicesCLOUDSEARCHList(this, "c_l_o_u_d_s_e_a_r_c_h", false);
  public get cLOUDSEARCH() {
    return this._cLOUDSEARCH;
  }
  public putCLOUDSEARCH(value: DeviceGroupExtraServicesCLOUDSEARCH[] | cdktf.IResolvable) {
    this._cLOUDSEARCH.internalValue = value;
  }
  public resetCLOUDSEARCH() {
    this._cLOUDSEARCH.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cLOUDSEARCHInput() {
    return this._cLOUDSEARCH.internalValue;
  }

  // c_o_d_e_b_ui_l_d - computed: false, optional: true, required: false
  private _cODEBUiLD = new DeviceGroupExtraServicesCODEBUiLDList(this, "c_o_d_e_b_ui_l_d", false);
  public get cODEBUiLD() {
    return this._cODEBUiLD;
  }
  public putCODEBUiLD(value: DeviceGroupExtraServicesCODEBUiLD[] | cdktf.IResolvable) {
    this._cODEBUiLD.internalValue = value;
  }
  public resetCODEBUiLD() {
    this._cODEBUiLD.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cODEBUiLDInput() {
    return this._cODEBUiLD.internalValue;
  }

  // c_o_g_n_i_t_i_v_e_s_e_a_r_c_h - computed: false, optional: true, required: false
  private _cOGNITIVESEARCH = new DeviceGroupExtraServicesCOGNITIVESEARCHList(this, "c_o_g_n_i_t_i_v_e_s_e_a_r_c_h", false);
  public get cOGNITIVESEARCH() {
    return this._cOGNITIVESEARCH;
  }
  public putCOGNITIVESEARCH(value: DeviceGroupExtraServicesCOGNITIVESEARCH[] | cdktf.IResolvable) {
    this._cOGNITIVESEARCH.internalValue = value;
  }
  public resetCOGNITIVESEARCH() {
    this._cOGNITIVESEARCH.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cOGNITIVESEARCHInput() {
    return this._cOGNITIVESEARCH.internalValue;
  }

  // c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s - computed: false, optional: true, required: false
  private _cOGNITIVESERVICES = new DeviceGroupExtraServicesCOGNITIVESERVICESList(this, "c_o_g_n_i_t_i_v_e_s_e_r_v_i_c_e_s", false);
  public get cOGNITIVESERVICES() {
    return this._cOGNITIVESERVICES;
  }
  public putCOGNITIVESERVICES(value: DeviceGroupExtraServicesCOGNITIVESERVICES[] | cdktf.IResolvable) {
    this._cOGNITIVESERVICES.internalValue = value;
  }
  public resetCOGNITIVESERVICES() {
    this._cOGNITIVESERVICES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cOGNITIVESERVICESInput() {
    return this._cOGNITIVESERVICES.internalValue;
  }

  // c_o_g_n_i_t_o - computed: false, optional: true, required: false
  private _cOGNITO = new DeviceGroupExtraServicesCOGNITOList(this, "c_o_g_n_i_t_o", false);
  public get cOGNITO() {
    return this._cOGNITO;
  }
  public putCOGNITO(value: DeviceGroupExtraServicesCOGNITO[] | cdktf.IResolvable) {
    this._cOGNITO.internalValue = value;
  }
  public resetCOGNITO() {
    this._cOGNITO.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cOGNITOInput() {
    return this._cOGNITO.internalValue;
  }

  // c_o_s_m_o_s_d_b - computed: false, optional: true, required: false
  private _cOSMOSDB = new DeviceGroupExtraServicesCOSMOSDBList(this, "c_o_s_m_o_s_d_b", false);
  public get cOSMOSDB() {
    return this._cOSMOSDB;
  }
  public putCOSMOSDB(value: DeviceGroupExtraServicesCOSMOSDB[] | cdktf.IResolvable) {
    this._cOSMOSDB.internalValue = value;
  }
  public resetCOSMOSDB() {
    this._cOSMOSDB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cOSMOSDBInput() {
    return this._cOSMOSDB.internalValue;
  }

  // d_a_t_a_f_a_c_t_o_r_y - computed: false, optional: true, required: false
  private _dATAFACTORY = new DeviceGroupExtraServicesDATAFACTORYList(this, "d_a_t_a_f_a_c_t_o_r_y", false);
  public get dATAFACTORY() {
    return this._dATAFACTORY;
  }
  public putDATAFACTORY(value: DeviceGroupExtraServicesDATAFACTORY[] | cdktf.IResolvable) {
    this._dATAFACTORY.internalValue = value;
  }
  public resetDATAFACTORY() {
    this._dATAFACTORY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dATAFACTORYInput() {
    return this._dATAFACTORY.internalValue;
  }

  // d_i_r_e_c_t_c_o_n_n_e_c_t - computed: false, optional: true, required: false
  private _dIRECTCONNECT = new DeviceGroupExtraServicesDIRECTCONNECTList(this, "d_i_r_e_c_t_c_o_n_n_e_c_t", false);
  public get dIRECTCONNECT() {
    return this._dIRECTCONNECT;
  }
  public putDIRECTCONNECT(value: DeviceGroupExtraServicesDIRECTCONNECT[] | cdktf.IResolvable) {
    this._dIRECTCONNECT.internalValue = value;
  }
  public resetDIRECTCONNECT() {
    this._dIRECTCONNECT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dIRECTCONNECTInput() {
    return this._dIRECTCONNECT.internalValue;
  }

  // d_m_s_r_e_p_l_i_c_a_t_i_o_n - computed: false, optional: true, required: false
  private _dMSREPLICATION = new DeviceGroupExtraServicesDMSREPLICATIONList(this, "d_m_s_r_e_p_l_i_c_a_t_i_o_n", false);
  public get dMSREPLICATION() {
    return this._dMSREPLICATION;
  }
  public putDMSREPLICATION(value: DeviceGroupExtraServicesDMSREPLICATION[] | cdktf.IResolvable) {
    this._dMSREPLICATION.internalValue = value;
  }
  public resetDMSREPLICATION() {
    this._dMSREPLICATION.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dMSREPLICATIONInput() {
    return this._dMSREPLICATION.internalValue;
  }

  // d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s - computed: false, optional: true, required: false
  private _dMSREPLICATIONTASKS = new DeviceGroupExtraServicesDMSREPLICATIONTASKSList(this, "d_m_s_r_e_p_l_i_c_a_t_i_o_n_t_a_s_k_s", false);
  public get dMSREPLICATIONTASKS() {
    return this._dMSREPLICATIONTASKS;
  }
  public putDMSREPLICATIONTASKS(value: DeviceGroupExtraServicesDMSREPLICATIONTASKS[] | cdktf.IResolvable) {
    this._dMSREPLICATIONTASKS.internalValue = value;
  }
  public resetDMSREPLICATIONTASKS() {
    this._dMSREPLICATIONTASKS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dMSREPLICATIONTASKSInput() {
    return this._dMSREPLICATIONTASKS.internalValue;
  }

  // d_o_c_d_b - computed: false, optional: true, required: false
  private _dOCDB = new DeviceGroupExtraServicesDOCDBList(this, "d_o_c_d_b", false);
  public get dOCDB() {
    return this._dOCDB;
  }
  public putDOCDB(value: DeviceGroupExtraServicesDOCDB[] | cdktf.IResolvable) {
    this._dOCDB.internalValue = value;
  }
  public resetDOCDB() {
    this._dOCDB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dOCDBInput() {
    return this._dOCDB.internalValue;
  }

  // d_y_n_a_m_o_d_b - computed: false, optional: true, required: false
  private _dYNAMODB = new DeviceGroupExtraServicesDYNAMODBList(this, "d_y_n_a_m_o_d_b", false);
  public get dYNAMODB() {
    return this._dYNAMODB;
  }
  public putDYNAMODB(value: DeviceGroupExtraServicesDYNAMODB[] | cdktf.IResolvable) {
    this._dYNAMODB.internalValue = value;
  }
  public resetDYNAMODB() {
    this._dYNAMODB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dYNAMODBInput() {
    return this._dYNAMODB.internalValue;
  }

  // e_b_s - computed: false, optional: true, required: false
  private _eBS = new DeviceGroupExtraServicesEBSList(this, "e_b_s", false);
  public get eBS() {
    return this._eBS;
  }
  public putEBS(value: DeviceGroupExtraServicesEBS[] | cdktf.IResolvable) {
    this._eBS.internalValue = value;
  }
  public resetEBS() {
    this._eBS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eBSInput() {
    return this._eBS.internalValue;
  }

  // e_c2 - computed: false, optional: true, required: false
  private _eC2 = new DeviceGroupExtraServicesEC2List(this, "e_c2", false);
  public get eC2() {
    return this._eC2;
  }
  public putEC2(value: DeviceGroupExtraServicesEC2[] | cdktf.IResolvable) {
    this._eC2.internalValue = value;
  }
  public resetEC2() {
    this._eC2.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eC2Input() {
    return this._eC2.internalValue;
  }

  // e_c_s - computed: false, optional: true, required: false
  private _eCS = new DeviceGroupExtraServicesECSList(this, "e_c_s", false);
  public get eCS() {
    return this._eCS;
  }
  public putECS(value: DeviceGroupExtraServicesECS[] | cdktf.IResolvable) {
    this._eCS.internalValue = value;
  }
  public resetECS() {
    this._eCS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eCSInput() {
    return this._eCS.internalValue;
  }

  // e_f_s - computed: false, optional: true, required: false
  private _eFS = new DeviceGroupExtraServicesEFSList(this, "e_f_s", false);
  public get eFS() {
    return this._eFS;
  }
  public putEFS(value: DeviceGroupExtraServicesEFS[] | cdktf.IResolvable) {
    this._eFS.internalValue = value;
  }
  public resetEFS() {
    this._eFS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eFSInput() {
    return this._eFS.internalValue;
  }

  // e_l_a_s_t_i_c_a_c_h_e - computed: false, optional: true, required: false
  private _eLASTICACHE = new DeviceGroupExtraServicesELASTICACHEList(this, "e_l_a_s_t_i_c_a_c_h_e", false);
  public get eLASTICACHE() {
    return this._eLASTICACHE;
  }
  public putELASTICACHE(value: DeviceGroupExtraServicesELASTICACHE[] | cdktf.IResolvable) {
    this._eLASTICACHE.internalValue = value;
  }
  public resetELASTICACHE() {
    this._eLASTICACHE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLASTICACHEInput() {
    return this._eLASTICACHE.internalValue;
  }

  // e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k - computed: false, optional: true, required: false
  private _eLASTICBEANSTALK = new DeviceGroupExtraServicesELASTICBEANSTALKList(this, "e_l_a_s_t_i_c_b_e_a_n_s_t_a_l_k", false);
  public get eLASTICBEANSTALK() {
    return this._eLASTICBEANSTALK;
  }
  public putELASTICBEANSTALK(value: DeviceGroupExtraServicesELASTICBEANSTALK[] | cdktf.IResolvable) {
    this._eLASTICBEANSTALK.internalValue = value;
  }
  public resetELASTICBEANSTALK() {
    this._eLASTICBEANSTALK.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLASTICBEANSTALKInput() {
    return this._eLASTICBEANSTALK.internalValue;
  }

  // e_l_a_s_t_i_c_s_e_a_r_c_h - computed: false, optional: true, required: false
  private _eLASTICSEARCH = new DeviceGroupExtraServicesELASTICSEARCHList(this, "e_l_a_s_t_i_c_s_e_a_r_c_h", false);
  public get eLASTICSEARCH() {
    return this._eLASTICSEARCH;
  }
  public putELASTICSEARCH(value: DeviceGroupExtraServicesELASTICSEARCH[] | cdktf.IResolvable) {
    this._eLASTICSEARCH.internalValue = value;
  }
  public resetELASTICSEARCH() {
    this._eLASTICSEARCH.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLASTICSEARCHInput() {
    return this._eLASTICSEARCH.internalValue;
  }

  // e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r - computed: false, optional: true, required: false
  private _eLASTICTRANSCODER = new DeviceGroupExtraServicesELASTICTRANSCODERList(this, "e_l_a_s_t_i_c_t_r_a_n_s_c_o_d_e_r", false);
  public get eLASTICTRANSCODER() {
    return this._eLASTICTRANSCODER;
  }
  public putELASTICTRANSCODER(value: DeviceGroupExtraServicesELASTICTRANSCODER[] | cdktf.IResolvable) {
    this._eLASTICTRANSCODER.internalValue = value;
  }
  public resetELASTICTRANSCODER() {
    this._eLASTICTRANSCODER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLASTICTRANSCODERInput() {
    return this._eLASTICTRANSCODER.internalValue;
  }

  // e_l_b - computed: false, optional: true, required: false
  private _eLB = new DeviceGroupExtraServicesELBList(this, "e_l_b", false);
  public get eLB() {
    return this._eLB;
  }
  public putELB(value: DeviceGroupExtraServicesELB[] | cdktf.IResolvable) {
    this._eLB.internalValue = value;
  }
  public resetELB() {
    this._eLB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eLBInput() {
    return this._eLB.internalValue;
  }

  // e_m_r - computed: false, optional: true, required: false
  private _eMR = new DeviceGroupExtraServicesEMRList(this, "e_m_r", false);
  public get eMR() {
    return this._eMR;
  }
  public putEMR(value: DeviceGroupExtraServicesEMR[] | cdktf.IResolvable) {
    this._eMR.internalValue = value;
  }
  public resetEMR() {
    this._eMR.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eMRInput() {
    return this._eMR.internalValue;
  }

  // e_v_e_n_t_b_r_id_g_e - computed: false, optional: true, required: false
  private _eVENTBRIdGE = new DeviceGroupExtraServicesEVENTBRIdGEList(this, "e_v_e_n_t_b_r_id_g_e", false);
  public get eVENTBRIdGE() {
    return this._eVENTBRIdGE;
  }
  public putEVENTBRIdGE(value: DeviceGroupExtraServicesEVENTBRIdGE[] | cdktf.IResolvable) {
    this._eVENTBRIdGE.internalValue = value;
  }
  public resetEVENTBRIdGE() {
    this._eVENTBRIdGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eVENTBRIdGEInput() {
    return this._eVENTBRIdGE.internalValue;
  }

  // e_v_e_n_t_h_u_b - computed: false, optional: true, required: false
  private _eVENTHUB = new DeviceGroupExtraServicesEVENTHUBList(this, "e_v_e_n_t_h_u_b", false);
  public get eVENTHUB() {
    return this._eVENTHUB;
  }
  public putEVENTHUB(value: DeviceGroupExtraServicesEVENTHUB[] | cdktf.IResolvable) {
    this._eVENTHUB.internalValue = value;
  }
  public resetEVENTHUB() {
    this._eVENTHUB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eVENTHUBInput() {
    return this._eVENTHUB.internalValue;
  }

  // e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t - computed: false, optional: true, required: false
  private _eXPRESSROUTECIRCUiT = new DeviceGroupExtraServicesEXPRESSROUTECIRCUiTList(this, "e_x_p_r_e_s_s_r_o_u_t_e_c_i_r_c_ui_t", false);
  public get eXPRESSROUTECIRCUiT() {
    return this._eXPRESSROUTECIRCUiT;
  }
  public putEXPRESSROUTECIRCUiT(value: DeviceGroupExtraServicesEXPRESSROUTECIRCUiT[] | cdktf.IResolvable) {
    this._eXPRESSROUTECIRCUiT.internalValue = value;
  }
  public resetEXPRESSROUTECIRCUiT() {
    this._eXPRESSROUTECIRCUiT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eXPRESSROUTECIRCUiTInput() {
    return this._eXPRESSROUTECIRCUiT.internalValue;
  }

  // f_i_l_e_s_t_o_r_a_g_e - computed: false, optional: true, required: false
  private _fILESTORAGE = new DeviceGroupExtraServicesFILESTORAGEList(this, "f_i_l_e_s_t_o_r_a_g_e", false);
  public get fILESTORAGE() {
    return this._fILESTORAGE;
  }
  public putFILESTORAGE(value: DeviceGroupExtraServicesFILESTORAGE[] | cdktf.IResolvable) {
    this._fILESTORAGE.internalValue = value;
  }
  public resetFILESTORAGE() {
    this._fILESTORAGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fILESTORAGEInput() {
    return this._fILESTORAGE.internalValue;
  }

  // f_i_r_e_h_o_s_e - computed: false, optional: true, required: false
  private _fIREHOSE = new DeviceGroupExtraServicesFIREHOSEList(this, "f_i_r_e_h_o_s_e", false);
  public get fIREHOSE() {
    return this._fIREHOSE;
  }
  public putFIREHOSE(value: DeviceGroupExtraServicesFIREHOSE[] | cdktf.IResolvable) {
    this._fIREHOSE.internalValue = value;
  }
  public resetFIREHOSE() {
    this._fIREHOSE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fIREHOSEInput() {
    return this._fIREHOSE.internalValue;
  }

  // f_i_r_e_w_a_l_l - computed: false, optional: true, required: false
  private _fIREWALL = new DeviceGroupExtraServicesFIREWALLList(this, "f_i_r_e_w_a_l_l", false);
  public get fIREWALL() {
    return this._fIREWALL;
  }
  public putFIREWALL(value: DeviceGroupExtraServicesFIREWALL[] | cdktf.IResolvable) {
    this._fIREWALL.internalValue = value;
  }
  public resetFIREWALL() {
    this._fIREWALL.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fIREWALLInput() {
    return this._fIREWALL.internalValue;
  }

  // f_r_o_n_t_d_o_o_r_s - computed: false, optional: true, required: false
  private _fRONTDOORS = new DeviceGroupExtraServicesFRONTDOORSList(this, "f_r_o_n_t_d_o_o_r_s", false);
  public get fRONTDOORS() {
    return this._fRONTDOORS;
  }
  public putFRONTDOORS(value: DeviceGroupExtraServicesFRONTDOORS[] | cdktf.IResolvable) {
    this._fRONTDOORS.internalValue = value;
  }
  public resetFRONTDOORS() {
    this._fRONTDOORS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fRONTDOORSInput() {
    return this._fRONTDOORS.internalValue;
  }

  // f_s_x - computed: false, optional: true, required: false
  private _fSX = new DeviceGroupExtraServicesFSXList(this, "f_s_x", false);
  public get fSX() {
    return this._fSX;
  }
  public putFSX(value: DeviceGroupExtraServicesFSX[] | cdktf.IResolvable) {
    this._fSX.internalValue = value;
  }
  public resetFSX() {
    this._fSX.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fSXInput() {
    return this._fSX.internalValue;
  }

  // g_l_u_e - computed: false, optional: true, required: false
  private _gLUE = new DeviceGroupExtraServicesGLUEList(this, "g_l_u_e", false);
  public get gLUE() {
    return this._gLUE;
  }
  public putGLUE(value: DeviceGroupExtraServicesGLUE[] | cdktf.IResolvable) {
    this._gLUE.internalValue = value;
  }
  public resetGLUE() {
    this._gLUE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gLUEInput() {
    return this._gLUE.internalValue;
  }

  // k_e_y_v_a_u_l_t - computed: false, optional: true, required: false
  private _kEYVAULT = new DeviceGroupExtraServicesKEYVAULTList(this, "k_e_y_v_a_u_l_t", false);
  public get kEYVAULT() {
    return this._kEYVAULT;
  }
  public putKEYVAULT(value: DeviceGroupExtraServicesKEYVAULT[] | cdktf.IResolvable) {
    this._kEYVAULT.internalValue = value;
  }
  public resetKEYVAULT() {
    this._kEYVAULT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kEYVAULTInput() {
    return this._kEYVAULT.internalValue;
  }

  // k_i_n_e_s_i_s - computed: false, optional: true, required: false
  private _kINESIS = new DeviceGroupExtraServicesKINESISList(this, "k_i_n_e_s_i_s", false);
  public get kINESIS() {
    return this._kINESIS;
  }
  public putKINESIS(value: DeviceGroupExtraServicesKINESIS[] | cdktf.IResolvable) {
    this._kINESIS.internalValue = value;
  }
  public resetKINESIS() {
    this._kINESIS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kINESISInput() {
    return this._kINESIS.internalValue;
  }

  // k_i_n_e_s_i_s_v_id_e_o - computed: false, optional: true, required: false
  private _kINESISVIdEO = new DeviceGroupExtraServicesKINESISVIdEOList(this, "k_i_n_e_s_i_s_v_id_e_o", false);
  public get kINESISVIdEO() {
    return this._kINESISVIdEO;
  }
  public putKINESISVIdEO(value: DeviceGroupExtraServicesKINESISVIdEO[] | cdktf.IResolvable) {
    this._kINESISVIdEO.internalValue = value;
  }
  public resetKINESISVIdEO() {
    this._kINESISVIdEO.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kINESISVIdEOInput() {
    return this._kINESISVIdEO.internalValue;
  }

  // l_a_m_b_d_a - computed: false, optional: true, required: false
  private _lAMBDA = new DeviceGroupExtraServicesLAMBDAList(this, "l_a_m_b_d_a", false);
  public get lAMBDA() {
    return this._lAMBDA;
  }
  public putLAMBDA(value: DeviceGroupExtraServicesLAMBDA[] | cdktf.IResolvable) {
    this._lAMBDA.internalValue = value;
  }
  public resetLAMBDA() {
    this._lAMBDA.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lAMBDAInput() {
    return this._lAMBDA.internalValue;
  }

  // l_o_a_d_b_a_l_a_n_c_e_r_s - computed: false, optional: true, required: false
  private _lOADBALANCERS = new DeviceGroupExtraServicesLOADBALANCERSList(this, "l_o_a_d_b_a_l_a_n_c_e_r_s", false);
  public get lOADBALANCERS() {
    return this._lOADBALANCERS;
  }
  public putLOADBALANCERS(value: DeviceGroupExtraServicesLOADBALANCERS[] | cdktf.IResolvable) {
    this._lOADBALANCERS.internalValue = value;
  }
  public resetLOADBALANCERS() {
    this._lOADBALANCERS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lOADBALANCERSInput() {
    return this._lOADBALANCERS.internalValue;
  }

  // l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s - computed: false, optional: true, required: false
  private _lOGANALYTICSWORKSPACES = new DeviceGroupExtraServicesLOGANALYTICSWORKSPACESList(this, "l_o_g_a_n_a_l_y_t_i_c_s_w_o_r_k_s_p_a_c_e_s", false);
  public get lOGANALYTICSWORKSPACES() {
    return this._lOGANALYTICSWORKSPACES;
  }
  public putLOGANALYTICSWORKSPACES(value: DeviceGroupExtraServicesLOGANALYTICSWORKSPACES[] | cdktf.IResolvable) {
    this._lOGANALYTICSWORKSPACES.internalValue = value;
  }
  public resetLOGANALYTICSWORKSPACES() {
    this._lOGANALYTICSWORKSPACES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lOGANALYTICSWORKSPACESInput() {
    return this._lOGANALYTICSWORKSPACES.internalValue;
  }

  // l_o_g_i_c_a_p_p_s - computed: false, optional: true, required: false
  private _lOGICAPPS = new DeviceGroupExtraServicesLOGICAPPSList(this, "l_o_g_i_c_a_p_p_s", false);
  public get lOGICAPPS() {
    return this._lOGICAPPS;
  }
  public putLOGICAPPS(value: DeviceGroupExtraServicesLOGICAPPS[] | cdktf.IResolvable) {
    this._lOGICAPPS.internalValue = value;
  }
  public resetLOGICAPPS() {
    this._lOGICAPPS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lOGICAPPSInput() {
    return this._lOGICAPPS.internalValue;
  }

  // m_e_d_i_a_c_o_n_n_e_c_t - computed: false, optional: true, required: false
  private _mEDIACONNECT = new DeviceGroupExtraServicesMEDIACONNECTList(this, "m_e_d_i_a_c_o_n_n_e_c_t", false);
  public get mEDIACONNECT() {
    return this._mEDIACONNECT;
  }
  public putMEDIACONNECT(value: DeviceGroupExtraServicesMEDIACONNECT[] | cdktf.IResolvable) {
    this._mEDIACONNECT.internalValue = value;
  }
  public resetMEDIACONNECT() {
    this._mEDIACONNECT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIACONNECTInput() {
    return this._mEDIACONNECT.internalValue;
  }

  // m_e_d_i_a_c_o_n_v_e_r_t - computed: false, optional: true, required: false
  private _mEDIACONVERT = new DeviceGroupExtraServicesMEDIACONVERTList(this, "m_e_d_i_a_c_o_n_v_e_r_t", false);
  public get mEDIACONVERT() {
    return this._mEDIACONVERT;
  }
  public putMEDIACONVERT(value: DeviceGroupExtraServicesMEDIACONVERT[] | cdktf.IResolvable) {
    this._mEDIACONVERT.internalValue = value;
  }
  public resetMEDIACONVERT() {
    this._mEDIACONVERT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIACONVERTInput() {
    return this._mEDIACONVERT.internalValue;
  }

  // m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e - computed: false, optional: true, required: false
  private _mEDIAPACKAGELIVE = new DeviceGroupExtraServicesMEDIAPACKAGELIVEList(this, "m_e_d_i_a_p_a_c_k_a_g_e_l_i_v_e", false);
  public get mEDIAPACKAGELIVE() {
    return this._mEDIAPACKAGELIVE;
  }
  public putMEDIAPACKAGELIVE(value: DeviceGroupExtraServicesMEDIAPACKAGELIVE[] | cdktf.IResolvable) {
    this._mEDIAPACKAGELIVE.internalValue = value;
  }
  public resetMEDIAPACKAGELIVE() {
    this._mEDIAPACKAGELIVE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIAPACKAGELIVEInput() {
    return this._mEDIAPACKAGELIVE.internalValue;
  }

  // m_e_d_i_a_p_a_c_k_a_g_e_v_o_d - computed: false, optional: true, required: false
  private _mEDIAPACKAGEVOD = new DeviceGroupExtraServicesMEDIAPACKAGEVODList(this, "m_e_d_i_a_p_a_c_k_a_g_e_v_o_d", false);
  public get mEDIAPACKAGEVOD() {
    return this._mEDIAPACKAGEVOD;
  }
  public putMEDIAPACKAGEVOD(value: DeviceGroupExtraServicesMEDIAPACKAGEVOD[] | cdktf.IResolvable) {
    this._mEDIAPACKAGEVOD.internalValue = value;
  }
  public resetMEDIAPACKAGEVOD() {
    this._mEDIAPACKAGEVOD.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIAPACKAGEVODInput() {
    return this._mEDIAPACKAGEVOD.internalValue;
  }

  // m_e_d_i_a_s_t_o_r_e - computed: false, optional: true, required: false
  private _mEDIASTORE = new DeviceGroupExtraServicesMEDIASTOREList(this, "m_e_d_i_a_s_t_o_r_e", false);
  public get mEDIASTORE() {
    return this._mEDIASTORE;
  }
  public putMEDIASTORE(value: DeviceGroupExtraServicesMEDIASTORE[] | cdktf.IResolvable) {
    this._mEDIASTORE.internalValue = value;
  }
  public resetMEDIASTORE() {
    this._mEDIASTORE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIASTOREInput() {
    return this._mEDIASTORE.internalValue;
  }

  // m_e_d_i_a_t_a_i_l_o_r - computed: false, optional: true, required: false
  private _mEDIATAILOR = new DeviceGroupExtraServicesMEDIATAILORList(this, "m_e_d_i_a_t_a_i_l_o_r", false);
  public get mEDIATAILOR() {
    return this._mEDIATAILOR;
  }
  public putMEDIATAILOR(value: DeviceGroupExtraServicesMEDIATAILOR[] | cdktf.IResolvable) {
    this._mEDIATAILOR.internalValue = value;
  }
  public resetMEDIATAILOR() {
    this._mEDIATAILOR.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mEDIATAILORInput() {
    return this._mEDIATAILOR.internalValue;
  }

  // m_q - computed: false, optional: true, required: false
  private _mQ = new DeviceGroupExtraServicesMQList(this, "m_q", false);
  public get mQ() {
    return this._mQ;
  }
  public putMQ(value: DeviceGroupExtraServicesMQ[] | cdktf.IResolvable) {
    this._mQ.internalValue = value;
  }
  public resetMQ() {
    this._mQ.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mQInput() {
    return this._mQ.internalValue;
  }

  // m_s_k_b_r_o_k_e_r - computed: false, optional: true, required: false
  private _mSKBROKER = new DeviceGroupExtraServicesMSKBROKERList(this, "m_s_k_b_r_o_k_e_r", false);
  public get mSKBROKER() {
    return this._mSKBROKER;
  }
  public putMSKBROKER(value: DeviceGroupExtraServicesMSKBROKER[] | cdktf.IResolvable) {
    this._mSKBROKER.internalValue = value;
  }
  public resetMSKBROKER() {
    this._mSKBROKER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSKBROKERInput() {
    return this._mSKBROKER.internalValue;
  }

  // m_s_k_c_l_u_s_t_e_r - computed: false, optional: true, required: false
  private _mSKCLUSTER = new DeviceGroupExtraServicesMSKCLUSTERList(this, "m_s_k_c_l_u_s_t_e_r", false);
  public get mSKCLUSTER() {
    return this._mSKCLUSTER;
  }
  public putMSKCLUSTER(value: DeviceGroupExtraServicesMSKCLUSTER[] | cdktf.IResolvable) {
    this._mSKCLUSTER.internalValue = value;
  }
  public resetMSKCLUSTER() {
    this._mSKCLUSTER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mSKCLUSTERInput() {
    return this._mSKCLUSTER.internalValue;
  }

  // m_y_sql - computed: false, optional: true, required: false
  private _mYSql = new DeviceGroupExtraServicesMYSqlList(this, "m_y_sql", false);
  public get mYSql() {
    return this._mYSql;
  }
  public putMYSql(value: DeviceGroupExtraServicesMYSql[] | cdktf.IResolvable) {
    this._mYSql.internalValue = value;
  }
  public resetMYSql() {
    this._mYSql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mYSqlInput() {
    return this._mYSql.internalValue;
  }

  // n_a_t_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _nATGATEWAY = new DeviceGroupExtraServicesNATGATEWAYList(this, "n_a_t_g_a_t_e_w_a_y", false);
  public get nATGATEWAY() {
    return this._nATGATEWAY;
  }
  public putNATGATEWAY(value: DeviceGroupExtraServicesNATGATEWAY[] | cdktf.IResolvable) {
    this._nATGATEWAY.internalValue = value;
  }
  public resetNATGATEWAY() {
    this._nATGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nATGATEWAYInput() {
    return this._nATGATEWAY.internalValue;
  }

  // n_e_t_w_o_r_k_e_l_b - computed: false, optional: true, required: false
  private _nETWORKELB = new DeviceGroupExtraServicesNETWORKELBList(this, "n_e_t_w_o_r_k_e_l_b", false);
  public get nETWORKELB() {
    return this._nETWORKELB;
  }
  public putNETWORKELB(value: DeviceGroupExtraServicesNETWORKELB[] | cdktf.IResolvable) {
    this._nETWORKELB.internalValue = value;
  }
  public resetNETWORKELB() {
    this._nETWORKELB.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nETWORKELBInput() {
    return this._nETWORKELB.internalValue;
  }

  // n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e - computed: false, optional: true, required: false
  private _nETWORKINTERFACE = new DeviceGroupExtraServicesNETWORKINTERFACEList(this, "n_e_t_w_o_r_k_i_n_t_e_r_f_a_c_e", false);
  public get nETWORKINTERFACE() {
    return this._nETWORKINTERFACE;
  }
  public putNETWORKINTERFACE(value: DeviceGroupExtraServicesNETWORKINTERFACE[] | cdktf.IResolvable) {
    this._nETWORKINTERFACE.internalValue = value;
  }
  public resetNETWORKINTERFACE() {
    this._nETWORKINTERFACE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nETWORKINTERFACEInput() {
    return this._nETWORKINTERFACE.internalValue;
  }

  // o_p_s_w_o_r_k_s - computed: false, optional: true, required: false
  private _oPSWORKS = new DeviceGroupExtraServicesOPSWORKSList(this, "o_p_s_w_o_r_k_s", false);
  public get oPSWORKS() {
    return this._oPSWORKS;
  }
  public putOPSWORKS(value: DeviceGroupExtraServicesOPSWORKS[] | cdktf.IResolvable) {
    this._oPSWORKS.internalValue = value;
  }
  public resetOPSWORKS() {
    this._oPSWORKS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oPSWORKSInput() {
    return this._oPSWORKS.internalValue;
  }

  // p_o_s_t_g_r_e_sql - computed: false, optional: true, required: false
  private _pOSTGRESql = new DeviceGroupExtraServicesPOSTGRESqlList(this, "p_o_s_t_g_r_e_sql", false);
  public get pOSTGRESql() {
    return this._pOSTGRESql;
  }
  public putPOSTGRESql(value: DeviceGroupExtraServicesPOSTGRESql[] | cdktf.IResolvable) {
    this._pOSTGRESql.internalValue = value;
  }
  public resetPOSTGRESql() {
    this._pOSTGRESql.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pOSTGRESqlInput() {
    return this._pOSTGRESql.internalValue;
  }

  // p_u_b_l_i_c_ip - computed: false, optional: true, required: false
  private _pUBLICIp = new DeviceGroupExtraServicesPUBLICIpList(this, "p_u_b_l_i_c_ip", false);
  public get pUBLICIp() {
    return this._pUBLICIp;
  }
  public putPUBLICIp(value: DeviceGroupExtraServicesPUBLICIp[] | cdktf.IResolvable) {
    this._pUBLICIp.internalValue = value;
  }
  public resetPUBLICIp() {
    this._pUBLICIp.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pUBLICIpInput() {
    return this._pUBLICIp.internalValue;
  }

  // q_u_e_u_e_s_t_o_r_a_g_e - computed: false, optional: true, required: false
  private _qUEUESTORAGE = new DeviceGroupExtraServicesQUEUESTORAGEList(this, "q_u_e_u_e_s_t_o_r_a_g_e", false);
  public get qUEUESTORAGE() {
    return this._qUEUESTORAGE;
  }
  public putQUEUESTORAGE(value: DeviceGroupExtraServicesQUEUESTORAGE[] | cdktf.IResolvable) {
    this._qUEUESTORAGE.internalValue = value;
  }
  public resetQUEUESTORAGE() {
    this._qUEUESTORAGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get qUEUESTORAGEInput() {
    return this._qUEUESTORAGE.internalValue;
  }

  // r_d_s - computed: false, optional: true, required: false
  private _rDS = new DeviceGroupExtraServicesRDSList(this, "r_d_s", false);
  public get rDS() {
    return this._rDS;
  }
  public putRDS(value: DeviceGroupExtraServicesRDS[] | cdktf.IResolvable) {
    this._rDS.internalValue = value;
  }
  public resetRDS() {
    this._rDS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rDSInput() {
    return this._rDS.internalValue;
  }

  // r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m - computed: false, optional: true, required: false
  private _rECOVERYPROTECTEDITEM = new DeviceGroupExtraServicesRECOVERYPROTECTEDITEMList(this, "r_e_c_o_v_e_r_y_p_r_o_t_e_c_t_e_d_i_t_e_m", false);
  public get rECOVERYPROTECTEDITEM() {
    return this._rECOVERYPROTECTEDITEM;
  }
  public putRECOVERYPROTECTEDITEM(value: DeviceGroupExtraServicesRECOVERYPROTECTEDITEM[] | cdktf.IResolvable) {
    this._rECOVERYPROTECTEDITEM.internalValue = value;
  }
  public resetRECOVERYPROTECTEDITEM() {
    this._rECOVERYPROTECTEDITEM.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rECOVERYPROTECTEDITEMInput() {
    return this._rECOVERYPROTECTEDITEM.internalValue;
  }

  // r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s - computed: false, optional: true, required: false
  private _rECOVERYSERVICES = new DeviceGroupExtraServicesRECOVERYSERVICESList(this, "r_e_c_o_v_e_r_y_s_e_r_v_i_c_e_s", false);
  public get rECOVERYSERVICES() {
    return this._rECOVERYSERVICES;
  }
  public putRECOVERYSERVICES(value: DeviceGroupExtraServicesRECOVERYSERVICES[] | cdktf.IResolvable) {
    this._rECOVERYSERVICES.internalValue = value;
  }
  public resetRECOVERYSERVICES() {
    this._rECOVERYSERVICES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rECOVERYSERVICESInput() {
    return this._rECOVERYSERVICES.internalValue;
  }

  // r_e_d_i_s_c_a_c_h_e - computed: false, optional: true, required: false
  private _rEDISCACHE = new DeviceGroupExtraServicesREDISCACHEList(this, "r_e_d_i_s_c_a_c_h_e", false);
  public get rEDISCACHE() {
    return this._rEDISCACHE;
  }
  public putREDISCACHE(value: DeviceGroupExtraServicesREDISCACHE[] | cdktf.IResolvable) {
    this._rEDISCACHE.internalValue = value;
  }
  public resetREDISCACHE() {
    this._rEDISCACHE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rEDISCACHEInput() {
    return this._rEDISCACHE.internalValue;
  }

  // r_e_d_s_h_i_f_t - computed: false, optional: true, required: false
  private _rEDSHIFT = new DeviceGroupExtraServicesREDSHIFTList(this, "r_e_d_s_h_i_f_t", false);
  public get rEDSHIFT() {
    return this._rEDSHIFT;
  }
  public putREDSHIFT(value: DeviceGroupExtraServicesREDSHIFT[] | cdktf.IResolvable) {
    this._rEDSHIFT.internalValue = value;
  }
  public resetREDSHIFT() {
    this._rEDSHIFT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rEDSHIFTInput() {
    return this._rEDSHIFT.internalValue;
  }

  // r_o_u_t_e53 - computed: false, optional: true, required: false
  private _rOUTE53 = new DeviceGroupExtraServicesROUTE53List(this, "r_o_u_t_e53", false);
  public get rOUTE53() {
    return this._rOUTE53;
  }
  public putROUTE53(value: DeviceGroupExtraServicesROUTE53[] | cdktf.IResolvable) {
    this._rOUTE53.internalValue = value;
  }
  public resetROUTE53() {
    this._rOUTE53.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rOUTE53Input() {
    return this._rOUTE53.internalValue;
  }

  // r_o_u_t_e53_r_e_s_o_l_v_e_r - computed: false, optional: true, required: false
  private _rOUTE53RESOLVER = new DeviceGroupExtraServicesROUTE53RESOLVERList(this, "r_o_u_t_e53_r_e_s_o_l_v_e_r", false);
  public get rOUTE53RESOLVER() {
    return this._rOUTE53RESOLVER;
  }
  public putROUTE53RESOLVER(value: DeviceGroupExtraServicesROUTE53RESOLVER[] | cdktf.IResolvable) {
    this._rOUTE53RESOLVER.internalValue = value;
  }
  public resetROUTE53RESOLVER() {
    this._rOUTE53RESOLVER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rOUTE53RESOLVERInput() {
    return this._rOUTE53RESOLVER.internalValue;
  }

  // s3 - computed: false, optional: true, required: false
  private _s3 = new DeviceGroupExtraServicesS3List(this, "s3", false);
  public get s3() {
    return this._s3;
  }
  public putS3(value: DeviceGroupExtraServicesS3[] | cdktf.IResolvable) {
    this._s3.internalValue = value;
  }
  public resetS3() {
    this._s3.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get s3Input() {
    return this._s3.internalValue;
  }

  // s_a_g_e_m_a_k_e_r - computed: false, optional: true, required: false
  private _sAGEMAKER = new DeviceGroupExtraServicesSAGEMAKERList(this, "s_a_g_e_m_a_k_e_r", false);
  public get sAGEMAKER() {
    return this._sAGEMAKER;
  }
  public putSAGEMAKER(value: DeviceGroupExtraServicesSAGEMAKER[] | cdktf.IResolvable) {
    this._sAGEMAKER.internalValue = value;
  }
  public resetSAGEMAKER() {
    this._sAGEMAKER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sAGEMAKERInput() {
    return this._sAGEMAKER.internalValue;
  }

  // s_e_r_v_i_c_e_b_u_s - computed: false, optional: true, required: false
  private _sERVICEBUS = new DeviceGroupExtraServicesSERVICEBUSList(this, "s_e_r_v_i_c_e_b_u_s", false);
  public get sERVICEBUS() {
    return this._sERVICEBUS;
  }
  public putSERVICEBUS(value: DeviceGroupExtraServicesSERVICEBUS[] | cdktf.IResolvable) {
    this._sERVICEBUS.internalValue = value;
  }
  public resetSERVICEBUS() {
    this._sERVICEBUS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sERVICEBUSInput() {
    return this._sERVICEBUS.internalValue;
  }

  // s_e_s - computed: false, optional: true, required: false
  private _sES = new DeviceGroupExtraServicesSESList(this, "s_e_s", false);
  public get sES() {
    return this._sES;
  }
  public putSES(value: DeviceGroupExtraServicesSES[] | cdktf.IResolvable) {
    this._sES.internalValue = value;
  }
  public resetSES() {
    this._sES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sESInput() {
    return this._sES.internalValue;
  }

  // s_n_s - computed: false, optional: true, required: false
  private _sNS = new DeviceGroupExtraServicesSNSList(this, "s_n_s", false);
  public get sNS() {
    return this._sNS;
  }
  public putSNS(value: DeviceGroupExtraServicesSNS[] | cdktf.IResolvable) {
    this._sNS.internalValue = value;
  }
  public resetSNS() {
    this._sNS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sNSInput() {
    return this._sNS.internalValue;
  }

  // s_q_s - computed: false, optional: true, required: false
  private _sQS = new DeviceGroupExtraServicesSQSList(this, "s_q_s", false);
  public get sQS() {
    return this._sQS;
  }
  public putSQS(value: DeviceGroupExtraServicesSQS[] | cdktf.IResolvable) {
    this._sQS.internalValue = value;
  }
  public resetSQS() {
    this._sQS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sQSInput() {
    return this._sQS.internalValue;
  }

  // s_t_e_p_f_u_n_c_t_i_o_n_s - computed: false, optional: true, required: false
  private _sTEPFUNCTIONS = new DeviceGroupExtraServicesSTEPFUNCTIONSList(this, "s_t_e_p_f_u_n_c_t_i_o_n_s", false);
  public get sTEPFUNCTIONS() {
    return this._sTEPFUNCTIONS;
  }
  public putSTEPFUNCTIONS(value: DeviceGroupExtraServicesSTEPFUNCTIONS[] | cdktf.IResolvable) {
    this._sTEPFUNCTIONS.internalValue = value;
  }
  public resetSTEPFUNCTIONS() {
    this._sTEPFUNCTIONS.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sTEPFUNCTIONSInput() {
    return this._sTEPFUNCTIONS.internalValue;
  }

  // s_t_o_r_a_g_e_a_c_c_o_u_n_t - computed: false, optional: true, required: false
  private _sTORAGEACCOUNT = new DeviceGroupExtraServicesSTORAGEACCOUNTList(this, "s_t_o_r_a_g_e_a_c_c_o_u_n_t", false);
  public get sTORAGEACCOUNT() {
    return this._sTORAGEACCOUNT;
  }
  public putSTORAGEACCOUNT(value: DeviceGroupExtraServicesSTORAGEACCOUNT[] | cdktf.IResolvable) {
    this._sTORAGEACCOUNT.internalValue = value;
  }
  public resetSTORAGEACCOUNT() {
    this._sTORAGEACCOUNT.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sTORAGEACCOUNTInput() {
    return this._sTORAGEACCOUNT.internalValue;
  }

  // s_w_f_a_c_t_i_v_i_t_y - computed: false, optional: true, required: false
  private _sWFACTIVITY = new DeviceGroupExtraServicesSWFACTIVITYList(this, "s_w_f_a_c_t_i_v_i_t_y", false);
  public get sWFACTIVITY() {
    return this._sWFACTIVITY;
  }
  public putSWFACTIVITY(value: DeviceGroupExtraServicesSWFACTIVITY[] | cdktf.IResolvable) {
    this._sWFACTIVITY.internalValue = value;
  }
  public resetSWFACTIVITY() {
    this._sWFACTIVITY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sWFACTIVITYInput() {
    return this._sWFACTIVITY.internalValue;
  }

  // s_w_f_w_o_r_k_f_l_o_w - computed: false, optional: true, required: false
  private _sWFWORKFLOW = new DeviceGroupExtraServicesSWFWORKFLOWList(this, "s_w_f_w_o_r_k_f_l_o_w", false);
  public get sWFWORKFLOW() {
    return this._sWFWORKFLOW;
  }
  public putSWFWORKFLOW(value: DeviceGroupExtraServicesSWFWORKFLOW[] | cdktf.IResolvable) {
    this._sWFWORKFLOW.internalValue = value;
  }
  public resetSWFWORKFLOW() {
    this._sWFWORKFLOW.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sWFWORKFLOWInput() {
    return this._sWFWORKFLOW.internalValue;
  }

  // s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s - computed: false, optional: true, required: false
  private _sYNAPSEWORKSPACES = new DeviceGroupExtraServicesSYNAPSEWORKSPACESList(this, "s_y_n_a_p_s_e_w_o_r_k_s_p_a_c_e_s", false);
  public get sYNAPSEWORKSPACES() {
    return this._sYNAPSEWORKSPACES;
  }
  public putSYNAPSEWORKSPACES(value: DeviceGroupExtraServicesSYNAPSEWORKSPACES[] | cdktf.IResolvable) {
    this._sYNAPSEWORKSPACES.internalValue = value;
  }
  public resetSYNAPSEWORKSPACES() {
    this._sYNAPSEWORKSPACES.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sYNAPSEWORKSPACESInput() {
    return this._sYNAPSEWORKSPACES.internalValue;
  }

  // sql_d_a_t_a_b_a_s_e - computed: false, optional: true, required: false
  private _sqlDATABASE = new DeviceGroupExtraServicesSqlDATABASEList(this, "sql_d_a_t_a_b_a_s_e", false);
  public get sqlDATABASE() {
    return this._sqlDATABASE;
  }
  public putSqlDATABASE(value: DeviceGroupExtraServicesSqlDATABASE[] | cdktf.IResolvable) {
    this._sqlDATABASE.internalValue = value;
  }
  public resetSqlDATABASE() {
    this._sqlDATABASE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlDATABASEInput() {
    return this._sqlDATABASE.internalValue;
  }

  // sql_e_l_a_s_t_i_c_p_o_o_l - computed: false, optional: true, required: false
  private _sqlELASTICPOOL = new DeviceGroupExtraServicesSqlELASTICPOOLList(this, "sql_e_l_a_s_t_i_c_p_o_o_l", false);
  public get sqlELASTICPOOL() {
    return this._sqlELASTICPOOL;
  }
  public putSqlELASTICPOOL(value: DeviceGroupExtraServicesSqlELASTICPOOL[] | cdktf.IResolvable) {
    this._sqlELASTICPOOL.internalValue = value;
  }
  public resetSqlELASTICPOOL() {
    this._sqlELASTICPOOL.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlELASTICPOOLInput() {
    return this._sqlELASTICPOOL.internalValue;
  }

  // sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e - computed: false, optional: true, required: false
  private _sqlMANAGEDINSTANCE = new DeviceGroupExtraServicesSqlMANAGEDINSTANCEList(this, "sql_m_a_n_a_g_e_d_i_n_s_t_a_n_c_e", false);
  public get sqlMANAGEDINSTANCE() {
    return this._sqlMANAGEDINSTANCE;
  }
  public putSqlMANAGEDINSTANCE(value: DeviceGroupExtraServicesSqlMANAGEDINSTANCE[] | cdktf.IResolvable) {
    this._sqlMANAGEDINSTANCE.internalValue = value;
  }
  public resetSqlMANAGEDINSTANCE() {
    this._sqlMANAGEDINSTANCE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sqlMANAGEDINSTANCEInput() {
    return this._sqlMANAGEDINSTANCE.internalValue;
  }

  // t_a_b_l_e_s_t_o_r_a_g_e - computed: false, optional: true, required: false
  private _tABLESTORAGE = new DeviceGroupExtraServicesTABLESTORAGEList(this, "t_a_b_l_e_s_t_o_r_a_g_e", false);
  public get tABLESTORAGE() {
    return this._tABLESTORAGE;
  }
  public putTABLESTORAGE(value: DeviceGroupExtraServicesTABLESTORAGE[] | cdktf.IResolvable) {
    this._tABLESTORAGE.internalValue = value;
  }
  public resetTABLESTORAGE() {
    this._tABLESTORAGE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tABLESTORAGEInput() {
    return this._tABLESTORAGE.internalValue;
  }

  // t_r_a_f_f_i_c_m_a_n_a_g_e_r - computed: false, optional: true, required: false
  private _tRAFFICMANAGER = new DeviceGroupExtraServicesTRAFFICMANAGERList(this, "t_r_a_f_f_i_c_m_a_n_a_g_e_r", false);
  public get tRAFFICMANAGER() {
    return this._tRAFFICMANAGER;
  }
  public putTRAFFICMANAGER(value: DeviceGroupExtraServicesTRAFFICMANAGER[] | cdktf.IResolvable) {
    this._tRAFFICMANAGER.internalValue = value;
  }
  public resetTRAFFICMANAGER() {
    this._tRAFFICMANAGER.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tRAFFICMANAGERInput() {
    return this._tRAFFICMANAGER.internalValue;
  }

  // t_r_a_n_s_i_t_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _tRANSITGATEWAY = new DeviceGroupExtraServicesTRANSITGATEWAYList(this, "t_r_a_n_s_i_t_g_a_t_e_w_a_y", false);
  public get tRANSITGATEWAY() {
    return this._tRANSITGATEWAY;
  }
  public putTRANSITGATEWAY(value: DeviceGroupExtraServicesTRANSITGATEWAY[] | cdktf.IResolvable) {
    this._tRANSITGATEWAY.internalValue = value;
  }
  public resetTRANSITGATEWAY() {
    this._tRANSITGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tRANSITGATEWAYInput() {
    return this._tRANSITGATEWAY.internalValue;
  }

  // v_i_r_t_u_a_l_d_e_s_k_t_o_p - computed: false, optional: true, required: false
  private _vIRTUALDESKTOP = new DeviceGroupExtraServicesVIRTUALDESKTOPList(this, "v_i_r_t_u_a_l_d_e_s_k_t_o_p", false);
  public get vIRTUALDESKTOP() {
    return this._vIRTUALDESKTOP;
  }
  public putVIRTUALDESKTOP(value: DeviceGroupExtraServicesVIRTUALDESKTOP[] | cdktf.IResolvable) {
    this._vIRTUALDESKTOP.internalValue = value;
  }
  public resetVIRTUALDESKTOP() {
    this._vIRTUALDESKTOP.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALDESKTOPInput() {
    return this._vIRTUALDESKTOP.internalValue;
  }

  // v_i_r_t_u_a_l_m_a_c_h_i_n_e - computed: false, optional: true, required: false
  private _vIRTUALMACHINE = new DeviceGroupExtraServicesVIRTUALMACHINEList(this, "v_i_r_t_u_a_l_m_a_c_h_i_n_e", false);
  public get vIRTUALMACHINE() {
    return this._vIRTUALMACHINE;
  }
  public putVIRTUALMACHINE(value: DeviceGroupExtraServicesVIRTUALMACHINE[] | cdktf.IResolvable) {
    this._vIRTUALMACHINE.internalValue = value;
  }
  public resetVIRTUALMACHINE() {
    this._vIRTUALMACHINE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALMACHINEInput() {
    return this._vIRTUALMACHINE.internalValue;
  }

  // v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t - computed: false, optional: true, required: false
  private _vIRTUALMACHINESCALESET = new DeviceGroupExtraServicesVIRTUALMACHINESCALESETList(this, "v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t", false);
  public get vIRTUALMACHINESCALESET() {
    return this._vIRTUALMACHINESCALESET;
  }
  public putVIRTUALMACHINESCALESET(value: DeviceGroupExtraServicesVIRTUALMACHINESCALESET[] | cdktf.IResolvable) {
    this._vIRTUALMACHINESCALESET.internalValue = value;
  }
  public resetVIRTUALMACHINESCALESET() {
    this._vIRTUALMACHINESCALESET.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALMACHINESCALESETInput() {
    return this._vIRTUALMACHINESCALESET.internalValue;
  }

  // v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm - computed: false, optional: true, required: false
  private _vIRTUALMACHINESCALESETVm = new DeviceGroupExtraServicesVIRTUALMACHINESCALESETVmList(this, "v_i_r_t_u_a_l_m_a_c_h_i_n_e_s_c_a_l_e_s_e_t_vm", false);
  public get vIRTUALMACHINESCALESETVm() {
    return this._vIRTUALMACHINESCALESETVm;
  }
  public putVIRTUALMACHINESCALESETVm(value: DeviceGroupExtraServicesVIRTUALMACHINESCALESETVm[] | cdktf.IResolvable) {
    this._vIRTUALMACHINESCALESETVm.internalValue = value;
  }
  public resetVIRTUALMACHINESCALESETVm() {
    this._vIRTUALMACHINESCALESETVm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALMACHINESCALESETVmInput() {
    return this._vIRTUALMACHINESCALESETVm.internalValue;
  }

  // v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y - computed: false, optional: true, required: false
  private _vIRTUALNETWORKGATEWAY = new DeviceGroupExtraServicesVIRTUALNETWORKGATEWAYList(this, "v_i_r_t_u_a_l_n_e_t_w_o_r_k_g_a_t_e_w_a_y", false);
  public get vIRTUALNETWORKGATEWAY() {
    return this._vIRTUALNETWORKGATEWAY;
  }
  public putVIRTUALNETWORKGATEWAY(value: DeviceGroupExtraServicesVIRTUALNETWORKGATEWAY[] | cdktf.IResolvable) {
    this._vIRTUALNETWORKGATEWAY.internalValue = value;
  }
  public resetVIRTUALNETWORKGATEWAY() {
    this._vIRTUALNETWORKGATEWAY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vIRTUALNETWORKGATEWAYInput() {
    return this._vIRTUALNETWORKGATEWAY.internalValue;
  }

  // v_p_n - computed: false, optional: true, required: false
  private _vPN = new DeviceGroupExtraServicesVPNList(this, "v_p_n", false);
  public get vPN() {
    return this._vPN;
  }
  public putVPN(value: DeviceGroupExtraServicesVPN[] | cdktf.IResolvable) {
    this._vPN.internalValue = value;
  }
  public resetVPN() {
    this._vPN.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vPNInput() {
    return this._vPN.internalValue;
  }

  // w_o_r_k_s_p_a_c_e - computed: false, optional: true, required: false
  private _wORKSPACE = new DeviceGroupExtraServicesWORKSPACEList(this, "w_o_r_k_s_p_a_c_e", false);
  public get wORKSPACE() {
    return this._wORKSPACE;
  }
  public putWORKSPACE(value: DeviceGroupExtraServicesWORKSPACE[] | cdktf.IResolvable) {
    this._wORKSPACE.internalValue = value;
  }
  public resetWORKSPACE() {
    this._wORKSPACE.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wORKSPACEInput() {
    return this._wORKSPACE.internalValue;
  }

  // w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y - computed: false, optional: true, required: false
  private _wORKSPACEDIRECTORY = new DeviceGroupExtraServicesWORKSPACEDIRECTORYList(this, "w_o_r_k_s_p_a_c_e_d_i_r_e_c_t_o_r_y", false);
  public get wORKSPACEDIRECTORY() {
    return this._wORKSPACEDIRECTORY;
  }
  public putWORKSPACEDIRECTORY(value: DeviceGroupExtraServicesWORKSPACEDIRECTORY[] | cdktf.IResolvable) {
    this._wORKSPACEDIRECTORY.internalValue = value;
  }
  public resetWORKSPACEDIRECTORY() {
    this._wORKSPACEDIRECTORY.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wORKSPACEDIRECTORYInput() {
    return this._wORKSPACEDIRECTORY.internalValue;
  }
}

export class DeviceGroupExtraServicesList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtraServices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraServicesOutputReference {
    return new DeviceGroupExtraServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DeviceGroupExtra {
  /**
  * account block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#account DeviceGroup#account}
  */
  readonly account: DeviceGroupExtraAccount[] | cdktf.IResolvable;
  /**
  * default block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#default DeviceGroup#default}
  */
  readonly default: DeviceGroupExtraDefault[] | cdktf.IResolvable;
  /**
  * services block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logicmonitor/logicmonitor/2.0.25/docs/resources/device_group#services DeviceGroup#services}
  */
  readonly services: DeviceGroupExtraServices[] | cdktf.IResolvable;
}

export function deviceGroupExtraToTerraform(struct?: DeviceGroupExtra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    account: cdktf.listMapper(deviceGroupExtraAccountToTerraform, true)(struct!.account),
    default: cdktf.listMapper(deviceGroupExtraDefaultToTerraform, true)(struct!.default),
    services: cdktf.listMapper(deviceGroupExtraServicesToTerraform, true)(struct!.services),
  }
}


export function deviceGroupExtraToHclTerraform(struct?: DeviceGroupExtra | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    account: {
      value: cdktf.listMapperHcl(deviceGroupExtraAccountToHclTerraform, true)(struct!.account),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraAccountList",
    },
    default: {
      value: cdktf.listMapperHcl(deviceGroupExtraDefaultToHclTerraform, true)(struct!.default),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraDefaultList",
    },
    services: {
      value: cdktf.listMapperHcl(deviceGroupExtraServicesToHclTerraform, true)(struct!.services),
      isBlock: true,
      type: "list",
      storageClassType: "DeviceGroupExtraServicesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DeviceGroupExtraOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DeviceGroupExtra | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._account?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.account = this._account?.internalValue;
    }
    if (this._default?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default?.internalValue;
    }
    if (this._services?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.services = this._services?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DeviceGroupExtra | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._account.internalValue = undefined;
      this._default.internalValue = undefined;
      this._services.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._account.internalValue = value.account;
      this._default.internalValue = value.default;
      this._services.internalValue = value.services;
    }
  }

  // devices - computed: true, optional: false, required: false
  private _devices = new DeviceGroupExtraDevicesList(this, "devices", false);
  public get devices() {
    return this._devices;
  }

  // account - computed: false, optional: false, required: true
  private _account = new DeviceGroupExtraAccountList(this, "account", false);
  public get account() {
    return this._account;
  }
  public putAccount(value: DeviceGroupExtraAccount[] | cdktf.IResolvable) {
    this._account.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get accountInput() {
    return this._account.internalValue;
  }

  // default - computed: false, optional: false, required: true
  private _default = new DeviceGroupExtraDefaultList(this, "default", false);
  public get default() {
    return this._default;
  }
  public putDefault(value: DeviceGroupExtraDefault[] | cdktf.IResolvable) {
    this._default.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default.internalValue;
  }

  // services - computed: false, optional: false, required: true
  private _services = new DeviceGroupExtraServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: DeviceGroupExtraServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }
}

export class DeviceGroupExtraList extends cdktf.ComplexList {
  public internalValue? : DeviceGroupExtra[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DeviceGroupExtraOutputReference {
    return new DeviceGroupExtraOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
