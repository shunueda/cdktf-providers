// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemIpThreatListConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#id SystemIpThreatList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#uuid SystemIpThreatList#uuid}
  */
  readonly uuid?: string;
  /**
  * ipv4_dest_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ipv4_dest_list SystemIpThreatList#ipv4_dest_list}
  */
  readonly ipv4DestList?: SystemIpThreatListIpv4DestListStructA;
  /**
  * ipv4_internet_host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ipv4_internet_host_list SystemIpThreatList#ipv4_internet_host_list}
  */
  readonly ipv4InternetHostList?: SystemIpThreatListIpv4InternetHostListStructA;
  /**
  * ipv4_source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ipv4_source_list SystemIpThreatList#ipv4_source_list}
  */
  readonly ipv4SourceList?: SystemIpThreatListIpv4SourceListStructA;
  /**
  * ipv6_dest_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ipv6_dest_list SystemIpThreatList#ipv6_dest_list}
  */
  readonly ipv6DestList?: SystemIpThreatListIpv6DestListStructA;
  /**
  * ipv6_internet_host_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ipv6_internet_host_list SystemIpThreatList#ipv6_internet_host_list}
  */
  readonly ipv6InternetHostList?: SystemIpThreatListIpv6InternetHostListStructA;
  /**
  * ipv6_source_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ipv6_source_list SystemIpThreatList#ipv6_source_list}
  */
  readonly ipv6SourceList?: SystemIpThreatListIpv6SourceListStructA;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#sampling_enable SystemIpThreatList#sampling_enable}
  */
  readonly samplingEnable?: SystemIpThreatListSamplingEnableA[] | cdktf.IResolvable;
}
export interface SystemIpThreatListIpv4DestListClassListCfgA {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list SystemIpThreatList#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ip_threat_action_tmpl SystemIpThreatList#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv4DestListClassListCfgAToTerraform(struct?: SystemIpThreatListIpv4DestListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv4DestListClassListCfgAToHclTerraform(struct?: SystemIpThreatListIpv4DestListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4DestListClassListCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv4DestListClassListCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4DestListClassListCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv4DestListClassListCfgAList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv4DestListClassListCfgA[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv4DestListClassListCfgAOutputReference {
    return new SystemIpThreatListIpv4DestListClassListCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv4DestListStructA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#uuid SystemIpThreatList#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list_cfg SystemIpThreatList#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv4DestListClassListCfgA[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv4DestListStructAToTerraform(struct?: SystemIpThreatListIpv4DestListStructAOutputReference | SystemIpThreatListIpv4DestListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv4DestListClassListCfgAToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv4DestListStructAToHclTerraform(struct?: SystemIpThreatListIpv4DestListStructAOutputReference | SystemIpThreatListIpv4DestListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv4DestListClassListCfgAToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv4DestListClassListCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4DestListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv4DestListStructA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4DestListStructA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._classListCfg.internalValue = value.classListCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv4DestListClassListCfgAList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv4DestListClassListCfgA[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv4InternetHostListClassListCfgA {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list SystemIpThreatList#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ip_threat_action_tmpl SystemIpThreatList#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv4InternetHostListClassListCfgAToTerraform(struct?: SystemIpThreatListIpv4InternetHostListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv4InternetHostListClassListCfgAToHclTerraform(struct?: SystemIpThreatListIpv4InternetHostListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4InternetHostListClassListCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv4InternetHostListClassListCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4InternetHostListClassListCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv4InternetHostListClassListCfgAList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv4InternetHostListClassListCfgA[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv4InternetHostListClassListCfgAOutputReference {
    return new SystemIpThreatListIpv4InternetHostListClassListCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv4InternetHostListStructA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#uuid SystemIpThreatList#uuid}
  */
  readonly uuid?: string;
  /**
  * Bind exception-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#white_list SystemIpThreatList#white_list}
  */
  readonly whiteList?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list_cfg SystemIpThreatList#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv4InternetHostListClassListCfgA[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv4InternetHostListStructAToTerraform(struct?: SystemIpThreatListIpv4InternetHostListStructAOutputReference | SystemIpThreatListIpv4InternetHostListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    white_list: cdktf.stringToTerraform(struct!.whiteList),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv4InternetHostListClassListCfgAToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv4InternetHostListStructAToHclTerraform(struct?: SystemIpThreatListIpv4InternetHostListStructAOutputReference | SystemIpThreatListIpv4InternetHostListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    white_list: {
      value: cdktf.stringToHclTerraform(struct!.whiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv4InternetHostListClassListCfgAToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv4InternetHostListClassListCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4InternetHostListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv4InternetHostListStructA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._whiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteList = this._whiteList;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4InternetHostListStructA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._whiteList = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._whiteList = value.whiteList;
      this._classListCfg.internalValue = value.classListCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // white_list - computed: false, optional: true, required: false
  private _whiteList?: string; 
  public get whiteList() {
    return this.getStringAttribute('white_list');
  }
  public set whiteList(value: string) {
    this._whiteList = value;
  }
  public resetWhiteList() {
    this._whiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList;
  }

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv4InternetHostListClassListCfgAList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv4InternetHostListClassListCfgA[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv4SourceListClassListCfgA {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list SystemIpThreatList#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ip_threat_action_tmpl SystemIpThreatList#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv4SourceListClassListCfgAToTerraform(struct?: SystemIpThreatListIpv4SourceListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv4SourceListClassListCfgAToHclTerraform(struct?: SystemIpThreatListIpv4SourceListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4SourceListClassListCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv4SourceListClassListCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4SourceListClassListCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv4SourceListClassListCfgAList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv4SourceListClassListCfgA[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv4SourceListClassListCfgAOutputReference {
    return new SystemIpThreatListIpv4SourceListClassListCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv4SourceListStructA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#uuid SystemIpThreatList#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list_cfg SystemIpThreatList#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv4SourceListClassListCfgA[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv4SourceListStructAToTerraform(struct?: SystemIpThreatListIpv4SourceListStructAOutputReference | SystemIpThreatListIpv4SourceListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv4SourceListClassListCfgAToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv4SourceListStructAToHclTerraform(struct?: SystemIpThreatListIpv4SourceListStructAOutputReference | SystemIpThreatListIpv4SourceListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv4SourceListClassListCfgAToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv4SourceListClassListCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv4SourceListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv4SourceListStructA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv4SourceListStructA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._classListCfg.internalValue = value.classListCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv4SourceListClassListCfgAList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv4SourceListClassListCfgA[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv6DestListClassListCfgA {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list SystemIpThreatList#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ip_threat_action_tmpl SystemIpThreatList#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv6DestListClassListCfgAToTerraform(struct?: SystemIpThreatListIpv6DestListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv6DestListClassListCfgAToHclTerraform(struct?: SystemIpThreatListIpv6DestListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6DestListClassListCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv6DestListClassListCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6DestListClassListCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv6DestListClassListCfgAList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv6DestListClassListCfgA[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv6DestListClassListCfgAOutputReference {
    return new SystemIpThreatListIpv6DestListClassListCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv6DestListStructA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#uuid SystemIpThreatList#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list_cfg SystemIpThreatList#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv6DestListClassListCfgA[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv6DestListStructAToTerraform(struct?: SystemIpThreatListIpv6DestListStructAOutputReference | SystemIpThreatListIpv6DestListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv6DestListClassListCfgAToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv6DestListStructAToHclTerraform(struct?: SystemIpThreatListIpv6DestListStructAOutputReference | SystemIpThreatListIpv6DestListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv6DestListClassListCfgAToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv6DestListClassListCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6DestListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv6DestListStructA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6DestListStructA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._classListCfg.internalValue = value.classListCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv6DestListClassListCfgAList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv6DestListClassListCfgA[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv6InternetHostListClassListCfgA {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list SystemIpThreatList#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ip_threat_action_tmpl SystemIpThreatList#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv6InternetHostListClassListCfgAToTerraform(struct?: SystemIpThreatListIpv6InternetHostListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv6InternetHostListClassListCfgAToHclTerraform(struct?: SystemIpThreatListIpv6InternetHostListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6InternetHostListClassListCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv6InternetHostListClassListCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6InternetHostListClassListCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv6InternetHostListClassListCfgAList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv6InternetHostListClassListCfgA[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv6InternetHostListClassListCfgAOutputReference {
    return new SystemIpThreatListIpv6InternetHostListClassListCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv6InternetHostListStructA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#uuid SystemIpThreatList#uuid}
  */
  readonly uuid?: string;
  /**
  * Bind exception-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#white_list SystemIpThreatList#white_list}
  */
  readonly whiteList?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list_cfg SystemIpThreatList#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv6InternetHostListClassListCfgA[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv6InternetHostListStructAToTerraform(struct?: SystemIpThreatListIpv6InternetHostListStructAOutputReference | SystemIpThreatListIpv6InternetHostListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    white_list: cdktf.stringToTerraform(struct!.whiteList),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv6InternetHostListClassListCfgAToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv6InternetHostListStructAToHclTerraform(struct?: SystemIpThreatListIpv6InternetHostListStructAOutputReference | SystemIpThreatListIpv6InternetHostListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    white_list: {
      value: cdktf.stringToHclTerraform(struct!.whiteList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv6InternetHostListClassListCfgAToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv6InternetHostListClassListCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6InternetHostListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv6InternetHostListStructA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._whiteList !== undefined) {
      hasAnyValues = true;
      internalValueResult.whiteList = this._whiteList;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6InternetHostListStructA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._whiteList = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._whiteList = value.whiteList;
      this._classListCfg.internalValue = value.classListCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // white_list - computed: false, optional: true, required: false
  private _whiteList?: string; 
  public get whiteList() {
    return this.getStringAttribute('white_list');
  }
  public set whiteList(value: string) {
    this._whiteList = value;
  }
  public resetWhiteList() {
    this._whiteList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get whiteListInput() {
    return this._whiteList;
  }

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv6InternetHostListClassListCfgAList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv6InternetHostListClassListCfgA[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListIpv6SourceListClassListCfgA {
  /**
  * Bind class-list (class-list name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list SystemIpThreatList#class_list}
  */
  readonly classList?: string;
  /**
  * Bind ip-threat-action Template (ip-threat-action Template number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#ip_threat_action_tmpl SystemIpThreatList#ip_threat_action_tmpl}
  */
  readonly ipThreatActionTmpl?: number;
}

export function systemIpThreatListIpv6SourceListClassListCfgAToTerraform(struct?: SystemIpThreatListIpv6SourceListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    class_list: cdktf.stringToTerraform(struct!.classList),
    ip_threat_action_tmpl: cdktf.numberToTerraform(struct!.ipThreatActionTmpl),
  }
}


export function systemIpThreatListIpv6SourceListClassListCfgAToHclTerraform(struct?: SystemIpThreatListIpv6SourceListClassListCfgA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    class_list: {
      value: cdktf.stringToHclTerraform(struct!.classList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_threat_action_tmpl: {
      value: cdktf.numberToHclTerraform(struct!.ipThreatActionTmpl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6SourceListClassListCfgAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListIpv6SourceListClassListCfgA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._classList !== undefined) {
      hasAnyValues = true;
      internalValueResult.classList = this._classList;
    }
    if (this._ipThreatActionTmpl !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipThreatActionTmpl = this._ipThreatActionTmpl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6SourceListClassListCfgA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._classList = undefined;
      this._ipThreatActionTmpl = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._classList = value.classList;
      this._ipThreatActionTmpl = value.ipThreatActionTmpl;
    }
  }

  // class_list - computed: false, optional: true, required: false
  private _classList?: string; 
  public get classList() {
    return this.getStringAttribute('class_list');
  }
  public set classList(value: string) {
    this._classList = value;
  }
  public resetClassList() {
    this._classList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListInput() {
    return this._classList;
  }

  // ip_threat_action_tmpl - computed: false, optional: true, required: false
  private _ipThreatActionTmpl?: number; 
  public get ipThreatActionTmpl() {
    return this.getNumberAttribute('ip_threat_action_tmpl');
  }
  public set ipThreatActionTmpl(value: number) {
    this._ipThreatActionTmpl = value;
  }
  public resetIpThreatActionTmpl() {
    this._ipThreatActionTmpl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipThreatActionTmplInput() {
    return this._ipThreatActionTmpl;
  }
}

export class SystemIpThreatListIpv6SourceListClassListCfgAList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListIpv6SourceListClassListCfgA[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListIpv6SourceListClassListCfgAOutputReference {
    return new SystemIpThreatListIpv6SourceListClassListCfgAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface SystemIpThreatListIpv6SourceListStructA {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#uuid SystemIpThreatList#uuid}
  */
  readonly uuid?: string;
  /**
  * class_list_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#class_list_cfg SystemIpThreatList#class_list_cfg}
  */
  readonly classListCfg?: SystemIpThreatListIpv6SourceListClassListCfgA[] | cdktf.IResolvable;
}

export function systemIpThreatListIpv6SourceListStructAToTerraform(struct?: SystemIpThreatListIpv6SourceListStructAOutputReference | SystemIpThreatListIpv6SourceListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    class_list_cfg: cdktf.listMapper(systemIpThreatListIpv6SourceListClassListCfgAToTerraform, true)(struct!.classListCfg),
  }
}


export function systemIpThreatListIpv6SourceListStructAToHclTerraform(struct?: SystemIpThreatListIpv6SourceListStructAOutputReference | SystemIpThreatListIpv6SourceListStructA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    class_list_cfg: {
      value: cdktf.listMapperHcl(systemIpThreatListIpv6SourceListClassListCfgAToHclTerraform, true)(struct!.classListCfg),
      isBlock: true,
      type: "list",
      storageClassType: "SystemIpThreatListIpv6SourceListClassListCfgAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListIpv6SourceListStructAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemIpThreatListIpv6SourceListStructA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._classListCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.classListCfg = this._classListCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListIpv6SourceListStructA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._classListCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._classListCfg.internalValue = value.classListCfg;
    }
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // class_list_cfg - computed: false, optional: true, required: false
  private _classListCfg = new SystemIpThreatListIpv6SourceListClassListCfgAList(this, "class_list_cfg", false);
  public get classListCfg() {
    return this._classListCfg;
  }
  public putClassListCfg(value: SystemIpThreatListIpv6SourceListClassListCfgA[] | cdktf.IResolvable) {
    this._classListCfg.internalValue = value;
  }
  public resetClassListCfg() {
    this._classListCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classListCfgInput() {
    return this._classListCfg.internalValue;
  }
}
export interface SystemIpThreatListSamplingEnableA {
  /**
  * 'all': all; 'packet_hit_count_in_sw': Packet Hit Count in SW; 'packet_hit_count_in_spe': Packet Hit Count in SPE; 'entries_added_in_sw': Entries Added in SW; 'entries_removed_from_sw': Entries Removed from SW; 'entries_added_in_spe': Entries Added in SPE; 'entries_removed_from_spe': Entries Removed from SPE; 'error_out_of_memory': Out of memory Error; 'error_out_of_spe_entries': Out of SPE Entries Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#counters1 SystemIpThreatList#counters1}
  */
  readonly counters1?: string;
}

export function systemIpThreatListSamplingEnableAToTerraform(struct?: SystemIpThreatListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function systemIpThreatListSamplingEnableAToHclTerraform(struct?: SystemIpThreatListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemIpThreatListSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): SystemIpThreatListSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemIpThreatListSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class SystemIpThreatListSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : SystemIpThreatListSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): SystemIpThreatListSamplingEnableAOutputReference {
    return new SystemIpThreatListSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list thunder_system_ip_threat_list}
*/
export class SystemIpThreatList extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_ip_threat_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemIpThreatList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemIpThreatList to import
  * @param importFromId The id of the existing SystemIpThreatList that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemIpThreatList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_ip_threat_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/system_ip_threat_list thunder_system_ip_threat_list} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemIpThreatListConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SystemIpThreatListConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_ip_threat_list',
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
    this._id = config.id;
    this._uuid = config.uuid;
    this._ipv4DestList.internalValue = config.ipv4DestList;
    this._ipv4InternetHostList.internalValue = config.ipv4InternetHostList;
    this._ipv4SourceList.internalValue = config.ipv4SourceList;
    this._ipv6DestList.internalValue = config.ipv6DestList;
    this._ipv6InternetHostList.internalValue = config.ipv6InternetHostList;
    this._ipv6SourceList.internalValue = config.ipv6SourceList;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // ipv4_dest_list - computed: false, optional: true, required: false
  private _ipv4DestList = new SystemIpThreatListIpv4DestListStructAOutputReference(this, "ipv4_dest_list");
  public get ipv4DestList() {
    return this._ipv4DestList;
  }
  public putIpv4DestList(value: SystemIpThreatListIpv4DestListStructA) {
    this._ipv4DestList.internalValue = value;
  }
  public resetIpv4DestList() {
    this._ipv4DestList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DestListInput() {
    return this._ipv4DestList.internalValue;
  }

  // ipv4_internet_host_list - computed: false, optional: true, required: false
  private _ipv4InternetHostList = new SystemIpThreatListIpv4InternetHostListStructAOutputReference(this, "ipv4_internet_host_list");
  public get ipv4InternetHostList() {
    return this._ipv4InternetHostList;
  }
  public putIpv4InternetHostList(value: SystemIpThreatListIpv4InternetHostListStructA) {
    this._ipv4InternetHostList.internalValue = value;
  }
  public resetIpv4InternetHostList() {
    this._ipv4InternetHostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4InternetHostListInput() {
    return this._ipv4InternetHostList.internalValue;
  }

  // ipv4_source_list - computed: false, optional: true, required: false
  private _ipv4SourceList = new SystemIpThreatListIpv4SourceListStructAOutputReference(this, "ipv4_source_list");
  public get ipv4SourceList() {
    return this._ipv4SourceList;
  }
  public putIpv4SourceList(value: SystemIpThreatListIpv4SourceListStructA) {
    this._ipv4SourceList.internalValue = value;
  }
  public resetIpv4SourceList() {
    this._ipv4SourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4SourceListInput() {
    return this._ipv4SourceList.internalValue;
  }

  // ipv6_dest_list - computed: false, optional: true, required: false
  private _ipv6DestList = new SystemIpThreatListIpv6DestListStructAOutputReference(this, "ipv6_dest_list");
  public get ipv6DestList() {
    return this._ipv6DestList;
  }
  public putIpv6DestList(value: SystemIpThreatListIpv6DestListStructA) {
    this._ipv6DestList.internalValue = value;
  }
  public resetIpv6DestList() {
    this._ipv6DestList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6DestListInput() {
    return this._ipv6DestList.internalValue;
  }

  // ipv6_internet_host_list - computed: false, optional: true, required: false
  private _ipv6InternetHostList = new SystemIpThreatListIpv6InternetHostListStructAOutputReference(this, "ipv6_internet_host_list");
  public get ipv6InternetHostList() {
    return this._ipv6InternetHostList;
  }
  public putIpv6InternetHostList(value: SystemIpThreatListIpv6InternetHostListStructA) {
    this._ipv6InternetHostList.internalValue = value;
  }
  public resetIpv6InternetHostList() {
    this._ipv6InternetHostList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6InternetHostListInput() {
    return this._ipv6InternetHostList.internalValue;
  }

  // ipv6_source_list - computed: false, optional: true, required: false
  private _ipv6SourceList = new SystemIpThreatListIpv6SourceListStructAOutputReference(this, "ipv6_source_list");
  public get ipv6SourceList() {
    return this._ipv6SourceList;
  }
  public putIpv6SourceList(value: SystemIpThreatListIpv6SourceListStructA) {
    this._ipv6SourceList.internalValue = value;
  }
  public resetIpv6SourceList() {
    this._ipv6SourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6SourceListInput() {
    return this._ipv6SourceList.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new SystemIpThreatListSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: SystemIpThreatListSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      ipv4_dest_list: systemIpThreatListIpv4DestListStructAToTerraform(this._ipv4DestList.internalValue),
      ipv4_internet_host_list: systemIpThreatListIpv4InternetHostListStructAToTerraform(this._ipv4InternetHostList.internalValue),
      ipv4_source_list: systemIpThreatListIpv4SourceListStructAToTerraform(this._ipv4SourceList.internalValue),
      ipv6_dest_list: systemIpThreatListIpv6DestListStructAToTerraform(this._ipv6DestList.internalValue),
      ipv6_internet_host_list: systemIpThreatListIpv6InternetHostListStructAToTerraform(this._ipv6InternetHostList.internalValue),
      ipv6_source_list: systemIpThreatListIpv6SourceListStructAToTerraform(this._ipv6SourceList.internalValue),
      sampling_enable: cdktf.listMapper(systemIpThreatListSamplingEnableAToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dest_list: {
        value: systemIpThreatListIpv4DestListStructAToHclTerraform(this._ipv4DestList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpThreatListIpv4DestListStructAList",
      },
      ipv4_internet_host_list: {
        value: systemIpThreatListIpv4InternetHostListStructAToHclTerraform(this._ipv4InternetHostList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpThreatListIpv4InternetHostListStructAList",
      },
      ipv4_source_list: {
        value: systemIpThreatListIpv4SourceListStructAToHclTerraform(this._ipv4SourceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpThreatListIpv4SourceListStructAList",
      },
      ipv6_dest_list: {
        value: systemIpThreatListIpv6DestListStructAToHclTerraform(this._ipv6DestList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpThreatListIpv6DestListStructAList",
      },
      ipv6_internet_host_list: {
        value: systemIpThreatListIpv6InternetHostListStructAToHclTerraform(this._ipv6InternetHostList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpThreatListIpv6InternetHostListStructAList",
      },
      ipv6_source_list: {
        value: systemIpThreatListIpv6SourceListStructAToHclTerraform(this._ipv6SourceList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpThreatListIpv6SourceListStructAList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(systemIpThreatListSamplingEnableAToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemIpThreatListSamplingEnableAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
