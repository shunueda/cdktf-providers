// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderGslbSiteSlbDevOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify SLB device name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#device_name DataThunderGslbSiteSlbDevOper#device_name}
  */
  readonly deviceName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#id DataThunderGslbSiteSlbDevOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * SiteName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#site_name DataThunderGslbSiteSlbDevOper#site_name}
  */
  readonly siteName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#oper DataThunderGslbSiteSlbDevOper#oper}
  */
  readonly oper?: DataThunderGslbSiteSlbDevOperOper;
  /**
  * vip_server block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#vip_server DataThunderGslbSiteSlbDevOper#vip_server}
  */
  readonly vipServer?: DataThunderGslbSiteSlbDevOperVipServer;
}
export interface DataThunderGslbSiteSlbDevOperOperClientLdnsListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#age DataThunderGslbSiteSlbDevOper#age}
  */
  readonly age?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#client_ip DataThunderGslbSiteSlbDevOper#client_ip}
  */
  readonly clientIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#rdt_sample1 DataThunderGslbSiteSlbDevOper#rdt_sample1}
  */
  readonly rdtSample1?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#rdt_sample2 DataThunderGslbSiteSlbDevOper#rdt_sample2}
  */
  readonly rdtSample2?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#rdt_sample3 DataThunderGslbSiteSlbDevOper#rdt_sample3}
  */
  readonly rdtSample3?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#rdt_sample4 DataThunderGslbSiteSlbDevOper#rdt_sample4}
  */
  readonly rdtSample4?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#rdt_sample5 DataThunderGslbSiteSlbDevOper#rdt_sample5}
  */
  readonly rdtSample5?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#rdt_sample6 DataThunderGslbSiteSlbDevOper#rdt_sample6}
  */
  readonly rdtSample6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#rdt_sample7 DataThunderGslbSiteSlbDevOper#rdt_sample7}
  */
  readonly rdtSample7?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#rdt_sample8 DataThunderGslbSiteSlbDevOper#rdt_sample8}
  */
  readonly rdtSample8?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#type DataThunderGslbSiteSlbDevOper#type}
  */
  readonly type?: string;
}

