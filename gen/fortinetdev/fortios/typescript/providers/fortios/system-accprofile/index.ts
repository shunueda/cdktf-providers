// https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemAccprofileConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#admintimeout SystemAccprofile#admintimeout}
  */
  readonly admintimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#admintimeout_override SystemAccprofile#admintimeout_override}
  */
  readonly admintimeoutOverride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#authgrp SystemAccprofile#authgrp}
  */
  readonly authgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#cli_config SystemAccprofile#cli_config}
  */
  readonly cliConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#cli_diagnose SystemAccprofile#cli_diagnose}
  */
  readonly cliDiagnose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#cli_exec SystemAccprofile#cli_exec}
  */
  readonly cliExec?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#cli_get SystemAccprofile#cli_get}
  */
  readonly cliGet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#cli_show SystemAccprofile#cli_show}
  */
  readonly cliShow?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#comments SystemAccprofile#comments}
  */
  readonly comments?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#ftviewgrp SystemAccprofile#ftviewgrp}
  */
  readonly ftviewgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#fwgrp SystemAccprofile#fwgrp}
  */
  readonly fwgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#get_all_tables SystemAccprofile#get_all_tables}
  */
  readonly fetchAllTables?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#id SystemAccprofile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#loggrp SystemAccprofile#loggrp}
  */
  readonly loggrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#name SystemAccprofile#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#netgrp SystemAccprofile#netgrp}
  */
  readonly netgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#scope SystemAccprofile#scope}
  */
  readonly scope?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#secfabgrp SystemAccprofile#secfabgrp}
  */
  readonly secfabgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#sysgrp SystemAccprofile#sysgrp}
  */
  readonly sysgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#system_diagnostics SystemAccprofile#system_diagnostics}
  */
  readonly systemDiagnostics?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#system_execute_ssh SystemAccprofile#system_execute_ssh}
  */
  readonly systemExecuteSsh?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#system_execute_telnet SystemAccprofile#system_execute_telnet}
  */
  readonly systemExecuteTelnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#utmgrp SystemAccprofile#utmgrp}
  */
  readonly utmgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#vdomparam SystemAccprofile#vdomparam}
  */
  readonly vdomparam?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#vpngrp SystemAccprofile#vpngrp}
  */
  readonly vpngrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#wanoptgrp SystemAccprofile#wanoptgrp}
  */
  readonly wanoptgrp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#wifi SystemAccprofile#wifi}
  */
  readonly wifi?: string;
  /**
  * fwgrp_permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#fwgrp_permission SystemAccprofile#fwgrp_permission}
  */
  readonly fwgrpPermission?: SystemAccprofileFwgrpPermission;
  /**
  * loggrp_permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#loggrp_permission SystemAccprofile#loggrp_permission}
  */
  readonly loggrpPermission?: SystemAccprofileLoggrpPermission;
  /**
  * netgrp_permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#netgrp_permission SystemAccprofile#netgrp_permission}
  */
  readonly netgrpPermission?: SystemAccprofileNetgrpPermission;
  /**
  * sysgrp_permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#sysgrp_permission SystemAccprofile#sysgrp_permission}
  */
  readonly sysgrpPermission?: SystemAccprofileSysgrpPermission;
  /**
  * utmgrp_permission block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#utmgrp_permission SystemAccprofile#utmgrp_permission}
  */
  readonly utmgrpPermission?: SystemAccprofileUtmgrpPermission;
}
export interface SystemAccprofileFwgrpPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#address SystemAccprofile#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#others SystemAccprofile#others}
  */
  readonly others?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#policy SystemAccprofile#policy}
  */
  readonly policy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#schedule SystemAccprofile#schedule}
  */
  readonly schedule?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#service SystemAccprofile#service}
  */
  readonly service?: string;
}

export function systemAccprofileFwgrpPermissionToTerraform(struct?: SystemAccprofileFwgrpPermissionOutputReference | SystemAccprofileFwgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    others: cdktf.stringToTerraform(struct!.others),
    policy: cdktf.stringToTerraform(struct!.policy),
    schedule: cdktf.stringToTerraform(struct!.schedule),
    service: cdktf.stringToTerraform(struct!.service),
  }
}


