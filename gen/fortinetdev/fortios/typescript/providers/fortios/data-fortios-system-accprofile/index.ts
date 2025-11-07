// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_accprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiosSystemAccprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_accprofile#id DataFortiosSystemAccprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_accprofile#name DataFortiosSystemAccprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_accprofile#vdomparam DataFortiosSystemAccprofile#vdomparam}
  */
  readonly vdomparam?: string;
}
export interface DataFortiosSystemAccprofileFwgrpPermission {
}

export function dataFortiosSystemAccprofileFwgrpPermissionToTerraform(struct?: DataFortiosSystemAccprofileFwgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAccprofileFwgrpPermissionToHclTerraform(struct?: DataFortiosSystemAccprofileFwgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAccprofileFwgrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemAccprofileFwgrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAccprofileFwgrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // address - computed: true, optional: false, required: false
  public get address() {
    return this.getStringAttribute('address');
  }

  // others - computed: true, optional: false, required: false
  public get others() {
    return this.getStringAttribute('others');
  }

  // policy - computed: true, optional: false, required: false
  public get policy() {
    return this.getStringAttribute('policy');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getStringAttribute('service');
  }
}

export class DataFortiosSystemAccprofileFwgrpPermissionList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAccprofileFwgrpPermissionOutputReference {
    return new DataFortiosSystemAccprofileFwgrpPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAccprofileLoggrpPermission {
}

export function dataFortiosSystemAccprofileLoggrpPermissionToTerraform(struct?: DataFortiosSystemAccprofileLoggrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAccprofileLoggrpPermissionToHclTerraform(struct?: DataFortiosSystemAccprofileLoggrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAccprofileLoggrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemAccprofileLoggrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAccprofileLoggrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config - computed: true, optional: false, required: false
  public get config() {
    return this.getStringAttribute('config');
  }

  // data_access - computed: true, optional: false, required: false
  public get dataAccess() {
    return this.getStringAttribute('data_access');
  }

  // report_access - computed: true, optional: false, required: false
  public get reportAccess() {
    return this.getStringAttribute('report_access');
  }

  // threat_weight - computed: true, optional: false, required: false
  public get threatWeight() {
    return this.getStringAttribute('threat_weight');
  }
}

export class DataFortiosSystemAccprofileLoggrpPermissionList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAccprofileLoggrpPermissionOutputReference {
    return new DataFortiosSystemAccprofileLoggrpPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAccprofileNetgrpPermission {
}

export function dataFortiosSystemAccprofileNetgrpPermissionToTerraform(struct?: DataFortiosSystemAccprofileNetgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAccprofileNetgrpPermissionToHclTerraform(struct?: DataFortiosSystemAccprofileNetgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAccprofileNetgrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemAccprofileNetgrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAccprofileNetgrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // cfg - computed: true, optional: false, required: false
  public get cfg() {
    return this.getStringAttribute('cfg');
  }

  // packet_capture - computed: true, optional: false, required: false
  public get packetCapture() {
    return this.getStringAttribute('packet_capture');
  }

  // route_cfg - computed: true, optional: false, required: false
  public get routeCfg() {
    return this.getStringAttribute('route_cfg');
  }
}

export class DataFortiosSystemAccprofileNetgrpPermissionList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAccprofileNetgrpPermissionOutputReference {
    return new DataFortiosSystemAccprofileNetgrpPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAccprofileSysgrpPermission {
}

export function dataFortiosSystemAccprofileSysgrpPermissionToTerraform(struct?: DataFortiosSystemAccprofileSysgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAccprofileSysgrpPermissionToHclTerraform(struct?: DataFortiosSystemAccprofileSysgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAccprofileSysgrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemAccprofileSysgrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAccprofileSysgrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // admin - computed: true, optional: false, required: false
  public get admin() {
    return this.getStringAttribute('admin');
  }

  // cfg - computed: true, optional: false, required: false
  public get cfg() {
    return this.getStringAttribute('cfg');
  }

  // mnt - computed: true, optional: false, required: false
  public get mnt() {
    return this.getStringAttribute('mnt');
  }

  // upd - computed: true, optional: false, required: false
  public get upd() {
    return this.getStringAttribute('upd');
  }
}

export class DataFortiosSystemAccprofileSysgrpPermissionList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAccprofileSysgrpPermissionOutputReference {
    return new DataFortiosSystemAccprofileSysgrpPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataFortiosSystemAccprofileUtmgrpPermission {
}

export function dataFortiosSystemAccprofileUtmgrpPermissionToTerraform(struct?: DataFortiosSystemAccprofileUtmgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiosSystemAccprofileUtmgrpPermissionToHclTerraform(struct?: DataFortiosSystemAccprofileUtmgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiosSystemAccprofileUtmgrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiosSystemAccprofileUtmgrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiosSystemAccprofileUtmgrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // antivirus - computed: true, optional: false, required: false
  public get antivirus() {
    return this.getStringAttribute('antivirus');
  }

  // application_control - computed: true, optional: false, required: false
  public get applicationControl() {
    return this.getStringAttribute('application_control');
  }

  // casb - computed: true, optional: false, required: false
  public get casb() {
    return this.getStringAttribute('casb');
  }

  // data_leak_prevention - computed: true, optional: false, required: false
  public get dataLeakPrevention() {
    return this.getStringAttribute('data_leak_prevention');
  }

  // data_loss_prevention - computed: true, optional: false, required: false
  public get dataLossPrevention() {
    return this.getStringAttribute('data_loss_prevention');
  }

  // dlp - computed: true, optional: false, required: false
  public get dlp() {
    return this.getStringAttribute('dlp');
  }

  // dnsfilter - computed: true, optional: false, required: false
  public get dnsfilter() {
    return this.getStringAttribute('dnsfilter');
  }

  // emailfilter - computed: true, optional: false, required: false
  public get emailfilter() {
    return this.getStringAttribute('emailfilter');
  }

  // endpoint_control - computed: true, optional: false, required: false
  public get endpointControl() {
    return this.getStringAttribute('endpoint_control');
  }

  // file_filter - computed: true, optional: false, required: false
  public get fileFilter() {
    return this.getStringAttribute('file_filter');
  }

  // icap - computed: true, optional: false, required: false
  public get icap() {
    return this.getStringAttribute('icap');
  }

  // ips - computed: true, optional: false, required: false
  public get ips() {
    return this.getStringAttribute('ips');
  }

  // spamfilter - computed: true, optional: false, required: false
  public get spamfilter() {
    return this.getStringAttribute('spamfilter');
  }

  // telemetry - computed: true, optional: false, required: false
  public get telemetry() {
    return this.getStringAttribute('telemetry');
  }

  // videofilter - computed: true, optional: false, required: false
  public get videofilter() {
    return this.getStringAttribute('videofilter');
  }

  // virtual_patch - computed: true, optional: false, required: false
  public get virtualPatch() {
    return this.getStringAttribute('virtual_patch');
  }

  // voip - computed: true, optional: false, required: false
  public get voip() {
    return this.getStringAttribute('voip');
  }

  // waf - computed: true, optional: false, required: false
  public get waf() {
    return this.getStringAttribute('waf');
  }

  // webfilter - computed: true, optional: false, required: false
  public get webfilter() {
    return this.getStringAttribute('webfilter');
  }
}

export class DataFortiosSystemAccprofileUtmgrpPermissionList extends cdktf.ComplexList {

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
  public get(index: number): DataFortiosSystemAccprofileUtmgrpPermissionOutputReference {
    return new DataFortiosSystemAccprofileUtmgrpPermissionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_accprofile fortios_system_accprofile}
*/
export class DataFortiosSystemAccprofile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_accprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiosSystemAccprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiosSystemAccprofile to import
  * @param importFromId The id of the existing DataFortiosSystemAccprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_accprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiosSystemAccprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_accprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/data-sources/system_accprofile fortios_system_accprofile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiosSystemAccprofileConfig
  */
  public constructor(scope: Construct, id: string, config: DataFortiosSystemAccprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_accprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0'
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
    this._name = config.name;
    this._vdomparam = config.vdomparam;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admintimeout - computed: true, optional: false, required: false
  public get admintimeout() {
    return this.getNumberAttribute('admintimeout');
  }

  // admintimeout_override - computed: true, optional: false, required: false
  public get admintimeoutOverride() {
    return this.getStringAttribute('admintimeout_override');
  }

  // authgrp - computed: true, optional: false, required: false
  public get authgrp() {
    return this.getStringAttribute('authgrp');
  }

  // cli_config - computed: true, optional: false, required: false
  public get cliConfig() {
    return this.getStringAttribute('cli_config');
  }

  // cli_diagnose - computed: true, optional: false, required: false
  public get cliDiagnose() {
    return this.getStringAttribute('cli_diagnose');
  }

  // cli_exec - computed: true, optional: false, required: false
  public get cliExec() {
    return this.getStringAttribute('cli_exec');
  }

  // cli_get - computed: true, optional: false, required: false
  public get cliGet() {
    return this.getStringAttribute('cli_get');
  }

  // cli_show - computed: true, optional: false, required: false
  public get cliShow() {
    return this.getStringAttribute('cli_show');
  }

  // comments - computed: true, optional: false, required: false
  public get comments() {
    return this.getStringAttribute('comments');
  }

  // ftviewgrp - computed: true, optional: false, required: false
  public get ftviewgrp() {
    return this.getStringAttribute('ftviewgrp');
  }

  // fwgrp - computed: true, optional: false, required: false
  public get fwgrp() {
    return this.getStringAttribute('fwgrp');
  }

  // fwgrp_permission - computed: true, optional: false, required: false
  private _fwgrpPermission = new DataFortiosSystemAccprofileFwgrpPermissionList(this, "fwgrp_permission", false);
  public get fwgrpPermission() {
    return this._fwgrpPermission;
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

  // loggrp - computed: true, optional: false, required: false
  public get loggrp() {
    return this.getStringAttribute('loggrp');
  }

  // loggrp_permission - computed: true, optional: false, required: false
  private _loggrpPermission = new DataFortiosSystemAccprofileLoggrpPermissionList(this, "loggrp_permission", false);
  public get loggrpPermission() {
    return this._loggrpPermission;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // netgrp - computed: true, optional: false, required: false
  public get netgrp() {
    return this.getStringAttribute('netgrp');
  }

  // netgrp_permission - computed: true, optional: false, required: false
  private _netgrpPermission = new DataFortiosSystemAccprofileNetgrpPermissionList(this, "netgrp_permission", false);
  public get netgrpPermission() {
    return this._netgrpPermission;
  }

  // scope - computed: true, optional: false, required: false
  public get scope() {
    return this.getStringAttribute('scope');
  }

  // secfabgrp - computed: true, optional: false, required: false
  public get secfabgrp() {
    return this.getStringAttribute('secfabgrp');
  }

  // sysgrp - computed: true, optional: false, required: false
  public get sysgrp() {
    return this.getStringAttribute('sysgrp');
  }

  // sysgrp_permission - computed: true, optional: false, required: false
  private _sysgrpPermission = new DataFortiosSystemAccprofileSysgrpPermissionList(this, "sysgrp_permission", false);
  public get sysgrpPermission() {
    return this._sysgrpPermission;
  }

  // system_diagnostics - computed: true, optional: false, required: false
  public get systemDiagnostics() {
    return this.getStringAttribute('system_diagnostics');
  }

  // system_execute_ssh - computed: true, optional: false, required: false
  public get systemExecuteSsh() {
    return this.getStringAttribute('system_execute_ssh');
  }

  // system_execute_telnet - computed: true, optional: false, required: false
  public get systemExecuteTelnet() {
    return this.getStringAttribute('system_execute_telnet');
  }

  // utmgrp - computed: true, optional: false, required: false
  public get utmgrp() {
    return this.getStringAttribute('utmgrp');
  }

  // utmgrp_permission - computed: true, optional: false, required: false
  private _utmgrpPermission = new DataFortiosSystemAccprofileUtmgrpPermissionList(this, "utmgrp_permission", false);
  public get utmgrpPermission() {
    return this._utmgrpPermission;
  }

  // vdomparam - computed: false, optional: true, required: false
  private _vdomparam?: string; 
  public get vdomparam() {
    return this.getStringAttribute('vdomparam');
  }
  public set vdomparam(value: string) {
    this._vdomparam = value;
  }
  public resetVdomparam() {
    this._vdomparam = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomparamInput() {
    return this._vdomparam;
  }

  // vpngrp - computed: true, optional: false, required: false
  public get vpngrp() {
    return this.getStringAttribute('vpngrp');
  }

  // wanoptgrp - computed: true, optional: false, required: false
  public get wanoptgrp() {
    return this.getStringAttribute('wanoptgrp');
  }

  // wifi - computed: true, optional: false, required: false
  public get wifi() {
    return this.getStringAttribute('wifi');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdomparam: {
        value: cdktf.stringToHclTerraform(this._vdomparam),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