export function dataThunderGslbSiteSlbDevOperOperClientLdnsListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperOperClientLdnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    age: cdktf.numberToTerraform(struct!.age),
    client_ip: cdktf.stringToTerraform(struct!.clientIp),
    rdt_sample1: cdktf.numberToTerraform(struct!.rdtSample1),
    rdt_sample2: cdktf.numberToTerraform(struct!.rdtSample2),
    rdt_sample3: cdktf.numberToTerraform(struct!.rdtSample3),
    rdt_sample4: cdktf.numberToTerraform(struct!.rdtSample4),
    rdt_sample5: cdktf.numberToTerraform(struct!.rdtSample5),
    rdt_sample6: cdktf.numberToTerraform(struct!.rdtSample6),
    rdt_sample7: cdktf.numberToTerraform(struct!.rdtSample7),
    rdt_sample8: cdktf.numberToTerraform(struct!.rdtSample8),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataThunderGslbSiteSlbDevOperOperClientLdnsListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperOperClientLdnsListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    age: {
      value: cdktf.numberToHclTerraform(struct!.age),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ip: {
      value: cdktf.stringToHclTerraform(struct!.clientIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    rdt_sample1: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample1),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample2: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample2),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample3: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample3),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample4: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample5: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample5),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample6: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample7: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample7),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rdt_sample8: {
      value: cdktf.numberToHclTerraform(struct!.rdtSample8),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperOperClientLdnsListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperOperClientLdnsListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._age !== undefined) {
      hasAnyValues = true;
      internalValueResult.age = this._age;
    }
    if (this._clientIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientIp = this._clientIp;
    }
    if (this._rdtSample1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample1 = this._rdtSample1;
    }
    if (this._rdtSample2 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample2 = this._rdtSample2;
    }
    if (this._rdtSample3 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample3 = this._rdtSample3;
    }
    if (this._rdtSample4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample4 = this._rdtSample4;
    }
    if (this._rdtSample5 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample5 = this._rdtSample5;
    }
    if (this._rdtSample6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample6 = this._rdtSample6;
    }
    if (this._rdtSample7 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample7 = this._rdtSample7;
    }
    if (this._rdtSample8 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rdtSample8 = this._rdtSample8;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperOperClientLdnsListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._age = undefined;
      this._clientIp = undefined;
      this._rdtSample1 = undefined;
      this._rdtSample2 = undefined;
      this._rdtSample3 = undefined;
      this._rdtSample4 = undefined;
      this._rdtSample5 = undefined;
      this._rdtSample6 = undefined;
      this._rdtSample7 = undefined;
      this._rdtSample8 = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._age = value.age;
      this._clientIp = value.clientIp;
      this._rdtSample1 = value.rdtSample1;
      this._rdtSample2 = value.rdtSample2;
      this._rdtSample3 = value.rdtSample3;
      this._rdtSample4 = value.rdtSample4;
      this._rdtSample5 = value.rdtSample5;
      this._rdtSample6 = value.rdtSample6;
      this._rdtSample7 = value.rdtSample7;
      this._rdtSample8 = value.rdtSample8;
      this._type = value.type;
    }
  }

  // age - computed: false, optional: true, required: false
  private _age?: number; 
  public get age() {
    return this.getNumberAttribute('age');
  }
  public set age(value: number) {
    this._age = value;
  }
  public resetAge() {
    this._age = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ageInput() {
    return this._age;
  }

  // client_ip - computed: false, optional: true, required: false
  private _clientIp?: string; 
  public get clientIp() {
    return this.getStringAttribute('client_ip');
  }
  public set clientIp(value: string) {
    this._clientIp = value;
  }
  public resetClientIp() {
    this._clientIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIpInput() {
    return this._clientIp;
  }

  // rdt_sample1 - computed: false, optional: true, required: false
  private _rdtSample1?: number; 
  public get rdtSample1() {
    return this.getNumberAttribute('rdt_sample1');
  }
  public set rdtSample1(value: number) {
    this._rdtSample1 = value;
  }
  public resetRdtSample1() {
    this._rdtSample1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample1Input() {
    return this._rdtSample1;
  }

  // rdt_sample2 - computed: false, optional: true, required: false
  private _rdtSample2?: number; 
  public get rdtSample2() {
    return this.getNumberAttribute('rdt_sample2');
  }
  public set rdtSample2(value: number) {
    this._rdtSample2 = value;
  }
  public resetRdtSample2() {
    this._rdtSample2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample2Input() {
    return this._rdtSample2;
  }

  // rdt_sample3 - computed: false, optional: true, required: false
  private _rdtSample3?: number; 
  public get rdtSample3() {
    return this.getNumberAttribute('rdt_sample3');
  }
  public set rdtSample3(value: number) {
    this._rdtSample3 = value;
  }
  public resetRdtSample3() {
    this._rdtSample3 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample3Input() {
    return this._rdtSample3;
  }

  // rdt_sample4 - computed: false, optional: true, required: false
  private _rdtSample4?: number; 
  public get rdtSample4() {
    return this.getNumberAttribute('rdt_sample4');
  }
  public set rdtSample4(value: number) {
    this._rdtSample4 = value;
  }
  public resetRdtSample4() {
    this._rdtSample4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample4Input() {
    return this._rdtSample4;
  }

  // rdt_sample5 - computed: false, optional: true, required: false
  private _rdtSample5?: number; 
  public get rdtSample5() {
    return this.getNumberAttribute('rdt_sample5');
  }
  public set rdtSample5(value: number) {
    this._rdtSample5 = value;
  }
  public resetRdtSample5() {
    this._rdtSample5 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample5Input() {
    return this._rdtSample5;
  }

  // rdt_sample6 - computed: false, optional: true, required: false
  private _rdtSample6?: number; 
  public get rdtSample6() {
    return this.getNumberAttribute('rdt_sample6');
  }
  public set rdtSample6(value: number) {
    this._rdtSample6 = value;
  }
  public resetRdtSample6() {
    this._rdtSample6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample6Input() {
    return this._rdtSample6;
  }

  // rdt_sample7 - computed: false, optional: true, required: false
  private _rdtSample7?: number; 
  public get rdtSample7() {
    return this.getNumberAttribute('rdt_sample7');
  }
  public set rdtSample7(value: number) {
    this._rdtSample7 = value;
  }
  public resetRdtSample7() {
    this._rdtSample7 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample7Input() {
    return this._rdtSample7;
  }

  // rdt_sample8 - computed: false, optional: true, required: false
  private _rdtSample8?: number; 
  public get rdtSample8() {
    return this.getNumberAttribute('rdt_sample8');
  }
  public set rdtSample8(value: number) {
    this._rdtSample8 = value;
  }
  public resetRdtSample8() {
    this._rdtSample8 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rdtSample8Input() {
    return this._rdtSample8;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataThunderGslbSiteSlbDevOperOperClientLdnsListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperOperClientLdnsListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperOperClientLdnsListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperOperClientLdnsListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#port_num DataThunderGslbSiteSlbDevOper#port_num}
  */
  readonly portNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#port_protocol DataThunderGslbSiteSlbDevOper#port_protocol}
  */
  readonly portProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#port_state DataThunderGslbSiteSlbDevOper#port_state}
  */
  readonly portState?: string;
}

export function dataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_num: cdktf.numberToTerraform(struct!.portNum),
    port_protocol: cdktf.stringToTerraform(struct!.portProtocol),
    port_state: cdktf.stringToTerraform(struct!.portState),
  }
}


export function dataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    port_protocol: {
      value: cdktf.stringToHclTerraform(struct!.portProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_state: {
      value: cdktf.stringToHclTerraform(struct!.portState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._portProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.portProtocol = this._portProtocol;
    }
    if (this._portState !== undefined) {
      hasAnyValues = true;
      internalValueResult.portState = this._portState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNum = undefined;
      this._portProtocol = undefined;
      this._portState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNum = value.portNum;
      this._portProtocol = value.portProtocol;
      this._portState = value.portState;
    }
  }

  // port_num - computed: false, optional: true, required: false
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  public resetPortNum() {
    this._portNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // port_protocol - computed: false, optional: true, required: false
  private _portProtocol?: string; 
  public get portProtocol() {
    return this.getStringAttribute('port_protocol');
  }
  public set portProtocol(value: string) {
    this._portProtocol = value;
  }
  public resetPortProtocol() {
    this._portProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portProtocolInput() {
    return this._portProtocol;
  }

  // port_state - computed: false, optional: true, required: false
  private _portState?: string; 
  public get portState() {
    return this.getStringAttribute('port_state');
  }
  public set portState(value: string) {
    this._portState = value;
  }
  public resetPortState() {
    this._portState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portStateInput() {
    return this._portState;
  }
}

export class DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperOperDynVipserverListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dyn_svr_hits DataThunderGslbSiteSlbDevOper#dyn_svr_hits}
  */
  readonly dynSvrHits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dyn_svr_ip DataThunderGslbSiteSlbDevOper#dyn_svr_ip}
  */
  readonly dynSvrIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dyn_svr_state DataThunderGslbSiteSlbDevOper#dyn_svr_state}
  */
  readonly dynSvrState?: string;
  /**
  * port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#port_list DataThunderGslbSiteSlbDevOper#port_list}
  */
  readonly portList?: DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteSlbDevOperOperDynVipserverListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperOperDynVipserverListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dyn_svr_hits: cdktf.numberToTerraform(struct!.dynSvrHits),
    dyn_svr_ip: cdktf.stringToTerraform(struct!.dynSvrIp),
    dyn_svr_state: cdktf.stringToTerraform(struct!.dynSvrState),
    port_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructToTerraform, true)(struct!.portList),
  }
}


export function dataThunderGslbSiteSlbDevOperOperDynVipserverListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperOperDynVipserverListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dyn_svr_hits: {
      value: cdktf.numberToHclTerraform(struct!.dynSvrHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_svr_ip: {
      value: cdktf.stringToHclTerraform(struct!.dynSvrIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dyn_svr_state: {
      value: cdktf.stringToHclTerraform(struct!.dynSvrState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructToHclTerraform, true)(struct!.portList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperOperDynVipserverListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperOperDynVipserverListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynSvrHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynSvrHits = this._dynSvrHits;
    }
    if (this._dynSvrIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynSvrIp = this._dynSvrIp;
    }
    if (this._dynSvrState !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynSvrState = this._dynSvrState;
    }
    if (this._portList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.portList = this._portList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperOperDynVipserverListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynSvrHits = undefined;
      this._dynSvrIp = undefined;
      this._dynSvrState = undefined;
      this._portList.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynSvrHits = value.dynSvrHits;
      this._dynSvrIp = value.dynSvrIp;
      this._dynSvrState = value.dynSvrState;
      this._portList.internalValue = value.portList;
    }
  }

  // dyn_svr_hits - computed: false, optional: true, required: false
  private _dynSvrHits?: number; 
  public get dynSvrHits() {
    return this.getNumberAttribute('dyn_svr_hits');
  }
  public set dynSvrHits(value: number) {
    this._dynSvrHits = value;
  }
  public resetDynSvrHits() {
    this._dynSvrHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynSvrHitsInput() {
    return this._dynSvrHits;
  }

  // dyn_svr_ip - computed: false, optional: true, required: false
  private _dynSvrIp?: string; 
  public get dynSvrIp() {
    return this.getStringAttribute('dyn_svr_ip');
  }
  public set dynSvrIp(value: string) {
    this._dynSvrIp = value;
  }
  public resetDynSvrIp() {
    this._dynSvrIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynSvrIpInput() {
    return this._dynSvrIp;
  }

  // dyn_svr_state - computed: false, optional: true, required: false
  private _dynSvrState?: string; 
  public get dynSvrState() {
    return this.getStringAttribute('dyn_svr_state');
  }
  public set dynSvrState(value: string) {
    this._dynSvrState = value;
  }
  public resetDynSvrState() {
    this._dynSvrState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynSvrStateInput() {
    return this._dynSvrState;
  }

  // port_list - computed: false, optional: true, required: false
  private _portList = new DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStructList(this, "port_list", false);
  public get portList() {
    return this._portList;
  }
  public putPortList(value: DataThunderGslbSiteSlbDevOperOperDynVipserverListPortListStruct[] | cdktf.IResolvable) {
    this._portList.internalValue = value;
  }
  public resetPortList() {
    this._portList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portListInput() {
    return this._portList.internalValue;
  }
}

export class DataThunderGslbSiteSlbDevOperOperDynVipserverListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperOperDynVipserverListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperOperDynVipserverListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperOperDynVipserverListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperOperDynamicDevListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dyn_dev_inherit_vipserver DataThunderGslbSiteSlbDevOper#dyn_dev_inherit_vipserver}
  */
  readonly dynDevInheritVipserver?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dyn_dev_ip DataThunderGslbSiteSlbDevOper#dyn_dev_ip}
  */
  readonly dynDevIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dyn_dev_name DataThunderGslbSiteSlbDevOper#dyn_dev_name}
  */
  readonly dynDevName?: string;
}

export function dataThunderGslbSiteSlbDevOperOperDynamicDevListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperOperDynamicDevListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dyn_dev_inherit_vipserver: cdktf.numberToTerraform(struct!.dynDevInheritVipserver),
    dyn_dev_ip: cdktf.stringToTerraform(struct!.dynDevIp),
    dyn_dev_name: cdktf.stringToTerraform(struct!.dynDevName),
  }
}


export function dataThunderGslbSiteSlbDevOperOperDynamicDevListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperOperDynamicDevListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dyn_dev_inherit_vipserver: {
      value: cdktf.numberToHclTerraform(struct!.dynDevInheritVipserver),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dyn_dev_ip: {
      value: cdktf.stringToHclTerraform(struct!.dynDevIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dyn_dev_name: {
      value: cdktf.stringToHclTerraform(struct!.dynDevName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperOperDynamicDevListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperOperDynamicDevListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dynDevInheritVipserver !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynDevInheritVipserver = this._dynDevInheritVipserver;
    }
    if (this._dynDevIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynDevIp = this._dynDevIp;
    }
    if (this._dynDevName !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynDevName = this._dynDevName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperOperDynamicDevListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dynDevInheritVipserver = undefined;
      this._dynDevIp = undefined;
      this._dynDevName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dynDevInheritVipserver = value.dynDevInheritVipserver;
      this._dynDevIp = value.dynDevIp;
      this._dynDevName = value.dynDevName;
    }
  }

  // dyn_dev_inherit_vipserver - computed: false, optional: true, required: false
  private _dynDevInheritVipserver?: number; 
  public get dynDevInheritVipserver() {
    return this.getNumberAttribute('dyn_dev_inherit_vipserver');
  }
  public set dynDevInheritVipserver(value: number) {
    this._dynDevInheritVipserver = value;
  }
  public resetDynDevInheritVipserver() {
    this._dynDevInheritVipserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynDevInheritVipserverInput() {
    return this._dynDevInheritVipserver;
  }

  // dyn_dev_ip - computed: false, optional: true, required: false
  private _dynDevIp?: string; 
  public get dynDevIp() {
    return this.getStringAttribute('dyn_dev_ip');
  }
  public set dynDevIp(value: string) {
    this._dynDevIp = value;
  }
  public resetDynDevIp() {
    this._dynDevIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynDevIpInput() {
    return this._dynDevIp;
  }

  // dyn_dev_name - computed: false, optional: true, required: false
  private _dynDevName?: string; 
  public get dynDevName() {
    return this.getStringAttribute('dyn_dev_name');
  }
  public set dynDevName(value: string) {
    this._dynDevName = value;
  }
  public resetDynDevName() {
    this._dynDevName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynDevNameInput() {
    return this._dynDevName;
  }
}

export class DataThunderGslbSiteSlbDevOperOperDynamicDevListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperOperDynamicDevListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperOperDynamicDevListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperOperDynamicDevListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_admin_preference DataThunderGslbSiteSlbDevOper#dev_admin_preference}
  */
  readonly devAdminPreference?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_attr DataThunderGslbSiteSlbDevOper#dev_attr}
  */
  readonly devAttr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_creation_type DataThunderGslbSiteSlbDevOper#dev_creation_type}
  */
  readonly devCreationType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_gw_state DataThunderGslbSiteSlbDevOper#dev_gw_state}
  */
  readonly devGwState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_ip DataThunderGslbSiteSlbDevOper#dev_ip}
  */
  readonly devIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_ip_cnt DataThunderGslbSiteSlbDevOper#dev_ip_cnt}
  */
  readonly devIpCnt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_name DataThunderGslbSiteSlbDevOper#dev_name}
  */
  readonly devName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_session_num DataThunderGslbSiteSlbDevOper#dev_session_num}
  */
  readonly devSessionNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_session_util DataThunderGslbSiteSlbDevOper#dev_session_util}
  */
  readonly devSessionUtil?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_state DataThunderGslbSiteSlbDevOper#dev_state}
  */
  readonly devState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#fqdn_based DataThunderGslbSiteSlbDevOper#fqdn_based}
  */
  readonly fqdnBased?: number;
  /**
  * client_ldns_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#client_ldns_list DataThunderGslbSiteSlbDevOper#client_ldns_list}
  */
  readonly clientLdnsList?: DataThunderGslbSiteSlbDevOperOperClientLdnsListStruct[] | cdktf.IResolvable;
  /**
  * dyn_vipserver_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dyn_vipserver_list DataThunderGslbSiteSlbDevOper#dyn_vipserver_list}
  */
  readonly dynVipserverList?: DataThunderGslbSiteSlbDevOperOperDynVipserverListStruct[] | cdktf.IResolvable;
  /**
  * dynamic_dev_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dynamic_dev_list DataThunderGslbSiteSlbDevOper#dynamic_dev_list}
  */
  readonly dynamicDevList?: DataThunderGslbSiteSlbDevOperOperDynamicDevListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteSlbDevOperOperToTerraform(struct?: DataThunderGslbSiteSlbDevOperOperOutputReference | DataThunderGslbSiteSlbDevOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_admin_preference: cdktf.numberToTerraform(struct!.devAdminPreference),
    dev_attr: cdktf.stringToTerraform(struct!.devAttr),
    dev_creation_type: cdktf.numberToTerraform(struct!.devCreationType),
    dev_gw_state: cdktf.stringToTerraform(struct!.devGwState),
    dev_ip: cdktf.stringToTerraform(struct!.devIp),
    dev_ip_cnt: cdktf.numberToTerraform(struct!.devIpCnt),
    dev_name: cdktf.stringToTerraform(struct!.devName),
    dev_session_num: cdktf.numberToTerraform(struct!.devSessionNum),
    dev_session_util: cdktf.numberToTerraform(struct!.devSessionUtil),
    dev_state: cdktf.stringToTerraform(struct!.devState),
    fqdn_based: cdktf.numberToTerraform(struct!.fqdnBased),
    client_ldns_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperOperClientLdnsListStructToTerraform, true)(struct!.clientLdnsList),
    dyn_vipserver_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperOperDynVipserverListStructToTerraform, true)(struct!.dynVipserverList),
    dynamic_dev_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperOperDynamicDevListStructToTerraform, true)(struct!.dynamicDevList),
  }
}


export function dataThunderGslbSiteSlbDevOperOperToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperOperOutputReference | DataThunderGslbSiteSlbDevOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_admin_preference: {
      value: cdktf.numberToHclTerraform(struct!.devAdminPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_attr: {
      value: cdktf.stringToHclTerraform(struct!.devAttr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_creation_type: {
      value: cdktf.numberToHclTerraform(struct!.devCreationType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_gw_state: {
      value: cdktf.stringToHclTerraform(struct!.devGwState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_ip: {
      value: cdktf.stringToHclTerraform(struct!.devIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_ip_cnt: {
      value: cdktf.numberToHclTerraform(struct!.devIpCnt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_name: {
      value: cdktf.stringToHclTerraform(struct!.devName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_session_num: {
      value: cdktf.numberToHclTerraform(struct!.devSessionNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_session_util: {
      value: cdktf.numberToHclTerraform(struct!.devSessionUtil),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_state: {
      value: cdktf.stringToHclTerraform(struct!.devState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fqdn_based: {
      value: cdktf.numberToHclTerraform(struct!.fqdnBased),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    client_ldns_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperOperClientLdnsListStructToHclTerraform, true)(struct!.clientLdnsList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperOperClientLdnsListStructList",
    },
    dyn_vipserver_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperOperDynVipserverListStructToHclTerraform, true)(struct!.dynVipserverList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperOperDynVipserverListStructList",
    },
    dynamic_dev_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperOperDynamicDevListStructToHclTerraform, true)(struct!.dynamicDevList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperOperDynamicDevListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devAdminPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.devAdminPreference = this._devAdminPreference;
    }
    if (this._devAttr !== undefined) {
      hasAnyValues = true;
      internalValueResult.devAttr = this._devAttr;
    }
    if (this._devCreationType !== undefined) {
      hasAnyValues = true;
      internalValueResult.devCreationType = this._devCreationType;
    }
    if (this._devGwState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devGwState = this._devGwState;
    }
    if (this._devIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.devIp = this._devIp;
    }
    if (this._devIpCnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.devIpCnt = this._devIpCnt;
    }
    if (this._devName !== undefined) {
      hasAnyValues = true;
      internalValueResult.devName = this._devName;
    }
    if (this._devSessionNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.devSessionNum = this._devSessionNum;
    }
    if (this._devSessionUtil !== undefined) {
      hasAnyValues = true;
      internalValueResult.devSessionUtil = this._devSessionUtil;
    }
    if (this._devState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devState = this._devState;
    }
    if (this._fqdnBased !== undefined) {
      hasAnyValues = true;
      internalValueResult.fqdnBased = this._fqdnBased;
    }
    if (this._clientLdnsList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientLdnsList = this._clientLdnsList?.internalValue;
    }
    if (this._dynVipserverList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynVipserverList = this._dynVipserverList?.internalValue;
    }
    if (this._dynamicDevList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamicDevList = this._dynamicDevList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._devAdminPreference = undefined;
      this._devAttr = undefined;
      this._devCreationType = undefined;
      this._devGwState = undefined;
      this._devIp = undefined;
      this._devIpCnt = undefined;
      this._devName = undefined;
      this._devSessionNum = undefined;
      this._devSessionUtil = undefined;
      this._devState = undefined;
      this._fqdnBased = undefined;
      this._clientLdnsList.internalValue = undefined;
      this._dynVipserverList.internalValue = undefined;
      this._dynamicDevList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._devAdminPreference = value.devAdminPreference;
      this._devAttr = value.devAttr;
      this._devCreationType = value.devCreationType;
      this._devGwState = value.devGwState;
      this._devIp = value.devIp;
      this._devIpCnt = value.devIpCnt;
      this._devName = value.devName;
      this._devSessionNum = value.devSessionNum;
      this._devSessionUtil = value.devSessionUtil;
      this._devState = value.devState;
      this._fqdnBased = value.fqdnBased;
      this._clientLdnsList.internalValue = value.clientLdnsList;
      this._dynVipserverList.internalValue = value.dynVipserverList;
      this._dynamicDevList.internalValue = value.dynamicDevList;
    }
  }

  // dev_admin_preference - computed: false, optional: true, required: false
  private _devAdminPreference?: number; 
  public get devAdminPreference() {
    return this.getNumberAttribute('dev_admin_preference');
  }
  public set devAdminPreference(value: number) {
    this._devAdminPreference = value;
  }
  public resetDevAdminPreference() {
    this._devAdminPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devAdminPreferenceInput() {
    return this._devAdminPreference;
  }

  // dev_attr - computed: false, optional: true, required: false
  private _devAttr?: string; 
  public get devAttr() {
    return this.getStringAttribute('dev_attr');
  }
  public set devAttr(value: string) {
    this._devAttr = value;
  }
  public resetDevAttr() {
    this._devAttr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devAttrInput() {
    return this._devAttr;
  }

  // dev_creation_type - computed: false, optional: true, required: false
  private _devCreationType?: number; 
  public get devCreationType() {
    return this.getNumberAttribute('dev_creation_type');
  }
  public set devCreationType(value: number) {
    this._devCreationType = value;
  }
  public resetDevCreationType() {
    this._devCreationType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devCreationTypeInput() {
    return this._devCreationType;
  }

  // dev_gw_state - computed: false, optional: true, required: false
  private _devGwState?: string; 
  public get devGwState() {
    return this.getStringAttribute('dev_gw_state');
  }
  public set devGwState(value: string) {
    this._devGwState = value;
  }
  public resetDevGwState() {
    this._devGwState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devGwStateInput() {
    return this._devGwState;
  }

  // dev_ip - computed: false, optional: true, required: false
  private _devIp?: string; 
  public get devIp() {
    return this.getStringAttribute('dev_ip');
  }
  public set devIp(value: string) {
    this._devIp = value;
  }
  public resetDevIp() {
    this._devIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devIpInput() {
    return this._devIp;
  }

  // dev_ip_cnt - computed: false, optional: true, required: false
  private _devIpCnt?: number; 
  public get devIpCnt() {
    return this.getNumberAttribute('dev_ip_cnt');
  }
  public set devIpCnt(value: number) {
    this._devIpCnt = value;
  }
  public resetDevIpCnt() {
    this._devIpCnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devIpCntInput() {
    return this._devIpCnt;
  }

  // dev_name - computed: false, optional: true, required: false
  private _devName?: string; 
  public get devName() {
    return this.getStringAttribute('dev_name');
  }
  public set devName(value: string) {
    this._devName = value;
  }
  public resetDevName() {
    this._devName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devNameInput() {
    return this._devName;
  }

  // dev_session_num - computed: false, optional: true, required: false
  private _devSessionNum?: number; 
  public get devSessionNum() {
    return this.getNumberAttribute('dev_session_num');
  }
  public set devSessionNum(value: number) {
    this._devSessionNum = value;
  }
  public resetDevSessionNum() {
    this._devSessionNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devSessionNumInput() {
    return this._devSessionNum;
  }

  // dev_session_util - computed: false, optional: true, required: false
  private _devSessionUtil?: number; 
  public get devSessionUtil() {
    return this.getNumberAttribute('dev_session_util');
  }
  public set devSessionUtil(value: number) {
    this._devSessionUtil = value;
  }
  public resetDevSessionUtil() {
    this._devSessionUtil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devSessionUtilInput() {
    return this._devSessionUtil;
  }

  // dev_state - computed: false, optional: true, required: false
  private _devState?: string; 
  public get devState() {
    return this.getStringAttribute('dev_state');
  }
  public set devState(value: string) {
    this._devState = value;
  }
  public resetDevState() {
    this._devState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devStateInput() {
    return this._devState;
  }

  // fqdn_based - computed: false, optional: true, required: false
  private _fqdnBased?: number; 
  public get fqdnBased() {
    return this.getNumberAttribute('fqdn_based');
  }
  public set fqdnBased(value: number) {
    this._fqdnBased = value;
  }
  public resetFqdnBased() {
    this._fqdnBased = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fqdnBasedInput() {
    return this._fqdnBased;
  }

  // client_ldns_list - computed: false, optional: true, required: false
  private _clientLdnsList = new DataThunderGslbSiteSlbDevOperOperClientLdnsListStructList(this, "client_ldns_list", false);
  public get clientLdnsList() {
    return this._clientLdnsList;
  }
  public putClientLdnsList(value: DataThunderGslbSiteSlbDevOperOperClientLdnsListStruct[] | cdktf.IResolvable) {
    this._clientLdnsList.internalValue = value;
  }
  public resetClientLdnsList() {
    this._clientLdnsList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientLdnsListInput() {
    return this._clientLdnsList.internalValue;
  }

  // dyn_vipserver_list - computed: false, optional: true, required: false
  private _dynVipserverList = new DataThunderGslbSiteSlbDevOperOperDynVipserverListStructList(this, "dyn_vipserver_list", false);
  public get dynVipserverList() {
    return this._dynVipserverList;
  }
  public putDynVipserverList(value: DataThunderGslbSiteSlbDevOperOperDynVipserverListStruct[] | cdktf.IResolvable) {
    this._dynVipserverList.internalValue = value;
  }
  public resetDynVipserverList() {
    this._dynVipserverList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynVipserverListInput() {
    return this._dynVipserverList.internalValue;
  }

  // dynamic_dev_list - computed: false, optional: true, required: false
  private _dynamicDevList = new DataThunderGslbSiteSlbDevOperOperDynamicDevListStructList(this, "dynamic_dev_list", false);
  public get dynamicDevList() {
    return this._dynamicDevList;
  }
  public putDynamicDevList(value: DataThunderGslbSiteSlbDevOperOperDynamicDevListStruct[] | cdktf.IResolvable) {
    this._dynamicDevList.internalValue = value;
  }
  public resetDynamicDevList() {
    this._dynamicDevList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicDevListInput() {
    return this._dynamicDevList.internalValue;
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerOper {
}

export function dataThunderGslbSiteSlbDevOperVipServerOperToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerOperOutputReference | DataThunderGslbSiteSlbDevOperVipServerOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerOperToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerOperOutputReference | DataThunderGslbSiteSlbDevOperVipServerOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataThunderGslbSiteSlbDevOperVipServerOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_dev_curr_conn DataThunderGslbSiteSlbDevOper#dev_vip_port_dev_curr_conn}
  */
  readonly devVipPortDevCurrConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_num DataThunderGslbSiteSlbDevOper#dev_vip_port_num}
  */
  readonly devVipPortNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_protocol DataThunderGslbSiteSlbDevOper#dev_vip_port_protocol}
  */
  readonly devVipPortProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_service_name DataThunderGslbSiteSlbDevOper#dev_vip_port_service_name}
  */
  readonly devVipPortServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_state DataThunderGslbSiteSlbDevOper#dev_vip_port_state}
  */
  readonly devVipPortState?: string;
}

export function dataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_port_dev_curr_conn: cdktf.numberToTerraform(struct!.devVipPortDevCurrConn),
    dev_vip_port_num: cdktf.numberToTerraform(struct!.devVipPortNum),
    dev_vip_port_protocol: cdktf.stringToTerraform(struct!.devVipPortProtocol),
    dev_vip_port_service_name: cdktf.stringToTerraform(struct!.devVipPortServiceName),
    dev_vip_port_state: cdktf.stringToTerraform(struct!.devVipPortState),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_port_dev_curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.devVipPortDevCurrConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_num: {
      value: cdktf.numberToHclTerraform(struct!.devVipPortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_protocol: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_port_service_name: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_port_state: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipPortDevCurrConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortDevCurrConn = this._devVipPortDevCurrConn;
    }
    if (this._devVipPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortNum = this._devVipPortNum;
    }
    if (this._devVipPortProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortProtocol = this._devVipPortProtocol;
    }
    if (this._devVipPortServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortServiceName = this._devVipPortServiceName;
    }
    if (this._devVipPortState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortState = this._devVipPortState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devVipPortDevCurrConn = undefined;
      this._devVipPortNum = undefined;
      this._devVipPortProtocol = undefined;
      this._devVipPortServiceName = undefined;
      this._devVipPortState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devVipPortDevCurrConn = value.devVipPortDevCurrConn;
      this._devVipPortNum = value.devVipPortNum;
      this._devVipPortProtocol = value.devVipPortProtocol;
      this._devVipPortServiceName = value.devVipPortServiceName;
      this._devVipPortState = value.devVipPortState;
    }
  }

  // dev_vip_port_dev_curr_conn - computed: false, optional: true, required: false
  private _devVipPortDevCurrConn?: number; 
  public get devVipPortDevCurrConn() {
    return this.getNumberAttribute('dev_vip_port_dev_curr_conn');
  }
  public set devVipPortDevCurrConn(value: number) {
    this._devVipPortDevCurrConn = value;
  }
  public resetDevVipPortDevCurrConn() {
    this._devVipPortDevCurrConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortDevCurrConnInput() {
    return this._devVipPortDevCurrConn;
  }

  // dev_vip_port_num - computed: false, optional: true, required: false
  private _devVipPortNum?: number; 
  public get devVipPortNum() {
    return this.getNumberAttribute('dev_vip_port_num');
  }
  public set devVipPortNum(value: number) {
    this._devVipPortNum = value;
  }
  public resetDevVipPortNum() {
    this._devVipPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortNumInput() {
    return this._devVipPortNum;
  }

  // dev_vip_port_protocol - computed: false, optional: true, required: false
  private _devVipPortProtocol?: string; 
  public get devVipPortProtocol() {
    return this.getStringAttribute('dev_vip_port_protocol');
  }
  public set devVipPortProtocol(value: string) {
    this._devVipPortProtocol = value;
  }
  public resetDevVipPortProtocol() {
    this._devVipPortProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortProtocolInput() {
    return this._devVipPortProtocol;
  }

  // dev_vip_port_service_name - computed: false, optional: true, required: false
  private _devVipPortServiceName?: string; 
  public get devVipPortServiceName() {
    return this.getStringAttribute('dev_vip_port_service_name');
  }
  public set devVipPortServiceName(value: string) {
    this._devVipPortServiceName = value;
  }
  public resetDevVipPortServiceName() {
    this._devVipPortServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortServiceNameInput() {
    return this._devVipPortServiceName;
  }

  // dev_vip_port_state - computed: false, optional: true, required: false
  private _devVipPortState?: string; 
  public get devVipPortState() {
    return this.getStringAttribute('dev_vip_port_state');
  }
  public set devVipPortState(value: string) {
    this._devVipPortState = value;
  }
  public resetDevVipPortState() {
    this._devVipPortState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortStateInput() {
    return this._devVipPortState;
  }
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_addr DataThunderGslbSiteSlbDevOper#dev_vip_addr}
  */
  readonly devVipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_state DataThunderGslbSiteSlbDevOper#dev_vip_state}
  */
  readonly devVipState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#disabled DataThunderGslbSiteSlbDevOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dynamic DataThunderGslbSiteSlbDevOper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#gslb_protocol DataThunderGslbSiteSlbDevOper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#hits DataThunderGslbSiteSlbDevOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#local_protocol DataThunderGslbSiteSlbDevOper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#manually_health_check DataThunderGslbSiteSlbDevOper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#node_name DataThunderGslbSiteSlbDevOper#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#port_count DataThunderGslbSiteSlbDevOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#recent DataThunderGslbSiteSlbDevOper#recent}
  */
  readonly recent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#service_ip DataThunderGslbSiteSlbDevOper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#shared DataThunderGslbSiteSlbDevOper#shared}
  */
  readonly shared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#use_gslb_state DataThunderGslbSiteSlbDevOper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#virtual_server DataThunderGslbSiteSlbDevOper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * dev_vip_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_list DataThunderGslbSiteSlbDevOper#dev_vip_port_list}
  */
  readonly devVipPortList?: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperOutputReference | DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_addr: cdktf.stringToTerraform(struct!.devVipAddr),
    dev_vip_state: cdktf.stringToTerraform(struct!.devVipState),
    disabled: cdktf.numberToTerraform(struct!.disabled),
    dynamic: cdktf.numberToTerraform(struct!.dynamic),
    gslb_protocol: cdktf.numberToTerraform(struct!.gslbProtocol),
    hits: cdktf.numberToTerraform(struct!.hits),
    local_protocol: cdktf.numberToTerraform(struct!.localProtocol),
    manually_health_check: cdktf.numberToTerraform(struct!.manuallyHealthCheck),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    port_count: cdktf.numberToTerraform(struct!.portCount),
    recent: cdktf.numberToTerraform(struct!.recent),
    service_ip: cdktf.stringToTerraform(struct!.serviceIp),
    shared: cdktf.numberToTerraform(struct!.shared),
    use_gslb_state: cdktf.numberToTerraform(struct!.useGslbState),
    virtual_server: cdktf.numberToTerraform(struct!.virtualServer),
    dev_vip_port_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructToTerraform, true)(struct!.devVipPortList),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperOutputReference | DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_addr: {
      value: cdktf.stringToHclTerraform(struct!.devVipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_state: {
      value: cdktf.stringToHclTerraform(struct!.devVipState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.numberToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic: {
      value: cdktf.numberToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_protocol: {
      value: cdktf.numberToHclTerraform(struct!.gslbProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_protocol: {
      value: cdktf.numberToHclTerraform(struct!.localProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manually_health_check: {
      value: cdktf.numberToHclTerraform(struct!.manuallyHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_count: {
      value: cdktf.numberToHclTerraform(struct!.portCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recent: {
      value: cdktf.numberToHclTerraform(struct!.recent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_gslb_state: {
      value: cdktf.numberToHclTerraform(struct!.useGslbState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server: {
      value: cdktf.numberToHclTerraform(struct!.virtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructToHclTerraform, true)(struct!.devVipPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipAddr = this._devVipAddr;
    }
    if (this._devVipState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipState = this._devVipState;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._gslbProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbProtocol = this._gslbProtocol;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._localProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.localProtocol = this._localProtocol;
    }
    if (this._manuallyHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.manuallyHealthCheck = this._manuallyHealthCheck;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._portCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCount = this._portCount;
    }
    if (this._recent !== undefined) {
      hasAnyValues = true;
      internalValueResult.recent = this._recent;
    }
    if (this._serviceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIp = this._serviceIp;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._useGslbState !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGslbState = this._useGslbState;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    if (this._devVipPortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortList = this._devVipPortList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._devVipAddr = undefined;
      this._devVipState = undefined;
      this._disabled = undefined;
      this._dynamic = undefined;
      this._gslbProtocol = undefined;
      this._hits = undefined;
      this._localProtocol = undefined;
      this._manuallyHealthCheck = undefined;
      this._nodeName = undefined;
      this._portCount = undefined;
      this._recent = undefined;
      this._serviceIp = undefined;
      this._shared = undefined;
      this._useGslbState = undefined;
      this._virtualServer = undefined;
      this._devVipPortList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._devVipAddr = value.devVipAddr;
      this._devVipState = value.devVipState;
      this._disabled = value.disabled;
      this._dynamic = value.dynamic;
      this._gslbProtocol = value.gslbProtocol;
      this._hits = value.hits;
      this._localProtocol = value.localProtocol;
      this._manuallyHealthCheck = value.manuallyHealthCheck;
      this._nodeName = value.nodeName;
      this._portCount = value.portCount;
      this._recent = value.recent;
      this._serviceIp = value.serviceIp;
      this._shared = value.shared;
      this._useGslbState = value.useGslbState;
      this._virtualServer = value.virtualServer;
      this._devVipPortList.internalValue = value.devVipPortList;
    }
  }

  // dev_vip_addr - computed: false, optional: true, required: false
  private _devVipAddr?: string; 
  public get devVipAddr() {
    return this.getStringAttribute('dev_vip_addr');
  }
  public set devVipAddr(value: string) {
    this._devVipAddr = value;
  }
  public resetDevVipAddr() {
    this._devVipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipAddrInput() {
    return this._devVipAddr;
  }

  // dev_vip_state - computed: false, optional: true, required: false
  private _devVipState?: string; 
  public get devVipState() {
    return this.getStringAttribute('dev_vip_state');
  }
  public set devVipState(value: string) {
    this._devVipState = value;
  }
  public resetDevVipState() {
    this._devVipState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipStateInput() {
    return this._devVipState;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: number; 
  public get disabled() {
    return this.getNumberAttribute('disabled');
  }
  public set disabled(value: number) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic?: number; 
  public get dynamic() {
    return this.getNumberAttribute('dynamic');
  }
  public set dynamic(value: number) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // gslb_protocol - computed: false, optional: true, required: false
  private _gslbProtocol?: number; 
  public get gslbProtocol() {
    return this.getNumberAttribute('gslb_protocol');
  }
  public set gslbProtocol(value: number) {
    this._gslbProtocol = value;
  }
  public resetGslbProtocol() {
    this._gslbProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbProtocolInput() {
    return this._gslbProtocol;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // local_protocol - computed: false, optional: true, required: false
  private _localProtocol?: number; 
  public get localProtocol() {
    return this.getNumberAttribute('local_protocol');
  }
  public set localProtocol(value: number) {
    this._localProtocol = value;
  }
  public resetLocalProtocol() {
    this._localProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localProtocolInput() {
    return this._localProtocol;
  }

  // manually_health_check - computed: false, optional: true, required: false
  private _manuallyHealthCheck?: number; 
  public get manuallyHealthCheck() {
    return this.getNumberAttribute('manually_health_check');
  }
  public set manuallyHealthCheck(value: number) {
    this._manuallyHealthCheck = value;
  }
  public resetManuallyHealthCheck() {
    this._manuallyHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manuallyHealthCheckInput() {
    return this._manuallyHealthCheck;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // port_count - computed: false, optional: true, required: false
  private _portCount?: number; 
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }
  public set portCount(value: number) {
    this._portCount = value;
  }
  public resetPortCount() {
    this._portCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountInput() {
    return this._portCount;
  }

  // recent - computed: false, optional: true, required: false
  private _recent?: number; 
  public get recent() {
    return this.getNumberAttribute('recent');
  }
  public set recent(value: number) {
    this._recent = value;
  }
  public resetRecent() {
    this._recent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentInput() {
    return this._recent;
  }

  // service_ip - computed: false, optional: true, required: false
  private _serviceIp?: string; 
  public get serviceIp() {
    return this.getStringAttribute('service_ip');
  }
  public set serviceIp(value: string) {
    this._serviceIp = value;
  }
  public resetServiceIp() {
    this._serviceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpInput() {
    return this._serviceIp;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // use_gslb_state - computed: false, optional: true, required: false
  private _useGslbState?: number; 
  public get useGslbState() {
    return this.getNumberAttribute('use_gslb_state');
  }
  public set useGslbState(value: number) {
    this._useGslbState = value;
  }
  public resetUseGslbState() {
    this._useGslbState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGslbStateInput() {
    return this._useGslbState;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: number; 
  public get virtualServer() {
    return this.getNumberAttribute('virtual_server');
  }
  public set virtualServer(value: number) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }

  // dev_vip_port_list - computed: false, optional: true, required: false
  private _devVipPortList = new DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStructList(this, "dev_vip_port_list", false);
  public get devVipPortList() {
    return this._devVipPortList;
  }
  public putDevVipPortList(value: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperDevVipPortListStruct[] | cdktf.IResolvable) {
    this._devVipPortList.internalValue = value;
  }
  public resetDevVipPortList() {
    this._devVipPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortListInput() {
    return this._devVipPortList.internalValue;
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStruct {
  /**
  * Specify a VIP name for the SLB device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#vip_name DataThunderGslbSiteSlbDevOper#vip_name}
  */
  readonly vipName: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#oper DataThunderGslbSiteSlbDevOper#oper}
  */
  readonly oper?: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOper;
}

export function dataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    vip_name: cdktf.stringToTerraform(struct!.vipName),
    oper: dataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    vip_name: {
      value: cdktf.stringToHclTerraform(struct!.vipName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._vipName !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipName = this._vipName;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._vipName = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._vipName = value.vipName;
      this._oper.internalValue = value.oper;
    }
  }

  // vip_name - computed: false, optional: false, required: true
  private _vipName?: string; 
  public get vipName() {
    return this.getStringAttribute('vip_name');
  }
  public set vipName(value: string) {
    this._vipName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vipNameInput() {
    return this._vipName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_dev_curr_conn DataThunderGslbSiteSlbDevOper#dev_vip_port_dev_curr_conn}
  */
  readonly devVipPortDevCurrConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_num DataThunderGslbSiteSlbDevOper#dev_vip_port_num}
  */
  readonly devVipPortNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_protocol DataThunderGslbSiteSlbDevOper#dev_vip_port_protocol}
  */
  readonly devVipPortProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_service_name DataThunderGslbSiteSlbDevOper#dev_vip_port_service_name}
  */
  readonly devVipPortServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_state DataThunderGslbSiteSlbDevOper#dev_vip_port_state}
  */
  readonly devVipPortState?: string;
}

export function dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_port_dev_curr_conn: cdktf.numberToTerraform(struct!.devVipPortDevCurrConn),
    dev_vip_port_num: cdktf.numberToTerraform(struct!.devVipPortNum),
    dev_vip_port_protocol: cdktf.stringToTerraform(struct!.devVipPortProtocol),
    dev_vip_port_service_name: cdktf.stringToTerraform(struct!.devVipPortServiceName),
    dev_vip_port_state: cdktf.stringToTerraform(struct!.devVipPortState),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_port_dev_curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.devVipPortDevCurrConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_num: {
      value: cdktf.numberToHclTerraform(struct!.devVipPortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_protocol: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_port_service_name: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_port_state: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipPortDevCurrConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortDevCurrConn = this._devVipPortDevCurrConn;
    }
    if (this._devVipPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortNum = this._devVipPortNum;
    }
    if (this._devVipPortProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortProtocol = this._devVipPortProtocol;
    }
    if (this._devVipPortServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortServiceName = this._devVipPortServiceName;
    }
    if (this._devVipPortState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortState = this._devVipPortState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devVipPortDevCurrConn = undefined;
      this._devVipPortNum = undefined;
      this._devVipPortProtocol = undefined;
      this._devVipPortServiceName = undefined;
      this._devVipPortState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devVipPortDevCurrConn = value.devVipPortDevCurrConn;
      this._devVipPortNum = value.devVipPortNum;
      this._devVipPortProtocol = value.devVipPortProtocol;
      this._devVipPortServiceName = value.devVipPortServiceName;
      this._devVipPortState = value.devVipPortState;
    }
  }

  // dev_vip_port_dev_curr_conn - computed: false, optional: true, required: false
  private _devVipPortDevCurrConn?: number; 
  public get devVipPortDevCurrConn() {
    return this.getNumberAttribute('dev_vip_port_dev_curr_conn');
  }
  public set devVipPortDevCurrConn(value: number) {
    this._devVipPortDevCurrConn = value;
  }
  public resetDevVipPortDevCurrConn() {
    this._devVipPortDevCurrConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortDevCurrConnInput() {
    return this._devVipPortDevCurrConn;
  }

  // dev_vip_port_num - computed: false, optional: true, required: false
  private _devVipPortNum?: number; 
  public get devVipPortNum() {
    return this.getNumberAttribute('dev_vip_port_num');
  }
  public set devVipPortNum(value: number) {
    this._devVipPortNum = value;
  }
  public resetDevVipPortNum() {
    this._devVipPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortNumInput() {
    return this._devVipPortNum;
  }

  // dev_vip_port_protocol - computed: false, optional: true, required: false
  private _devVipPortProtocol?: string; 
  public get devVipPortProtocol() {
    return this.getStringAttribute('dev_vip_port_protocol');
  }
  public set devVipPortProtocol(value: string) {
    this._devVipPortProtocol = value;
  }
  public resetDevVipPortProtocol() {
    this._devVipPortProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortProtocolInput() {
    return this._devVipPortProtocol;
  }

  // dev_vip_port_service_name - computed: false, optional: true, required: false
  private _devVipPortServiceName?: string; 
  public get devVipPortServiceName() {
    return this.getStringAttribute('dev_vip_port_service_name');
  }
  public set devVipPortServiceName(value: string) {
    this._devVipPortServiceName = value;
  }
  public resetDevVipPortServiceName() {
    this._devVipPortServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortServiceNameInput() {
    return this._devVipPortServiceName;
  }

  // dev_vip_port_state - computed: false, optional: true, required: false
  private _devVipPortState?: string; 
  public get devVipPortState() {
    return this.getStringAttribute('dev_vip_port_state');
  }
  public set devVipPortState(value: string) {
    this._devVipPortState = value;
  }
  public resetDevVipPortState() {
    this._devVipPortState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortStateInput() {
    return this._devVipPortState;
  }
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_addr DataThunderGslbSiteSlbDevOper#dev_vip_addr}
  */
  readonly devVipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_state DataThunderGslbSiteSlbDevOper#dev_vip_state}
  */
  readonly devVipState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#disabled DataThunderGslbSiteSlbDevOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dynamic DataThunderGslbSiteSlbDevOper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#gslb_protocol DataThunderGslbSiteSlbDevOper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#hits DataThunderGslbSiteSlbDevOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#local_protocol DataThunderGslbSiteSlbDevOper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#manually_health_check DataThunderGslbSiteSlbDevOper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#node_name DataThunderGslbSiteSlbDevOper#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#port_count DataThunderGslbSiteSlbDevOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#recent DataThunderGslbSiteSlbDevOper#recent}
  */
  readonly recent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#service_ip DataThunderGslbSiteSlbDevOper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#shared DataThunderGslbSiteSlbDevOper#shared}
  */
  readonly shared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#use_gslb_state DataThunderGslbSiteSlbDevOper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#virtual_server DataThunderGslbSiteSlbDevOper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * dev_vip_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_list DataThunderGslbSiteSlbDevOper#dev_vip_port_list}
  */
  readonly devVipPortList?: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperOutputReference | DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_addr: cdktf.stringToTerraform(struct!.devVipAddr),
    dev_vip_state: cdktf.stringToTerraform(struct!.devVipState),
    disabled: cdktf.numberToTerraform(struct!.disabled),
    dynamic: cdktf.numberToTerraform(struct!.dynamic),
    gslb_protocol: cdktf.numberToTerraform(struct!.gslbProtocol),
    hits: cdktf.numberToTerraform(struct!.hits),
    local_protocol: cdktf.numberToTerraform(struct!.localProtocol),
    manually_health_check: cdktf.numberToTerraform(struct!.manuallyHealthCheck),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    port_count: cdktf.numberToTerraform(struct!.portCount),
    recent: cdktf.numberToTerraform(struct!.recent),
    service_ip: cdktf.stringToTerraform(struct!.serviceIp),
    shared: cdktf.numberToTerraform(struct!.shared),
    use_gslb_state: cdktf.numberToTerraform(struct!.useGslbState),
    virtual_server: cdktf.numberToTerraform(struct!.virtualServer),
    dev_vip_port_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructToTerraform, true)(struct!.devVipPortList),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperOutputReference | DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_addr: {
      value: cdktf.stringToHclTerraform(struct!.devVipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_state: {
      value: cdktf.stringToHclTerraform(struct!.devVipState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.numberToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic: {
      value: cdktf.numberToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_protocol: {
      value: cdktf.numberToHclTerraform(struct!.gslbProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_protocol: {
      value: cdktf.numberToHclTerraform(struct!.localProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manually_health_check: {
      value: cdktf.numberToHclTerraform(struct!.manuallyHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_count: {
      value: cdktf.numberToHclTerraform(struct!.portCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recent: {
      value: cdktf.numberToHclTerraform(struct!.recent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_gslb_state: {
      value: cdktf.numberToHclTerraform(struct!.useGslbState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server: {
      value: cdktf.numberToHclTerraform(struct!.virtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructToHclTerraform, true)(struct!.devVipPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipAddr = this._devVipAddr;
    }
    if (this._devVipState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipState = this._devVipState;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._gslbProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbProtocol = this._gslbProtocol;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._localProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.localProtocol = this._localProtocol;
    }
    if (this._manuallyHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.manuallyHealthCheck = this._manuallyHealthCheck;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._portCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCount = this._portCount;
    }
    if (this._recent !== undefined) {
      hasAnyValues = true;
      internalValueResult.recent = this._recent;
    }
    if (this._serviceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIp = this._serviceIp;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._useGslbState !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGslbState = this._useGslbState;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    if (this._devVipPortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortList = this._devVipPortList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._devVipAddr = undefined;
      this._devVipState = undefined;
      this._disabled = undefined;
      this._dynamic = undefined;
      this._gslbProtocol = undefined;
      this._hits = undefined;
      this._localProtocol = undefined;
      this._manuallyHealthCheck = undefined;
      this._nodeName = undefined;
      this._portCount = undefined;
      this._recent = undefined;
      this._serviceIp = undefined;
      this._shared = undefined;
      this._useGslbState = undefined;
      this._virtualServer = undefined;
      this._devVipPortList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._devVipAddr = value.devVipAddr;
      this._devVipState = value.devVipState;
      this._disabled = value.disabled;
      this._dynamic = value.dynamic;
      this._gslbProtocol = value.gslbProtocol;
      this._hits = value.hits;
      this._localProtocol = value.localProtocol;
      this._manuallyHealthCheck = value.manuallyHealthCheck;
      this._nodeName = value.nodeName;
      this._portCount = value.portCount;
      this._recent = value.recent;
      this._serviceIp = value.serviceIp;
      this._shared = value.shared;
      this._useGslbState = value.useGslbState;
      this._virtualServer = value.virtualServer;
      this._devVipPortList.internalValue = value.devVipPortList;
    }
  }

  // dev_vip_addr - computed: false, optional: true, required: false
  private _devVipAddr?: string; 
  public get devVipAddr() {
    return this.getStringAttribute('dev_vip_addr');
  }
  public set devVipAddr(value: string) {
    this._devVipAddr = value;
  }
  public resetDevVipAddr() {
    this._devVipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipAddrInput() {
    return this._devVipAddr;
  }

  // dev_vip_state - computed: false, optional: true, required: false
  private _devVipState?: string; 
  public get devVipState() {
    return this.getStringAttribute('dev_vip_state');
  }
  public set devVipState(value: string) {
    this._devVipState = value;
  }
  public resetDevVipState() {
    this._devVipState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipStateInput() {
    return this._devVipState;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: number; 
  public get disabled() {
    return this.getNumberAttribute('disabled');
  }
  public set disabled(value: number) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic?: number; 
  public get dynamic() {
    return this.getNumberAttribute('dynamic');
  }
  public set dynamic(value: number) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // gslb_protocol - computed: false, optional: true, required: false
  private _gslbProtocol?: number; 
  public get gslbProtocol() {
    return this.getNumberAttribute('gslb_protocol');
  }
  public set gslbProtocol(value: number) {
    this._gslbProtocol = value;
  }
  public resetGslbProtocol() {
    this._gslbProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbProtocolInput() {
    return this._gslbProtocol;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // local_protocol - computed: false, optional: true, required: false
  private _localProtocol?: number; 
  public get localProtocol() {
    return this.getNumberAttribute('local_protocol');
  }
  public set localProtocol(value: number) {
    this._localProtocol = value;
  }
  public resetLocalProtocol() {
    this._localProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localProtocolInput() {
    return this._localProtocol;
  }

  // manually_health_check - computed: false, optional: true, required: false
  private _manuallyHealthCheck?: number; 
  public get manuallyHealthCheck() {
    return this.getNumberAttribute('manually_health_check');
  }
  public set manuallyHealthCheck(value: number) {
    this._manuallyHealthCheck = value;
  }
  public resetManuallyHealthCheck() {
    this._manuallyHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manuallyHealthCheckInput() {
    return this._manuallyHealthCheck;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // port_count - computed: false, optional: true, required: false
  private _portCount?: number; 
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }
  public set portCount(value: number) {
    this._portCount = value;
  }
  public resetPortCount() {
    this._portCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountInput() {
    return this._portCount;
  }

  // recent - computed: false, optional: true, required: false
  private _recent?: number; 
  public get recent() {
    return this.getNumberAttribute('recent');
  }
  public set recent(value: number) {
    this._recent = value;
  }
  public resetRecent() {
    this._recent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentInput() {
    return this._recent;
  }

  // service_ip - computed: false, optional: true, required: false
  private _serviceIp?: string; 
  public get serviceIp() {
    return this.getStringAttribute('service_ip');
  }
  public set serviceIp(value: string) {
    this._serviceIp = value;
  }
  public resetServiceIp() {
    this._serviceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpInput() {
    return this._serviceIp;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // use_gslb_state - computed: false, optional: true, required: false
  private _useGslbState?: number; 
  public get useGslbState() {
    return this.getNumberAttribute('use_gslb_state');
  }
  public set useGslbState(value: number) {
    this._useGslbState = value;
  }
  public resetUseGslbState() {
    this._useGslbState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGslbStateInput() {
    return this._useGslbState;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: number; 
  public get virtualServer() {
    return this.getNumberAttribute('virtual_server');
  }
  public set virtualServer(value: number) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }

  // dev_vip_port_list - computed: false, optional: true, required: false
  private _devVipPortList = new DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStructList(this, "dev_vip_port_list", false);
  public get devVipPortList() {
    return this._devVipPortList;
  }
  public putDevVipPortList(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperDevVipPortListStruct[] | cdktf.IResolvable) {
    this._devVipPortList.internalValue = value;
  }
  public resetDevVipPortList() {
    this._devVipPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortListInput() {
    return this._devVipPortList.internalValue;
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStruct {
  /**
  * Specify IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#ipv4 DataThunderGslbSiteSlbDevOper#ipv4}
  */
  readonly ipv4: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#oper DataThunderGslbSiteSlbDevOper#oper}
  */
  readonly oper?: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOper;
}

export function dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv4: cdktf.stringToTerraform(struct!.ipv4),
    oper: dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv4: {
      value: cdktf.stringToHclTerraform(struct!.ipv4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4 = this._ipv4;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv4 = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv4 = value.ipv4;
      this._oper.internalValue = value.oper;
    }
  }

  // ipv4 - computed: false, optional: false, required: true
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_dev_curr_conn DataThunderGslbSiteSlbDevOper#dev_vip_port_dev_curr_conn}
  */
  readonly devVipPortDevCurrConn?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_num DataThunderGslbSiteSlbDevOper#dev_vip_port_num}
  */
  readonly devVipPortNum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_protocol DataThunderGslbSiteSlbDevOper#dev_vip_port_protocol}
  */
  readonly devVipPortProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_service_name DataThunderGslbSiteSlbDevOper#dev_vip_port_service_name}
  */
  readonly devVipPortServiceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_state DataThunderGslbSiteSlbDevOper#dev_vip_port_state}
  */
  readonly devVipPortState?: string;
}

export function dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_port_dev_curr_conn: cdktf.numberToTerraform(struct!.devVipPortDevCurrConn),
    dev_vip_port_num: cdktf.numberToTerraform(struct!.devVipPortNum),
    dev_vip_port_protocol: cdktf.stringToTerraform(struct!.devVipPortProtocol),
    dev_vip_port_service_name: cdktf.stringToTerraform(struct!.devVipPortServiceName),
    dev_vip_port_state: cdktf.stringToTerraform(struct!.devVipPortState),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_port_dev_curr_conn: {
      value: cdktf.numberToHclTerraform(struct!.devVipPortDevCurrConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_num: {
      value: cdktf.numberToHclTerraform(struct!.devVipPortNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_protocol: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_port_service_name: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortServiceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_port_state: {
      value: cdktf.stringToHclTerraform(struct!.devVipPortState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipPortDevCurrConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortDevCurrConn = this._devVipPortDevCurrConn;
    }
    if (this._devVipPortNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortNum = this._devVipPortNum;
    }
    if (this._devVipPortProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortProtocol = this._devVipPortProtocol;
    }
    if (this._devVipPortServiceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortServiceName = this._devVipPortServiceName;
    }
    if (this._devVipPortState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortState = this._devVipPortState;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._devVipPortDevCurrConn = undefined;
      this._devVipPortNum = undefined;
      this._devVipPortProtocol = undefined;
      this._devVipPortServiceName = undefined;
      this._devVipPortState = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._devVipPortDevCurrConn = value.devVipPortDevCurrConn;
      this._devVipPortNum = value.devVipPortNum;
      this._devVipPortProtocol = value.devVipPortProtocol;
      this._devVipPortServiceName = value.devVipPortServiceName;
      this._devVipPortState = value.devVipPortState;
    }
  }

  // dev_vip_port_dev_curr_conn - computed: false, optional: true, required: false
  private _devVipPortDevCurrConn?: number; 
  public get devVipPortDevCurrConn() {
    return this.getNumberAttribute('dev_vip_port_dev_curr_conn');
  }
  public set devVipPortDevCurrConn(value: number) {
    this._devVipPortDevCurrConn = value;
  }
  public resetDevVipPortDevCurrConn() {
    this._devVipPortDevCurrConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortDevCurrConnInput() {
    return this._devVipPortDevCurrConn;
  }

  // dev_vip_port_num - computed: false, optional: true, required: false
  private _devVipPortNum?: number; 
  public get devVipPortNum() {
    return this.getNumberAttribute('dev_vip_port_num');
  }
  public set devVipPortNum(value: number) {
    this._devVipPortNum = value;
  }
  public resetDevVipPortNum() {
    this._devVipPortNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortNumInput() {
    return this._devVipPortNum;
  }

  // dev_vip_port_protocol - computed: false, optional: true, required: false
  private _devVipPortProtocol?: string; 
  public get devVipPortProtocol() {
    return this.getStringAttribute('dev_vip_port_protocol');
  }
  public set devVipPortProtocol(value: string) {
    this._devVipPortProtocol = value;
  }
  public resetDevVipPortProtocol() {
    this._devVipPortProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortProtocolInput() {
    return this._devVipPortProtocol;
  }

  // dev_vip_port_service_name - computed: false, optional: true, required: false
  private _devVipPortServiceName?: string; 
  public get devVipPortServiceName() {
    return this.getStringAttribute('dev_vip_port_service_name');
  }
  public set devVipPortServiceName(value: string) {
    this._devVipPortServiceName = value;
  }
  public resetDevVipPortServiceName() {
    this._devVipPortServiceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortServiceNameInput() {
    return this._devVipPortServiceName;
  }

  // dev_vip_port_state - computed: false, optional: true, required: false
  private _devVipPortState?: string; 
  public get devVipPortState() {
    return this.getStringAttribute('dev_vip_port_state');
  }
  public set devVipPortState(value: string) {
    this._devVipPortState = value;
  }
  public resetDevVipPortState() {
    this._devVipPortState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortStateInput() {
    return this._devVipPortState;
  }
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_addr DataThunderGslbSiteSlbDevOper#dev_vip_addr}
  */
  readonly devVipAddr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_state DataThunderGslbSiteSlbDevOper#dev_vip_state}
  */
  readonly devVipState?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#disabled DataThunderGslbSiteSlbDevOper#disabled}
  */
  readonly disabled?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dynamic DataThunderGslbSiteSlbDevOper#dynamic}
  */
  readonly dynamic?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#gslb_protocol DataThunderGslbSiteSlbDevOper#gslb_protocol}
  */
  readonly gslbProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#hits DataThunderGslbSiteSlbDevOper#hits}
  */
  readonly hits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#local_protocol DataThunderGslbSiteSlbDevOper#local_protocol}
  */
  readonly localProtocol?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#manually_health_check DataThunderGslbSiteSlbDevOper#manually_health_check}
  */
  readonly manuallyHealthCheck?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#node_name DataThunderGslbSiteSlbDevOper#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#port_count DataThunderGslbSiteSlbDevOper#port_count}
  */
  readonly portCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#recent DataThunderGslbSiteSlbDevOper#recent}
  */
  readonly recent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#service_ip DataThunderGslbSiteSlbDevOper#service_ip}
  */
  readonly serviceIp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#shared DataThunderGslbSiteSlbDevOper#shared}
  */
  readonly shared?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#use_gslb_state DataThunderGslbSiteSlbDevOper#use_gslb_state}
  */
  readonly useGslbState?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#virtual_server DataThunderGslbSiteSlbDevOper#virtual_server}
  */
  readonly virtualServer?: number;
  /**
  * dev_vip_port_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#dev_vip_port_list DataThunderGslbSiteSlbDevOper#dev_vip_port_list}
  */
  readonly devVipPortList?: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperOutputReference | DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dev_vip_addr: cdktf.stringToTerraform(struct!.devVipAddr),
    dev_vip_state: cdktf.stringToTerraform(struct!.devVipState),
    disabled: cdktf.numberToTerraform(struct!.disabled),
    dynamic: cdktf.numberToTerraform(struct!.dynamic),
    gslb_protocol: cdktf.numberToTerraform(struct!.gslbProtocol),
    hits: cdktf.numberToTerraform(struct!.hits),
    local_protocol: cdktf.numberToTerraform(struct!.localProtocol),
    manually_health_check: cdktf.numberToTerraform(struct!.manuallyHealthCheck),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    port_count: cdktf.numberToTerraform(struct!.portCount),
    recent: cdktf.numberToTerraform(struct!.recent),
    service_ip: cdktf.stringToTerraform(struct!.serviceIp),
    shared: cdktf.numberToTerraform(struct!.shared),
    use_gslb_state: cdktf.numberToTerraform(struct!.useGslbState),
    virtual_server: cdktf.numberToTerraform(struct!.virtualServer),
    dev_vip_port_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructToTerraform, true)(struct!.devVipPortList),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperOutputReference | DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dev_vip_addr: {
      value: cdktf.stringToHclTerraform(struct!.devVipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dev_vip_state: {
      value: cdktf.stringToHclTerraform(struct!.devVipState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disabled: {
      value: cdktf.numberToHclTerraform(struct!.disabled),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dynamic: {
      value: cdktf.numberToHclTerraform(struct!.dynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    gslb_protocol: {
      value: cdktf.numberToHclTerraform(struct!.gslbProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hits: {
      value: cdktf.numberToHclTerraform(struct!.hits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    local_protocol: {
      value: cdktf.numberToHclTerraform(struct!.localProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manually_health_check: {
      value: cdktf.numberToHclTerraform(struct!.manuallyHealthCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port_count: {
      value: cdktf.numberToHclTerraform(struct!.portCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    recent: {
      value: cdktf.numberToHclTerraform(struct!.recent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    service_ip: {
      value: cdktf.stringToHclTerraform(struct!.serviceIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared: {
      value: cdktf.numberToHclTerraform(struct!.shared),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    use_gslb_state: {
      value: cdktf.numberToHclTerraform(struct!.useGslbState),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    virtual_server: {
      value: cdktf.numberToHclTerraform(struct!.virtualServer),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dev_vip_port_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructToHclTerraform, true)(struct!.devVipPortList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._devVipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipAddr = this._devVipAddr;
    }
    if (this._devVipState !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipState = this._devVipState;
    }
    if (this._disabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.disabled = this._disabled;
    }
    if (this._dynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.dynamic = this._dynamic;
    }
    if (this._gslbProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.gslbProtocol = this._gslbProtocol;
    }
    if (this._hits !== undefined) {
      hasAnyValues = true;
      internalValueResult.hits = this._hits;
    }
    if (this._localProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.localProtocol = this._localProtocol;
    }
    if (this._manuallyHealthCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.manuallyHealthCheck = this._manuallyHealthCheck;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._portCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.portCount = this._portCount;
    }
    if (this._recent !== undefined) {
      hasAnyValues = true;
      internalValueResult.recent = this._recent;
    }
    if (this._serviceIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceIp = this._serviceIp;
    }
    if (this._shared !== undefined) {
      hasAnyValues = true;
      internalValueResult.shared = this._shared;
    }
    if (this._useGslbState !== undefined) {
      hasAnyValues = true;
      internalValueResult.useGslbState = this._useGslbState;
    }
    if (this._virtualServer !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualServer = this._virtualServer;
    }
    if (this._devVipPortList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.devVipPortList = this._devVipPortList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._devVipAddr = undefined;
      this._devVipState = undefined;
      this._disabled = undefined;
      this._dynamic = undefined;
      this._gslbProtocol = undefined;
      this._hits = undefined;
      this._localProtocol = undefined;
      this._manuallyHealthCheck = undefined;
      this._nodeName = undefined;
      this._portCount = undefined;
      this._recent = undefined;
      this._serviceIp = undefined;
      this._shared = undefined;
      this._useGslbState = undefined;
      this._virtualServer = undefined;
      this._devVipPortList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._devVipAddr = value.devVipAddr;
      this._devVipState = value.devVipState;
      this._disabled = value.disabled;
      this._dynamic = value.dynamic;
      this._gslbProtocol = value.gslbProtocol;
      this._hits = value.hits;
      this._localProtocol = value.localProtocol;
      this._manuallyHealthCheck = value.manuallyHealthCheck;
      this._nodeName = value.nodeName;
      this._portCount = value.portCount;
      this._recent = value.recent;
      this._serviceIp = value.serviceIp;
      this._shared = value.shared;
      this._useGslbState = value.useGslbState;
      this._virtualServer = value.virtualServer;
      this._devVipPortList.internalValue = value.devVipPortList;
    }
  }

  // dev_vip_addr - computed: false, optional: true, required: false
  private _devVipAddr?: string; 
  public get devVipAddr() {
    return this.getStringAttribute('dev_vip_addr');
  }
  public set devVipAddr(value: string) {
    this._devVipAddr = value;
  }
  public resetDevVipAddr() {
    this._devVipAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipAddrInput() {
    return this._devVipAddr;
  }

  // dev_vip_state - computed: false, optional: true, required: false
  private _devVipState?: string; 
  public get devVipState() {
    return this.getStringAttribute('dev_vip_state');
  }
  public set devVipState(value: string) {
    this._devVipState = value;
  }
  public resetDevVipState() {
    this._devVipState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipStateInput() {
    return this._devVipState;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: number; 
  public get disabled() {
    return this.getNumberAttribute('disabled');
  }
  public set disabled(value: number) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // dynamic - computed: false, optional: true, required: false
  private _dynamic?: number; 
  public get dynamic() {
    return this.getNumberAttribute('dynamic');
  }
  public set dynamic(value: number) {
    this._dynamic = value;
  }
  public resetDynamic() {
    this._dynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicInput() {
    return this._dynamic;
  }

  // gslb_protocol - computed: false, optional: true, required: false
  private _gslbProtocol?: number; 
  public get gslbProtocol() {
    return this.getNumberAttribute('gslb_protocol');
  }
  public set gslbProtocol(value: number) {
    this._gslbProtocol = value;
  }
  public resetGslbProtocol() {
    this._gslbProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gslbProtocolInput() {
    return this._gslbProtocol;
  }

  // hits - computed: false, optional: true, required: false
  private _hits?: number; 
  public get hits() {
    return this.getNumberAttribute('hits');
  }
  public set hits(value: number) {
    this._hits = value;
  }
  public resetHits() {
    this._hits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitsInput() {
    return this._hits;
  }

  // local_protocol - computed: false, optional: true, required: false
  private _localProtocol?: number; 
  public get localProtocol() {
    return this.getNumberAttribute('local_protocol');
  }
  public set localProtocol(value: number) {
    this._localProtocol = value;
  }
  public resetLocalProtocol() {
    this._localProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localProtocolInput() {
    return this._localProtocol;
  }

  // manually_health_check - computed: false, optional: true, required: false
  private _manuallyHealthCheck?: number; 
  public get manuallyHealthCheck() {
    return this.getNumberAttribute('manually_health_check');
  }
  public set manuallyHealthCheck(value: number) {
    this._manuallyHealthCheck = value;
  }
  public resetManuallyHealthCheck() {
    this._manuallyHealthCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manuallyHealthCheckInput() {
    return this._manuallyHealthCheck;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
  }

  // port_count - computed: false, optional: true, required: false
  private _portCount?: number; 
  public get portCount() {
    return this.getNumberAttribute('port_count');
  }
  public set portCount(value: number) {
    this._portCount = value;
  }
  public resetPortCount() {
    this._portCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portCountInput() {
    return this._portCount;
  }

  // recent - computed: false, optional: true, required: false
  private _recent?: number; 
  public get recent() {
    return this.getNumberAttribute('recent');
  }
  public set recent(value: number) {
    this._recent = value;
  }
  public resetRecent() {
    this._recent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recentInput() {
    return this._recent;
  }

  // service_ip - computed: false, optional: true, required: false
  private _serviceIp?: string; 
  public get serviceIp() {
    return this.getStringAttribute('service_ip');
  }
  public set serviceIp(value: string) {
    this._serviceIp = value;
  }
  public resetServiceIp() {
    this._serviceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIpInput() {
    return this._serviceIp;
  }

  // shared - computed: false, optional: true, required: false
  private _shared?: number; 
  public get shared() {
    return this.getNumberAttribute('shared');
  }
  public set shared(value: number) {
    this._shared = value;
  }
  public resetShared() {
    this._shared = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedInput() {
    return this._shared;
  }

  // use_gslb_state - computed: false, optional: true, required: false
  private _useGslbState?: number; 
  public get useGslbState() {
    return this.getNumberAttribute('use_gslb_state');
  }
  public set useGslbState(value: number) {
    this._useGslbState = value;
  }
  public resetUseGslbState() {
    this._useGslbState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useGslbStateInput() {
    return this._useGslbState;
  }

  // virtual_server - computed: false, optional: true, required: false
  private _virtualServer?: number; 
  public get virtualServer() {
    return this.getNumberAttribute('virtual_server');
  }
  public set virtualServer(value: number) {
    this._virtualServer = value;
  }
  public resetVirtualServer() {
    this._virtualServer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualServerInput() {
    return this._virtualServer;
  }

  // dev_vip_port_list - computed: false, optional: true, required: false
  private _devVipPortList = new DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStructList(this, "dev_vip_port_list", false);
  public get devVipPortList() {
    return this._devVipPortList;
  }
  public putDevVipPortList(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperDevVipPortListStruct[] | cdktf.IResolvable) {
    this._devVipPortList.internalValue = value;
  }
  public resetDevVipPortList() {
    this._devVipPortList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devVipPortListInput() {
    return this._devVipPortList.internalValue;
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStruct {
  /**
  * Specify IP address (IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#ipv6 DataThunderGslbSiteSlbDevOper#ipv6}
  */
  readonly ipv6: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#oper DataThunderGslbSiteSlbDevOper#oper}
  */
  readonly oper?: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOper;
}

export function dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ipv6: cdktf.stringToTerraform(struct!.ipv6),
    oper: dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperToTerraform(struct!.oper),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ipv6: {
      value: cdktf.stringToHclTerraform(struct!.ipv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oper: {
      value: dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ipv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6 = this._ipv6;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ipv6 = undefined;
      this._oper.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ipv6 = value.ipv6;
      this._oper.internalValue = value.oper;
    }
  }

  // ipv6 - computed: false, optional: false, required: true
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}

export class DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructOutputReference {
    return new DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderGslbSiteSlbDevOperVipServer {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#oper DataThunderGslbSiteSlbDevOper#oper}
  */
  readonly oper?: DataThunderGslbSiteSlbDevOperVipServerOper;
  /**
  * vip_server_name_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#vip_server_name_list DataThunderGslbSiteSlbDevOper#vip_server_name_list}
  */
  readonly vipServerNameList?: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStruct[] | cdktf.IResolvable;
  /**
  * vip_server_v4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#vip_server_v4_list DataThunderGslbSiteSlbDevOper#vip_server_v4_list}
  */
  readonly vipServerV4List?: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStruct[] | cdktf.IResolvable;
  /**
  * vip_server_v6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#vip_server_v6_list DataThunderGslbSiteSlbDevOper#vip_server_v6_list}
  */
  readonly vipServerV6List?: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStruct[] | cdktf.IResolvable;
}

export function dataThunderGslbSiteSlbDevOperVipServerToTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerOutputReference | DataThunderGslbSiteSlbDevOperVipServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderGslbSiteSlbDevOperVipServerOperToTerraform(struct!.oper),
    vip_server_name_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructToTerraform, true)(struct!.vipServerNameList),
    vip_server_v4_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructToTerraform, true)(struct!.vipServerV4List),
    vip_server_v6_list: cdktf.listMapper(dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructToTerraform, true)(struct!.vipServerV6List),
  }
}


export function dataThunderGslbSiteSlbDevOperVipServerToHclTerraform(struct?: DataThunderGslbSiteSlbDevOperVipServerOutputReference | DataThunderGslbSiteSlbDevOperVipServer): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderGslbSiteSlbDevOperVipServerOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerOperList",
    },
    vip_server_name_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructToHclTerraform, true)(struct!.vipServerNameList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructList",
    },
    vip_server_v4_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructToHclTerraform, true)(struct!.vipServerV4List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructList",
    },
    vip_server_v6_list: {
      value: cdktf.listMapperHcl(dataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructToHclTerraform, true)(struct!.vipServerV6List),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderGslbSiteSlbDevOperVipServerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderGslbSiteSlbDevOperVipServer | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._vipServerNameList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerNameList = this._vipServerNameList?.internalValue;
    }
    if (this._vipServerV4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerV4List = this._vipServerV4List?.internalValue;
    }
    if (this._vipServerV6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.vipServerV6List = this._vipServerV6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderGslbSiteSlbDevOperVipServer | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
      this._vipServerNameList.internalValue = undefined;
      this._vipServerV4List.internalValue = undefined;
      this._vipServerV6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
      this._vipServerNameList.internalValue = value.vipServerNameList;
      this._vipServerV4List.internalValue = value.vipServerV4List;
      this._vipServerV6List.internalValue = value.vipServerV6List;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteSlbDevOperVipServerOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteSlbDevOperVipServerOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // vip_server_name_list - computed: false, optional: true, required: false
  private _vipServerNameList = new DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStructList(this, "vip_server_name_list", false);
  public get vipServerNameList() {
    return this._vipServerNameList;
  }
  public putVipServerNameList(value: DataThunderGslbSiteSlbDevOperVipServerVipServerNameListStruct[] | cdktf.IResolvable) {
    this._vipServerNameList.internalValue = value;
  }
  public resetVipServerNameList() {
    this._vipServerNameList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerNameListInput() {
    return this._vipServerNameList.internalValue;
  }

  // vip_server_v4_list - computed: false, optional: true, required: false
  private _vipServerV4List = new DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStructList(this, "vip_server_v4_list", false);
  public get vipServerV4List() {
    return this._vipServerV4List;
  }
  public putVipServerV4List(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV4ListStruct[] | cdktf.IResolvable) {
    this._vipServerV4List.internalValue = value;
  }
  public resetVipServerV4List() {
    this._vipServerV4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerV4ListInput() {
    return this._vipServerV4List.internalValue;
  }

  // vip_server_v6_list - computed: false, optional: true, required: false
  private _vipServerV6List = new DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStructList(this, "vip_server_v6_list", false);
  public get vipServerV6List() {
    return this._vipServerV6List;
  }
  public putVipServerV6List(value: DataThunderGslbSiteSlbDevOperVipServerVipServerV6ListStruct[] | cdktf.IResolvable) {
    this._vipServerV6List.internalValue = value;
  }
  public resetVipServerV6List() {
    this._vipServerV6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerV6ListInput() {
    return this._vipServerV6List.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper thunder_gslb_site_slb_dev_oper}
*/
export class DataThunderGslbSiteSlbDevOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_gslb_site_slb_dev_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderGslbSiteSlbDevOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderGslbSiteSlbDevOper to import
  * @param importFromId The id of the existing DataThunderGslbSiteSlbDevOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderGslbSiteSlbDevOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_gslb_site_slb_dev_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/gslb_site_slb_dev_oper thunder_gslb_site_slb_dev_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderGslbSiteSlbDevOperConfig
  */
  public constructor(scope: Construct, id: string, config: DataThunderGslbSiteSlbDevOperConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_gslb_site_slb_dev_oper',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._siteName = config.siteName;
    this._oper.internalValue = config.oper;
    this._vipServer.internalValue = config.vipServer;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_name - computed: false, optional: false, required: true
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // site_name - computed: false, optional: false, required: true
  private _siteName?: string; 
  public get siteName() {
    return this.getStringAttribute('site_name');
  }
  public set siteName(value: string) {
    this._siteName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteNameInput() {
    return this._siteName;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderGslbSiteSlbDevOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderGslbSiteSlbDevOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // vip_server - computed: false, optional: true, required: false
  private _vipServer = new DataThunderGslbSiteSlbDevOperVipServerOutputReference(this, "vip_server");
  public get vipServer() {
    return this._vipServer;
  }
  public putVipServer(value: DataThunderGslbSiteSlbDevOperVipServer) {
    this._vipServer.internalValue = value;
  }
  public resetVipServer() {
    this._vipServer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vipServerInput() {
    return this._vipServer.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      site_name: cdktf.stringToTerraform(this._siteName),
      oper: dataThunderGslbSiteSlbDevOperOperToTerraform(this._oper.internalValue),
      vip_server: dataThunderGslbSiteSlbDevOperVipServerToTerraform(this._vipServer.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_name: {
        value: cdktf.stringToHclTerraform(this._siteName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      oper: {
        value: dataThunderGslbSiteSlbDevOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteSlbDevOperOperList",
      },
      vip_server: {
        value: dataThunderGslbSiteSlbDevOperVipServerToHclTerraform(this._vipServer.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderGslbSiteSlbDevOperVipServerList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