export function systemAccprofileFwgrpPermissionToHclTerraform(struct?: SystemAccprofileFwgrpPermissionOutputReference | SystemAccprofileFwgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    others: {
      value: cdktf.stringToHclTerraform(struct!.others),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule: {
      value: cdktf.stringToHclTerraform(struct!.schedule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    service: {
      value: cdktf.stringToHclTerraform(struct!.service),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAccprofileFwgrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAccprofileFwgrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._others !== undefined) {
      hasAnyValues = true;
      internalValueResult.others = this._others;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._schedule !== undefined) {
      hasAnyValues = true;
      internalValueResult.schedule = this._schedule;
    }
    if (this._service !== undefined) {
      hasAnyValues = true;
      internalValueResult.service = this._service;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAccprofileFwgrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._address = undefined;
      this._others = undefined;
      this._policy = undefined;
      this._schedule = undefined;
      this._service = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._address = value.address;
      this._others = value.others;
      this._policy = value.policy;
      this._schedule = value.schedule;
      this._service = value.service;
    }
  }

  // address - computed: true, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // others - computed: true, optional: true, required: false
  private _others?: string; 
  public get others() {
    return this.getStringAttribute('others');
  }
  public set others(value: string) {
    this._others = value;
  }
  public resetOthers() {
    this._others = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get othersInput() {
    return this._others;
  }

  // policy - computed: true, optional: true, required: false
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  public resetPolicy() {
    this._policy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // schedule - computed: true, optional: true, required: false
  private _schedule?: string; 
  public get schedule() {
    return this.getStringAttribute('schedule');
  }
  public set schedule(value: string) {
    this._schedule = value;
  }
  public resetSchedule() {
    this._schedule = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleInput() {
    return this._schedule;
  }

  // service - computed: true, optional: true, required: false
  private _service?: string; 
  public get service() {
    return this.getStringAttribute('service');
  }
  public set service(value: string) {
    this._service = value;
  }
  public resetService() {
    this._service = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceInput() {
    return this._service;
  }
}
export interface SystemAccprofileLoggrpPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#config SystemAccprofile#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#data_access SystemAccprofile#data_access}
  */
  readonly dataAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#report_access SystemAccprofile#report_access}
  */
  readonly reportAccess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#threat_weight SystemAccprofile#threat_weight}
  */
  readonly threatWeight?: string;
}

export function systemAccprofileLoggrpPermissionToTerraform(struct?: SystemAccprofileLoggrpPermissionOutputReference | SystemAccprofileLoggrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    config: cdktf.stringToTerraform(struct!.config),
    data_access: cdktf.stringToTerraform(struct!.dataAccess),
    report_access: cdktf.stringToTerraform(struct!.reportAccess),
    threat_weight: cdktf.stringToTerraform(struct!.threatWeight),
  }
}


export function systemAccprofileLoggrpPermissionToHclTerraform(struct?: SystemAccprofileLoggrpPermissionOutputReference | SystemAccprofileLoggrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    config: {
      value: cdktf.stringToHclTerraform(struct!.config),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_access: {
      value: cdktf.stringToHclTerraform(struct!.dataAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_access: {
      value: cdktf.stringToHclTerraform(struct!.reportAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threat_weight: {
      value: cdktf.stringToHclTerraform(struct!.threatWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAccprofileLoggrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAccprofileLoggrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._config !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config;
    }
    if (this._dataAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataAccess = this._dataAccess;
    }
    if (this._reportAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportAccess = this._reportAccess;
    }
    if (this._threatWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.threatWeight = this._threatWeight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAccprofileLoggrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._config = undefined;
      this._dataAccess = undefined;
      this._reportAccess = undefined;
      this._threatWeight = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._config = value.config;
      this._dataAccess = value.dataAccess;
      this._reportAccess = value.reportAccess;
      this._threatWeight = value.threatWeight;
    }
  }

  // config - computed: true, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // data_access - computed: true, optional: true, required: false
  private _dataAccess?: string; 
  public get dataAccess() {
    return this.getStringAttribute('data_access');
  }
  public set dataAccess(value: string) {
    this._dataAccess = value;
  }
  public resetDataAccess() {
    this._dataAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataAccessInput() {
    return this._dataAccess;
  }

  // report_access - computed: true, optional: true, required: false
  private _reportAccess?: string; 
  public get reportAccess() {
    return this.getStringAttribute('report_access');
  }
  public set reportAccess(value: string) {
    this._reportAccess = value;
  }
  public resetReportAccess() {
    this._reportAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportAccessInput() {
    return this._reportAccess;
  }

  // threat_weight - computed: true, optional: true, required: false
  private _threatWeight?: string; 
  public get threatWeight() {
    return this.getStringAttribute('threat_weight');
  }
  public set threatWeight(value: string) {
    this._threatWeight = value;
  }
  public resetThreatWeight() {
    this._threatWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threatWeightInput() {
    return this._threatWeight;
  }
}
export interface SystemAccprofileNetgrpPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#cfg SystemAccprofile#cfg}
  */
  readonly cfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#packet_capture SystemAccprofile#packet_capture}
  */
  readonly packetCapture?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#route_cfg SystemAccprofile#route_cfg}
  */
  readonly routeCfg?: string;
}

export function systemAccprofileNetgrpPermissionToTerraform(struct?: SystemAccprofileNetgrpPermissionOutputReference | SystemAccprofileNetgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfg: cdktf.stringToTerraform(struct!.cfg),
    packet_capture: cdktf.stringToTerraform(struct!.packetCapture),
    route_cfg: cdktf.stringToTerraform(struct!.routeCfg),
  }
}


export function systemAccprofileNetgrpPermissionToHclTerraform(struct?: SystemAccprofileNetgrpPermissionOutputReference | SystemAccprofileNetgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfg: {
      value: cdktf.stringToHclTerraform(struct!.cfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_capture: {
      value: cdktf.stringToHclTerraform(struct!.packetCapture),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    route_cfg: {
      value: cdktf.stringToHclTerraform(struct!.routeCfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAccprofileNetgrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAccprofileNetgrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfg = this._cfg;
    }
    if (this._packetCapture !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetCapture = this._packetCapture;
    }
    if (this._routeCfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.routeCfg = this._routeCfg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAccprofileNetgrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cfg = undefined;
      this._packetCapture = undefined;
      this._routeCfg = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cfg = value.cfg;
      this._packetCapture = value.packetCapture;
      this._routeCfg = value.routeCfg;
    }
  }

  // cfg - computed: true, optional: true, required: false
  private _cfg?: string; 
  public get cfg() {
    return this.getStringAttribute('cfg');
  }
  public set cfg(value: string) {
    this._cfg = value;
  }
  public resetCfg() {
    this._cfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgInput() {
    return this._cfg;
  }

  // packet_capture - computed: true, optional: true, required: false
  private _packetCapture?: string; 
  public get packetCapture() {
    return this.getStringAttribute('packet_capture');
  }
  public set packetCapture(value: string) {
    this._packetCapture = value;
  }
  public resetPacketCapture() {
    this._packetCapture = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureInput() {
    return this._packetCapture;
  }

  // route_cfg - computed: true, optional: true, required: false
  private _routeCfg?: string; 
  public get routeCfg() {
    return this.getStringAttribute('route_cfg');
  }
  public set routeCfg(value: string) {
    this._routeCfg = value;
  }
  public resetRouteCfg() {
    this._routeCfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeCfgInput() {
    return this._routeCfg;
  }
}
export interface SystemAccprofileSysgrpPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#admin SystemAccprofile#admin}
  */
  readonly admin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#cfg SystemAccprofile#cfg}
  */
  readonly cfg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#mnt SystemAccprofile#mnt}
  */
  readonly mnt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#upd SystemAccprofile#upd}
  */
  readonly upd?: string;
}

export function systemAccprofileSysgrpPermissionToTerraform(struct?: SystemAccprofileSysgrpPermissionOutputReference | SystemAccprofileSysgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin: cdktf.stringToTerraform(struct!.admin),
    cfg: cdktf.stringToTerraform(struct!.cfg),
    mnt: cdktf.stringToTerraform(struct!.mnt),
    upd: cdktf.stringToTerraform(struct!.upd),
  }
}


export function systemAccprofileSysgrpPermissionToHclTerraform(struct?: SystemAccprofileSysgrpPermissionOutputReference | SystemAccprofileSysgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin: {
      value: cdktf.stringToHclTerraform(struct!.admin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfg: {
      value: cdktf.stringToHclTerraform(struct!.cfg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mnt: {
      value: cdktf.stringToHclTerraform(struct!.mnt),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    upd: {
      value: cdktf.stringToHclTerraform(struct!.upd),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAccprofileSysgrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAccprofileSysgrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admin !== undefined) {
      hasAnyValues = true;
      internalValueResult.admin = this._admin;
    }
    if (this._cfg !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfg = this._cfg;
    }
    if (this._mnt !== undefined) {
      hasAnyValues = true;
      internalValueResult.mnt = this._mnt;
    }
    if (this._upd !== undefined) {
      hasAnyValues = true;
      internalValueResult.upd = this._upd;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAccprofileSysgrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._admin = undefined;
      this._cfg = undefined;
      this._mnt = undefined;
      this._upd = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._admin = value.admin;
      this._cfg = value.cfg;
      this._mnt = value.mnt;
      this._upd = value.upd;
    }
  }

  // admin - computed: true, optional: true, required: false
  private _admin?: string; 
  public get admin() {
    return this.getStringAttribute('admin');
  }
  public set admin(value: string) {
    this._admin = value;
  }
  public resetAdmin() {
    this._admin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminInput() {
    return this._admin;
  }

  // cfg - computed: true, optional: true, required: false
  private _cfg?: string; 
  public get cfg() {
    return this.getStringAttribute('cfg');
  }
  public set cfg(value: string) {
    this._cfg = value;
  }
  public resetCfg() {
    this._cfg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfgInput() {
    return this._cfg;
  }

  // mnt - computed: true, optional: true, required: false
  private _mnt?: string; 
  public get mnt() {
    return this.getStringAttribute('mnt');
  }
  public set mnt(value: string) {
    this._mnt = value;
  }
  public resetMnt() {
    this._mnt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mntInput() {
    return this._mnt;
  }

  // upd - computed: true, optional: true, required: false
  private _upd?: string; 
  public get upd() {
    return this.getStringAttribute('upd');
  }
  public set upd(value: string) {
    this._upd = value;
  }
  public resetUpd() {
    this._upd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updInput() {
    return this._upd;
  }
}
export interface SystemAccprofileUtmgrpPermission {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#antivirus SystemAccprofile#antivirus}
  */
  readonly antivirus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#application_control SystemAccprofile#application_control}
  */
  readonly applicationControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#casb SystemAccprofile#casb}
  */
  readonly casb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#data_leak_prevention SystemAccprofile#data_leak_prevention}
  */
  readonly dataLeakPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#data_loss_prevention SystemAccprofile#data_loss_prevention}
  */
  readonly dataLossPrevention?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#dlp SystemAccprofile#dlp}
  */
  readonly dlp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#dnsfilter SystemAccprofile#dnsfilter}
  */
  readonly dnsfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#emailfilter SystemAccprofile#emailfilter}
  */
  readonly emailfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#endpoint_control SystemAccprofile#endpoint_control}
  */
  readonly endpointControl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#file_filter SystemAccprofile#file_filter}
  */
  readonly fileFilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#icap SystemAccprofile#icap}
  */
  readonly icap?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#ips SystemAccprofile#ips}
  */
  readonly ips?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#spamfilter SystemAccprofile#spamfilter}
  */
  readonly spamfilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#telemetry SystemAccprofile#telemetry}
  */
  readonly telemetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#videofilter SystemAccprofile#videofilter}
  */
  readonly videofilter?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#virtual_patch SystemAccprofile#virtual_patch}
  */
  readonly virtualPatch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#voip SystemAccprofile#voip}
  */
  readonly voip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#waf SystemAccprofile#waf}
  */
  readonly waf?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#webfilter SystemAccprofile#webfilter}
  */
  readonly webfilter?: string;
}

export function systemAccprofileUtmgrpPermissionToTerraform(struct?: SystemAccprofileUtmgrpPermissionOutputReference | SystemAccprofileUtmgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    antivirus: cdktf.stringToTerraform(struct!.antivirus),
    application_control: cdktf.stringToTerraform(struct!.applicationControl),
    casb: cdktf.stringToTerraform(struct!.casb),
    data_leak_prevention: cdktf.stringToTerraform(struct!.dataLeakPrevention),
    data_loss_prevention: cdktf.stringToTerraform(struct!.dataLossPrevention),
    dlp: cdktf.stringToTerraform(struct!.dlp),
    dnsfilter: cdktf.stringToTerraform(struct!.dnsfilter),
    emailfilter: cdktf.stringToTerraform(struct!.emailfilter),
    endpoint_control: cdktf.stringToTerraform(struct!.endpointControl),
    file_filter: cdktf.stringToTerraform(struct!.fileFilter),
    icap: cdktf.stringToTerraform(struct!.icap),
    ips: cdktf.stringToTerraform(struct!.ips),
    spamfilter: cdktf.stringToTerraform(struct!.spamfilter),
    telemetry: cdktf.stringToTerraform(struct!.telemetry),
    videofilter: cdktf.stringToTerraform(struct!.videofilter),
    virtual_patch: cdktf.stringToTerraform(struct!.virtualPatch),
    voip: cdktf.stringToTerraform(struct!.voip),
    waf: cdktf.stringToTerraform(struct!.waf),
    webfilter: cdktf.stringToTerraform(struct!.webfilter),
  }
}


export function systemAccprofileUtmgrpPermissionToHclTerraform(struct?: SystemAccprofileUtmgrpPermissionOutputReference | SystemAccprofileUtmgrpPermission): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    antivirus: {
      value: cdktf.stringToHclTerraform(struct!.antivirus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    application_control: {
      value: cdktf.stringToHclTerraform(struct!.applicationControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    casb: {
      value: cdktf.stringToHclTerraform(struct!.casb),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_leak_prevention: {
      value: cdktf.stringToHclTerraform(struct!.dataLeakPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_loss_prevention: {
      value: cdktf.stringToHclTerraform(struct!.dataLossPrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dlp: {
      value: cdktf.stringToHclTerraform(struct!.dlp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnsfilter: {
      value: cdktf.stringToHclTerraform(struct!.dnsfilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    emailfilter: {
      value: cdktf.stringToHclTerraform(struct!.emailfilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_control: {
      value: cdktf.stringToHclTerraform(struct!.endpointControl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file_filter: {
      value: cdktf.stringToHclTerraform(struct!.fileFilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    icap: {
      value: cdktf.stringToHclTerraform(struct!.icap),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ips: {
      value: cdktf.stringToHclTerraform(struct!.ips),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spamfilter: {
      value: cdktf.stringToHclTerraform(struct!.spamfilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    telemetry: {
      value: cdktf.stringToHclTerraform(struct!.telemetry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    videofilter: {
      value: cdktf.stringToHclTerraform(struct!.videofilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    virtual_patch: {
      value: cdktf.stringToHclTerraform(struct!.virtualPatch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    voip: {
      value: cdktf.stringToHclTerraform(struct!.voip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    waf: {
      value: cdktf.stringToHclTerraform(struct!.waf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    webfilter: {
      value: cdktf.stringToHclTerraform(struct!.webfilter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class SystemAccprofileUtmgrpPermissionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): SystemAccprofileUtmgrpPermission | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._antivirus !== undefined) {
      hasAnyValues = true;
      internalValueResult.antivirus = this._antivirus;
    }
    if (this._applicationControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationControl = this._applicationControl;
    }
    if (this._casb !== undefined) {
      hasAnyValues = true;
      internalValueResult.casb = this._casb;
    }
    if (this._dataLeakPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLeakPrevention = this._dataLeakPrevention;
    }
    if (this._dataLossPrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataLossPrevention = this._dataLossPrevention;
    }
    if (this._dlp !== undefined) {
      hasAnyValues = true;
      internalValueResult.dlp = this._dlp;
    }
    if (this._dnsfilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsfilter = this._dnsfilter;
    }
    if (this._emailfilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailfilter = this._emailfilter;
    }
    if (this._endpointControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointControl = this._endpointControl;
    }
    if (this._fileFilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileFilter = this._fileFilter;
    }
    if (this._icap !== undefined) {
      hasAnyValues = true;
      internalValueResult.icap = this._icap;
    }
    if (this._ips !== undefined) {
      hasAnyValues = true;
      internalValueResult.ips = this._ips;
    }
    if (this._spamfilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.spamfilter = this._spamfilter;
    }
    if (this._telemetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.telemetry = this._telemetry;
    }
    if (this._videofilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.videofilter = this._videofilter;
    }
    if (this._virtualPatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.virtualPatch = this._virtualPatch;
    }
    if (this._voip !== undefined) {
      hasAnyValues = true;
      internalValueResult.voip = this._voip;
    }
    if (this._waf !== undefined) {
      hasAnyValues = true;
      internalValueResult.waf = this._waf;
    }
    if (this._webfilter !== undefined) {
      hasAnyValues = true;
      internalValueResult.webfilter = this._webfilter;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: SystemAccprofileUtmgrpPermission | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._antivirus = undefined;
      this._applicationControl = undefined;
      this._casb = undefined;
      this._dataLeakPrevention = undefined;
      this._dataLossPrevention = undefined;
      this._dlp = undefined;
      this._dnsfilter = undefined;
      this._emailfilter = undefined;
      this._endpointControl = undefined;
      this._fileFilter = undefined;
      this._icap = undefined;
      this._ips = undefined;
      this._spamfilter = undefined;
      this._telemetry = undefined;
      this._videofilter = undefined;
      this._virtualPatch = undefined;
      this._voip = undefined;
      this._waf = undefined;
      this._webfilter = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._antivirus = value.antivirus;
      this._applicationControl = value.applicationControl;
      this._casb = value.casb;
      this._dataLeakPrevention = value.dataLeakPrevention;
      this._dataLossPrevention = value.dataLossPrevention;
      this._dlp = value.dlp;
      this._dnsfilter = value.dnsfilter;
      this._emailfilter = value.emailfilter;
      this._endpointControl = value.endpointControl;
      this._fileFilter = value.fileFilter;
      this._icap = value.icap;
      this._ips = value.ips;
      this._spamfilter = value.spamfilter;
      this._telemetry = value.telemetry;
      this._videofilter = value.videofilter;
      this._virtualPatch = value.virtualPatch;
      this._voip = value.voip;
      this._waf = value.waf;
      this._webfilter = value.webfilter;
    }
  }

  // antivirus - computed: true, optional: true, required: false
  private _antivirus?: string; 
  public get antivirus() {
    return this.getStringAttribute('antivirus');
  }
  public set antivirus(value: string) {
    this._antivirus = value;
  }
  public resetAntivirus() {
    this._antivirus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antivirusInput() {
    return this._antivirus;
  }

  // application_control - computed: true, optional: true, required: false
  private _applicationControl?: string; 
  public get applicationControl() {
    return this.getStringAttribute('application_control');
  }
  public set applicationControl(value: string) {
    this._applicationControl = value;
  }
  public resetApplicationControl() {
    this._applicationControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationControlInput() {
    return this._applicationControl;
  }

  // casb - computed: true, optional: true, required: false
  private _casb?: string; 
  public get casb() {
    return this.getStringAttribute('casb');
  }
  public set casb(value: string) {
    this._casb = value;
  }
  public resetCasb() {
    this._casb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get casbInput() {
    return this._casb;
  }

  // data_leak_prevention - computed: true, optional: true, required: false
  private _dataLeakPrevention?: string; 
  public get dataLeakPrevention() {
    return this.getStringAttribute('data_leak_prevention');
  }
  public set dataLeakPrevention(value: string) {
    this._dataLeakPrevention = value;
  }
  public resetDataLeakPrevention() {
    this._dataLeakPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLeakPreventionInput() {
    return this._dataLeakPrevention;
  }

  // data_loss_prevention - computed: true, optional: true, required: false
  private _dataLossPrevention?: string; 
  public get dataLossPrevention() {
    return this.getStringAttribute('data_loss_prevention');
  }
  public set dataLossPrevention(value: string) {
    this._dataLossPrevention = value;
  }
  public resetDataLossPrevention() {
    this._dataLossPrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataLossPreventionInput() {
    return this._dataLossPrevention;
  }

  // dlp - computed: true, optional: true, required: false
  private _dlp?: string; 
  public get dlp() {
    return this.getStringAttribute('dlp');
  }
  public set dlp(value: string) {
    this._dlp = value;
  }
  public resetDlp() {
    this._dlp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dlpInput() {
    return this._dlp;
  }

  // dnsfilter - computed: true, optional: true, required: false
  private _dnsfilter?: string; 
  public get dnsfilter() {
    return this.getStringAttribute('dnsfilter');
  }
  public set dnsfilter(value: string) {
    this._dnsfilter = value;
  }
  public resetDnsfilter() {
    this._dnsfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsfilterInput() {
    return this._dnsfilter;
  }

  // emailfilter - computed: true, optional: true, required: false
  private _emailfilter?: string; 
  public get emailfilter() {
    return this.getStringAttribute('emailfilter');
  }
  public set emailfilter(value: string) {
    this._emailfilter = value;
  }
  public resetEmailfilter() {
    this._emailfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailfilterInput() {
    return this._emailfilter;
  }

  // endpoint_control - computed: true, optional: true, required: false
  private _endpointControl?: string; 
  public get endpointControl() {
    return this.getStringAttribute('endpoint_control');
  }
  public set endpointControl(value: string) {
    this._endpointControl = value;
  }
  public resetEndpointControl() {
    this._endpointControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointControlInput() {
    return this._endpointControl;
  }

  // file_filter - computed: true, optional: true, required: false
  private _fileFilter?: string; 
  public get fileFilter() {
    return this.getStringAttribute('file_filter');
  }
  public set fileFilter(value: string) {
    this._fileFilter = value;
  }
  public resetFileFilter() {
    this._fileFilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileFilterInput() {
    return this._fileFilter;
  }

  // icap - computed: true, optional: true, required: false
  private _icap?: string; 
  public get icap() {
    return this.getStringAttribute('icap');
  }
  public set icap(value: string) {
    this._icap = value;
  }
  public resetIcap() {
    this._icap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get icapInput() {
    return this._icap;
  }

  // ips - computed: true, optional: true, required: false
  private _ips?: string; 
  public get ips() {
    return this.getStringAttribute('ips');
  }
  public set ips(value: string) {
    this._ips = value;
  }
  public resetIps() {
    this._ips = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsInput() {
    return this._ips;
  }

  // spamfilter - computed: false, optional: true, required: false
  private _spamfilter?: string; 
  public get spamfilter() {
    return this.getStringAttribute('spamfilter');
  }
  public set spamfilter(value: string) {
    this._spamfilter = value;
  }
  public resetSpamfilter() {
    this._spamfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spamfilterInput() {
    return this._spamfilter;
  }

  // telemetry - computed: true, optional: true, required: false
  private _telemetry?: string; 
  public get telemetry() {
    return this.getStringAttribute('telemetry');
  }
  public set telemetry(value: string) {
    this._telemetry = value;
  }
  public resetTelemetry() {
    this._telemetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get telemetryInput() {
    return this._telemetry;
  }

  // videofilter - computed: true, optional: true, required: false
  private _videofilter?: string; 
  public get videofilter() {
    return this.getStringAttribute('videofilter');
  }
  public set videofilter(value: string) {
    this._videofilter = value;
  }
  public resetVideofilter() {
    this._videofilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get videofilterInput() {
    return this._videofilter;
  }

  // virtual_patch - computed: true, optional: true, required: false
  private _virtualPatch?: string; 
  public get virtualPatch() {
    return this.getStringAttribute('virtual_patch');
  }
  public set virtualPatch(value: string) {
    this._virtualPatch = value;
  }
  public resetVirtualPatch() {
    this._virtualPatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualPatchInput() {
    return this._virtualPatch;
  }

  // voip - computed: true, optional: true, required: false
  private _voip?: string; 
  public get voip() {
    return this.getStringAttribute('voip');
  }
  public set voip(value: string) {
    this._voip = value;
  }
  public resetVoip() {
    this._voip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voipInput() {
    return this._voip;
  }

  // waf - computed: true, optional: true, required: false
  private _waf?: string; 
  public get waf() {
    return this.getStringAttribute('waf');
  }
  public set waf(value: string) {
    this._waf = value;
  }
  public resetWaf() {
    this._waf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafInput() {
    return this._waf;
  }

  // webfilter - computed: true, optional: true, required: false
  private _webfilter?: string; 
  public get webfilter() {
    return this.getStringAttribute('webfilter');
  }
  public set webfilter(value: string) {
    this._webfilter = value;
  }
  public resetWebfilter() {
    this._webfilter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webfilterInput() {
    return this._webfilter;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile fortios_system_accprofile}
*/
export class SystemAccprofile extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortios_system_accprofile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemAccprofile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemAccprofile to import
  * @param importFromId The id of the existing SystemAccprofile that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemAccprofile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortios_system_accprofile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortios/1.23.0/docs/resources/system_accprofile fortios_system_accprofile} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemAccprofileConfig
  */
  public constructor(scope: Construct, id: string, config: SystemAccprofileConfig) {
    super(scope, id, {
      terraformResourceType: 'fortios_system_accprofile',
      terraformGeneratorMetadata: {
        providerName: 'fortios',
        providerVersion: '1.23.0',
        providerVersionConstraint: '1.23.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._admintimeout = config.admintimeout;
    this._admintimeoutOverride = config.admintimeoutOverride;
    this._authgrp = config.authgrp;
    this._cliConfig = config.cliConfig;
    this._cliDiagnose = config.cliDiagnose;
    this._cliExec = config.cliExec;
    this._cliGet = config.cliGet;
    this._cliShow = config.cliShow;
    this._comments = config.comments;
    this._ftviewgrp = config.ftviewgrp;
    this._fwgrp = config.fwgrp;
    this._getAllTables = config.fetchAllTables;
    this._id = config.id;
    this._loggrp = config.loggrp;
    this._name = config.name;
    this._netgrp = config.netgrp;
    this._scope = config.scope;
    this._secfabgrp = config.secfabgrp;
    this._sysgrp = config.sysgrp;
    this._systemDiagnostics = config.systemDiagnostics;
    this._systemExecuteSsh = config.systemExecuteSsh;
    this._systemExecuteTelnet = config.systemExecuteTelnet;
    this._utmgrp = config.utmgrp;
    this._vdomparam = config.vdomparam;
    this._vpngrp = config.vpngrp;
    this._wanoptgrp = config.wanoptgrp;
    this._wifi = config.wifi;
    this._fwgrpPermission.internalValue = config.fwgrpPermission;
    this._loggrpPermission.internalValue = config.loggrpPermission;
    this._netgrpPermission.internalValue = config.netgrpPermission;
    this._sysgrpPermission.internalValue = config.sysgrpPermission;
    this._utmgrpPermission.internalValue = config.utmgrpPermission;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // admintimeout - computed: true, optional: true, required: false
  private _admintimeout?: number; 
  public get admintimeout() {
    return this.getNumberAttribute('admintimeout');
  }
  public set admintimeout(value: number) {
    this._admintimeout = value;
  }
  public resetAdmintimeout() {
    this._admintimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admintimeoutInput() {
    return this._admintimeout;
  }

  // admintimeout_override - computed: true, optional: true, required: false
  private _admintimeoutOverride?: string; 
  public get admintimeoutOverride() {
    return this.getStringAttribute('admintimeout_override');
  }
  public set admintimeoutOverride(value: string) {
    this._admintimeoutOverride = value;
  }
  public resetAdmintimeoutOverride() {
    this._admintimeoutOverride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admintimeoutOverrideInput() {
    return this._admintimeoutOverride;
  }

  // authgrp - computed: true, optional: true, required: false
  private _authgrp?: string; 
  public get authgrp() {
    return this.getStringAttribute('authgrp');
  }
  public set authgrp(value: string) {
    this._authgrp = value;
  }
  public resetAuthgrp() {
    this._authgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authgrpInput() {
    return this._authgrp;
  }

  // cli_config - computed: true, optional: true, required: false
  private _cliConfig?: string; 
  public get cliConfig() {
    return this.getStringAttribute('cli_config');
  }
  public set cliConfig(value: string) {
    this._cliConfig = value;
  }
  public resetCliConfig() {
    this._cliConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliConfigInput() {
    return this._cliConfig;
  }

  // cli_diagnose - computed: true, optional: true, required: false
  private _cliDiagnose?: string; 
  public get cliDiagnose() {
    return this.getStringAttribute('cli_diagnose');
  }
  public set cliDiagnose(value: string) {
    this._cliDiagnose = value;
  }
  public resetCliDiagnose() {
    this._cliDiagnose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliDiagnoseInput() {
    return this._cliDiagnose;
  }

  // cli_exec - computed: true, optional: true, required: false
  private _cliExec?: string; 
  public get cliExec() {
    return this.getStringAttribute('cli_exec');
  }
  public set cliExec(value: string) {
    this._cliExec = value;
  }
  public resetCliExec() {
    this._cliExec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliExecInput() {
    return this._cliExec;
  }

  // cli_get - computed: true, optional: true, required: false
  private _cliGet?: string; 
  public get cliGet() {
    return this.getStringAttribute('cli_get');
  }
  public set cliGet(value: string) {
    this._cliGet = value;
  }
  public resetCliGet() {
    this._cliGet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliGetInput() {
    return this._cliGet;
  }

  // cli_show - computed: true, optional: true, required: false
  private _cliShow?: string; 
  public get cliShow() {
    return this.getStringAttribute('cli_show');
  }
  public set cliShow(value: string) {
    this._cliShow = value;
  }
  public resetCliShow() {
    this._cliShow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliShowInput() {
    return this._cliShow;
  }

  // comments - computed: false, optional: true, required: false
  private _comments?: string; 
  public get comments() {
    return this.getStringAttribute('comments');
  }
  public set comments(value: string) {
    this._comments = value;
  }
  public resetComments() {
    this._comments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentsInput() {
    return this._comments;
  }

  // ftviewgrp - computed: true, optional: true, required: false
  private _ftviewgrp?: string; 
  public get ftviewgrp() {
    return this.getStringAttribute('ftviewgrp');
  }
  public set ftviewgrp(value: string) {
    this._ftviewgrp = value;
  }
  public resetFtviewgrp() {
    this._ftviewgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ftviewgrpInput() {
    return this._ftviewgrp;
  }

  // fwgrp - computed: true, optional: true, required: false
  private _fwgrp?: string; 
  public get fwgrp() {
    return this.getStringAttribute('fwgrp');
  }
  public set fwgrp(value: string) {
    this._fwgrp = value;
  }
  public resetFwgrp() {
    this._fwgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwgrpInput() {
    return this._fwgrp;
  }

  // get_all_tables - computed: false, optional: true, required: false
  private _getAllTables?: string; 
  public get fetchAllTables() {
    return this.getStringAttribute('get_all_tables');
  }
  public set fetchAllTables(value: string) {
    this._getAllTables = value;
  }
  public resetFetchAllTables() {
    this._getAllTables = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchAllTablesInput() {
    return this._getAllTables;
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

  // loggrp - computed: true, optional: true, required: false
  private _loggrp?: string; 
  public get loggrp() {
    return this.getStringAttribute('loggrp');
  }
  public set loggrp(value: string) {
    this._loggrp = value;
  }
  public resetLoggrp() {
    this._loggrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggrpInput() {
    return this._loggrp;
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

  // netgrp - computed: true, optional: true, required: false
  private _netgrp?: string; 
  public get netgrp() {
    return this.getStringAttribute('netgrp');
  }
  public set netgrp(value: string) {
    this._netgrp = value;
  }
  public resetNetgrp() {
    this._netgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netgrpInput() {
    return this._netgrp;
  }

  // scope - computed: true, optional: true, required: false
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  public resetScope() {
    this._scope = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // secfabgrp - computed: true, optional: true, required: false
  private _secfabgrp?: string; 
  public get secfabgrp() {
    return this.getStringAttribute('secfabgrp');
  }
  public set secfabgrp(value: string) {
    this._secfabgrp = value;
  }
  public resetSecfabgrp() {
    this._secfabgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secfabgrpInput() {
    return this._secfabgrp;
  }

  // sysgrp - computed: true, optional: true, required: false
  private _sysgrp?: string; 
  public get sysgrp() {
    return this.getStringAttribute('sysgrp');
  }
  public set sysgrp(value: string) {
    this._sysgrp = value;
  }
  public resetSysgrp() {
    this._sysgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysgrpInput() {
    return this._sysgrp;
  }

  // system_diagnostics - computed: true, optional: true, required: false
  private _systemDiagnostics?: string; 
  public get systemDiagnostics() {
    return this.getStringAttribute('system_diagnostics');
  }
  public set systemDiagnostics(value: string) {
    this._systemDiagnostics = value;
  }
  public resetSystemDiagnostics() {
    this._systemDiagnostics = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDiagnosticsInput() {
    return this._systemDiagnostics;
  }

  // system_execute_ssh - computed: true, optional: true, required: false
  private _systemExecuteSsh?: string; 
  public get systemExecuteSsh() {
    return this.getStringAttribute('system_execute_ssh');
  }
  public set systemExecuteSsh(value: string) {
    this._systemExecuteSsh = value;
  }
  public resetSystemExecuteSsh() {
    this._systemExecuteSsh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemExecuteSshInput() {
    return this._systemExecuteSsh;
  }

  // system_execute_telnet - computed: true, optional: true, required: false
  private _systemExecuteTelnet?: string; 
  public get systemExecuteTelnet() {
    return this.getStringAttribute('system_execute_telnet');
  }
  public set systemExecuteTelnet(value: string) {
    this._systemExecuteTelnet = value;
  }
  public resetSystemExecuteTelnet() {
    this._systemExecuteTelnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemExecuteTelnetInput() {
    return this._systemExecuteTelnet;
  }

  // utmgrp - computed: true, optional: true, required: false
  private _utmgrp?: string; 
  public get utmgrp() {
    return this.getStringAttribute('utmgrp');
  }
  public set utmgrp(value: string) {
    this._utmgrp = value;
  }
  public resetUtmgrp() {
    this._utmgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmgrpInput() {
    return this._utmgrp;
  }

  // vdomparam - computed: true, optional: true, required: false
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

  // vpngrp - computed: true, optional: true, required: false
  private _vpngrp?: string; 
  public get vpngrp() {
    return this.getStringAttribute('vpngrp');
  }
  public set vpngrp(value: string) {
    this._vpngrp = value;
  }
  public resetVpngrp() {
    this._vpngrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpngrpInput() {
    return this._vpngrp;
  }

  // wanoptgrp - computed: true, optional: true, required: false
  private _wanoptgrp?: string; 
  public get wanoptgrp() {
    return this.getStringAttribute('wanoptgrp');
  }
  public set wanoptgrp(value: string) {
    this._wanoptgrp = value;
  }
  public resetWanoptgrp() {
    this._wanoptgrp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wanoptgrpInput() {
    return this._wanoptgrp;
  }

  // wifi - computed: true, optional: true, required: false
  private _wifi?: string; 
  public get wifi() {
    return this.getStringAttribute('wifi');
  }
  public set wifi(value: string) {
    this._wifi = value;
  }
  public resetWifi() {
    this._wifi = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wifiInput() {
    return this._wifi;
  }

  // fwgrp_permission - computed: false, optional: true, required: false
  private _fwgrpPermission = new SystemAccprofileFwgrpPermissionOutputReference(this, "fwgrp_permission");
  public get fwgrpPermission() {
    return this._fwgrpPermission;
  }
  public putFwgrpPermission(value: SystemAccprofileFwgrpPermission) {
    this._fwgrpPermission.internalValue = value;
  }
  public resetFwgrpPermission() {
    this._fwgrpPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fwgrpPermissionInput() {
    return this._fwgrpPermission.internalValue;
  }

  // loggrp_permission - computed: false, optional: true, required: false
  private _loggrpPermission = new SystemAccprofileLoggrpPermissionOutputReference(this, "loggrp_permission");
  public get loggrpPermission() {
    return this._loggrpPermission;
  }
  public putLoggrpPermission(value: SystemAccprofileLoggrpPermission) {
    this._loggrpPermission.internalValue = value;
  }
  public resetLoggrpPermission() {
    this._loggrpPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggrpPermissionInput() {
    return this._loggrpPermission.internalValue;
  }

  // netgrp_permission - computed: false, optional: true, required: false
  private _netgrpPermission = new SystemAccprofileNetgrpPermissionOutputReference(this, "netgrp_permission");
  public get netgrpPermission() {
    return this._netgrpPermission;
  }
  public putNetgrpPermission(value: SystemAccprofileNetgrpPermission) {
    this._netgrpPermission.internalValue = value;
  }
  public resetNetgrpPermission() {
    this._netgrpPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netgrpPermissionInput() {
    return this._netgrpPermission.internalValue;
  }

  // sysgrp_permission - computed: false, optional: true, required: false
  private _sysgrpPermission = new SystemAccprofileSysgrpPermissionOutputReference(this, "sysgrp_permission");
  public get sysgrpPermission() {
    return this._sysgrpPermission;
  }
  public putSysgrpPermission(value: SystemAccprofileSysgrpPermission) {
    this._sysgrpPermission.internalValue = value;
  }
  public resetSysgrpPermission() {
    this._sysgrpPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sysgrpPermissionInput() {
    return this._sysgrpPermission.internalValue;
  }

  // utmgrp_permission - computed: false, optional: true, required: false
  private _utmgrpPermission = new SystemAccprofileUtmgrpPermissionOutputReference(this, "utmgrp_permission");
  public get utmgrpPermission() {
    return this._utmgrpPermission;
  }
  public putUtmgrpPermission(value: SystemAccprofileUtmgrpPermission) {
    this._utmgrpPermission.internalValue = value;
  }
  public resetUtmgrpPermission() {
    this._utmgrpPermission.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get utmgrpPermissionInput() {
    return this._utmgrpPermission.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      admintimeout: cdktf.numberToTerraform(this._admintimeout),
      admintimeout_override: cdktf.stringToTerraform(this._admintimeoutOverride),
      authgrp: cdktf.stringToTerraform(this._authgrp),
      cli_config: cdktf.stringToTerraform(this._cliConfig),
      cli_diagnose: cdktf.stringToTerraform(this._cliDiagnose),
      cli_exec: cdktf.stringToTerraform(this._cliExec),
      cli_get: cdktf.stringToTerraform(this._cliGet),
      cli_show: cdktf.stringToTerraform(this._cliShow),
      comments: cdktf.stringToTerraform(this._comments),
      ftviewgrp: cdktf.stringToTerraform(this._ftviewgrp),
      fwgrp: cdktf.stringToTerraform(this._fwgrp),
      get_all_tables: cdktf.stringToTerraform(this._getAllTables),
      id: cdktf.stringToTerraform(this._id),
      loggrp: cdktf.stringToTerraform(this._loggrp),
      name: cdktf.stringToTerraform(this._name),
      netgrp: cdktf.stringToTerraform(this._netgrp),
      scope: cdktf.stringToTerraform(this._scope),
      secfabgrp: cdktf.stringToTerraform(this._secfabgrp),
      sysgrp: cdktf.stringToTerraform(this._sysgrp),
      system_diagnostics: cdktf.stringToTerraform(this._systemDiagnostics),
      system_execute_ssh: cdktf.stringToTerraform(this._systemExecuteSsh),
      system_execute_telnet: cdktf.stringToTerraform(this._systemExecuteTelnet),
      utmgrp: cdktf.stringToTerraform(this._utmgrp),
      vdomparam: cdktf.stringToTerraform(this._vdomparam),
      vpngrp: cdktf.stringToTerraform(this._vpngrp),
      wanoptgrp: cdktf.stringToTerraform(this._wanoptgrp),
      wifi: cdktf.stringToTerraform(this._wifi),
      fwgrp_permission: systemAccprofileFwgrpPermissionToTerraform(this._fwgrpPermission.internalValue),
      loggrp_permission: systemAccprofileLoggrpPermissionToTerraform(this._loggrpPermission.internalValue),
      netgrp_permission: systemAccprofileNetgrpPermissionToTerraform(this._netgrpPermission.internalValue),
      sysgrp_permission: systemAccprofileSysgrpPermissionToTerraform(this._sysgrpPermission.internalValue),
      utmgrp_permission: systemAccprofileUtmgrpPermissionToTerraform(this._utmgrpPermission.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      admintimeout: {
        value: cdktf.numberToHclTerraform(this._admintimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      admintimeout_override: {
        value: cdktf.stringToHclTerraform(this._admintimeoutOverride),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authgrp: {
        value: cdktf.stringToHclTerraform(this._authgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_config: {
        value: cdktf.stringToHclTerraform(this._cliConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_diagnose: {
        value: cdktf.stringToHclTerraform(this._cliDiagnose),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_exec: {
        value: cdktf.stringToHclTerraform(this._cliExec),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_get: {
        value: cdktf.stringToHclTerraform(this._cliGet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cli_show: {
        value: cdktf.stringToHclTerraform(this._cliShow),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comments: {
        value: cdktf.stringToHclTerraform(this._comments),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ftviewgrp: {
        value: cdktf.stringToHclTerraform(this._ftviewgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwgrp: {
        value: cdktf.stringToHclTerraform(this._fwgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      get_all_tables: {
        value: cdktf.stringToHclTerraform(this._getAllTables),
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
      loggrp: {
        value: cdktf.stringToHclTerraform(this._loggrp),
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
      netgrp: {
        value: cdktf.stringToHclTerraform(this._netgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secfabgrp: {
        value: cdktf.stringToHclTerraform(this._secfabgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sysgrp: {
        value: cdktf.stringToHclTerraform(this._sysgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_diagnostics: {
        value: cdktf.stringToHclTerraform(this._systemDiagnostics),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_execute_ssh: {
        value: cdktf.stringToHclTerraform(this._systemExecuteSsh),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_execute_telnet: {
        value: cdktf.stringToHclTerraform(this._systemExecuteTelnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      utmgrp: {
        value: cdktf.stringToHclTerraform(this._utmgrp),
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
      vpngrp: {
        value: cdktf.stringToHclTerraform(this._vpngrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wanoptgrp: {
        value: cdktf.stringToHclTerraform(this._wanoptgrp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wifi: {
        value: cdktf.stringToHclTerraform(this._wifi),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fwgrp_permission: {
        value: systemAccprofileFwgrpPermissionToHclTerraform(this._fwgrpPermission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAccprofileFwgrpPermissionList",
      },
      loggrp_permission: {
        value: systemAccprofileLoggrpPermissionToHclTerraform(this._loggrpPermission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAccprofileLoggrpPermissionList",
      },
      netgrp_permission: {
        value: systemAccprofileNetgrpPermissionToHclTerraform(this._netgrpPermission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAccprofileNetgrpPermissionList",
      },
      sysgrp_permission: {
        value: systemAccprofileSysgrpPermissionToHclTerraform(this._sysgrpPermission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAccprofileSysgrpPermissionList",
      },
      utmgrp_permission: {
        value: systemAccprofileUtmgrpPermissionToHclTerraform(this._utmgrpPermission.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "SystemAccprofileUtmgrpPermissionList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
