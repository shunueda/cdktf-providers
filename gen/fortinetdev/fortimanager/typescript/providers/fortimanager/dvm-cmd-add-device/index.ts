// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DvmCmdAddDeviceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#dynamic_sort_subtable DvmCmdAddDevice#dynamic_sort_subtable}
  */
  readonly dynamicSortSubtable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#flags DvmCmdAddDevice#flags}
  */
  readonly flags?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#fmgadom DvmCmdAddDevice#fmgadom}
  */
  readonly fmgadom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#force_recreate DvmCmdAddDevice#force_recreate}
  */
  readonly forceRecreate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#id DvmCmdAddDevice#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * device block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#device DvmCmdAddDevice#device}
  */
  readonly device?: DvmCmdAddDeviceDevice;
  /**
  * groups block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#groups DvmCmdAddDevice#groups}
  */
  readonly groups?: DvmCmdAddDeviceGroups[] | cdktf.IResolvable;
}
export interface DvmCmdAddDeviceDevice {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#adm_pass DvmCmdAddDevice#adm_pass}
  */
  readonly admPass?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#adm_usr DvmCmdAddDevice#adm_usr}
  */
  readonly admUsr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#authorizationtemplate DvmCmdAddDevice#authorizationtemplate}
  */
  readonly authorizationtemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#desc DvmCmdAddDevice#desc}
  */
  readonly desc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#deviceaction DvmCmdAddDevice#deviceaction}
  */
  readonly deviceaction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#deviceblueprint DvmCmdAddDevice#deviceblueprint}
  */
  readonly deviceblueprint?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#fazquota DvmCmdAddDevice#fazquota}
  */
  readonly fazquota?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#ip DvmCmdAddDevice#ip}
  */
  readonly ip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#metafields DvmCmdAddDevice#metafields}
  */
  readonly metafields?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#metafields_map DvmCmdAddDevice#metafields_map}
  */
  readonly metafieldsMap?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#mgmt_mode DvmCmdAddDevice#mgmt_mode}
  */
  readonly mgmtMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#mr DvmCmdAddDevice#mr}
  */
  readonly mr?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#name DvmCmdAddDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#os_type DvmCmdAddDevice#os_type}
  */
  readonly osType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#os_ver DvmCmdAddDevice#os_ver}
  */
  readonly osVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#patch DvmCmdAddDevice#patch}
  */
  readonly patch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#platform_str DvmCmdAddDevice#platform_str}
  */
  readonly platformStr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#sn DvmCmdAddDevice#sn}
  */
  readonly sn?: string;
}

export function dvmCmdAddDeviceDeviceToTerraform(struct?: DvmCmdAddDeviceDeviceOutputReference | DvmCmdAddDeviceDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    adm_pass: cdktf.stringToTerraform(struct!.admPass),
    adm_usr: cdktf.stringToTerraform(struct!.admUsr),
    authorizationtemplate: cdktf.stringToTerraform(struct!.authorizationtemplate),
    desc: cdktf.stringToTerraform(struct!.desc),
    deviceaction: cdktf.stringToTerraform(struct!.deviceaction),
    deviceblueprint: cdktf.stringToTerraform(struct!.deviceblueprint),
    fazquota: cdktf.numberToTerraform(struct!.fazquota),
    ip: cdktf.stringToTerraform(struct!.ip),
    metafields: cdktf.stringToTerraform(struct!.metafields),
    metafields_map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metafieldsMap),
    mgmt_mode: cdktf.stringToTerraform(struct!.mgmtMode),
    mr: cdktf.numberToTerraform(struct!.mr),
    name: cdktf.stringToTerraform(struct!.name),
    os_type: cdktf.stringToTerraform(struct!.osType),
    os_ver: cdktf.stringToTerraform(struct!.osVer),
    patch: cdktf.numberToTerraform(struct!.patch),
    platform_str: cdktf.stringToTerraform(struct!.platformStr),
    sn: cdktf.stringToTerraform(struct!.sn),
  }
}


export function dvmCmdAddDeviceDeviceToHclTerraform(struct?: DvmCmdAddDeviceDeviceOutputReference | DvmCmdAddDeviceDevice): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    adm_pass: {
      value: cdktf.stringToHclTerraform(struct!.admPass),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    adm_usr: {
      value: cdktf.stringToHclTerraform(struct!.admUsr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorizationtemplate: {
      value: cdktf.stringToHclTerraform(struct!.authorizationtemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desc: {
      value: cdktf.stringToHclTerraform(struct!.desc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deviceaction: {
      value: cdktf.stringToHclTerraform(struct!.deviceaction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    deviceblueprint: {
      value: cdktf.stringToHclTerraform(struct!.deviceblueprint),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fazquota: {
      value: cdktf.numberToHclTerraform(struct!.fazquota),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metafields: {
      value: cdktf.stringToHclTerraform(struct!.metafields),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metafields_map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metafieldsMap),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    mgmt_mode: {
      value: cdktf.stringToHclTerraform(struct!.mgmtMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mr: {
      value: cdktf.numberToHclTerraform(struct!.mr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_type: {
      value: cdktf.stringToHclTerraform(struct!.osType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    os_ver: {
      value: cdktf.stringToHclTerraform(struct!.osVer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    patch: {
      value: cdktf.numberToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    platform_str: {
      value: cdktf.stringToHclTerraform(struct!.platformStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sn: {
      value: cdktf.stringToHclTerraform(struct!.sn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DvmCmdAddDeviceDeviceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DvmCmdAddDeviceDevice | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admPass !== undefined) {
      hasAnyValues = true;
      internalValueResult.admPass = this._admPass;
    }
    if (this._admUsr !== undefined) {
      hasAnyValues = true;
      internalValueResult.admUsr = this._admUsr;
    }
    if (this._authorizationtemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationtemplate = this._authorizationtemplate;
    }
    if (this._desc !== undefined) {
      hasAnyValues = true;
      internalValueResult.desc = this._desc;
    }
    if (this._deviceaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceaction = this._deviceaction;
    }
    if (this._deviceblueprint !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceblueprint = this._deviceblueprint;
    }
    if (this._fazquota !== undefined) {
      hasAnyValues = true;
      internalValueResult.fazquota = this._fazquota;
    }
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._metafields !== undefined) {
      hasAnyValues = true;
      internalValueResult.metafields = this._metafields;
    }
    if (this._metafieldsMap !== undefined) {
      hasAnyValues = true;
      internalValueResult.metafieldsMap = this._metafieldsMap;
    }
    if (this._mgmtMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mgmtMode = this._mgmtMode;
    }
    if (this._mr !== undefined) {
      hasAnyValues = true;
      internalValueResult.mr = this._mr;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._osType !== undefined) {
      hasAnyValues = true;
      internalValueResult.osType = this._osType;
    }
    if (this._osVer !== undefined) {
      hasAnyValues = true;
      internalValueResult.osVer = this._osVer;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._platformStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.platformStr = this._platformStr;
    }
    if (this._sn !== undefined) {
      hasAnyValues = true;
      internalValueResult.sn = this._sn;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DvmCmdAddDeviceDevice | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._admPass = undefined;
      this._admUsr = undefined;
      this._authorizationtemplate = undefined;
      this._desc = undefined;
      this._deviceaction = undefined;
      this._deviceblueprint = undefined;
      this._fazquota = undefined;
      this._ip = undefined;
      this._metafields = undefined;
      this._metafieldsMap = undefined;
      this._mgmtMode = undefined;
      this._mr = undefined;
      this._name = undefined;
      this._osType = undefined;
      this._osVer = undefined;
      this._patch = undefined;
      this._platformStr = undefined;
      this._sn = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._admPass = value.admPass;
      this._admUsr = value.admUsr;
      this._authorizationtemplate = value.authorizationtemplate;
      this._desc = value.desc;
      this._deviceaction = value.deviceaction;
      this._deviceblueprint = value.deviceblueprint;
      this._fazquota = value.fazquota;
      this._ip = value.ip;
      this._metafields = value.metafields;
      this._metafieldsMap = value.metafieldsMap;
      this._mgmtMode = value.mgmtMode;
      this._mr = value.mr;
      this._name = value.name;
      this._osType = value.osType;
      this._osVer = value.osVer;
      this._patch = value.patch;
      this._platformStr = value.platformStr;
      this._sn = value.sn;
    }
  }

  // adm_pass - computed: true, optional: true, required: false
  private _admPass?: string; 
  public get admPass() {
    return this.getStringAttribute('adm_pass');
  }
  public set admPass(value: string) {
    this._admPass = value;
  }
  public resetAdmPass() {
    this._admPass = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admPassInput() {
    return this._admPass;
  }

  // adm_usr - computed: false, optional: true, required: false
  private _admUsr?: string; 
  public get admUsr() {
    return this.getStringAttribute('adm_usr');
  }
  public set admUsr(value: string) {
    this._admUsr = value;
  }
  public resetAdmUsr() {
    this._admUsr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admUsrInput() {
    return this._admUsr;
  }

  // authorizationtemplate - computed: false, optional: true, required: false
  private _authorizationtemplate?: string; 
  public get authorizationtemplate() {
    return this.getStringAttribute('authorizationtemplate');
  }
  public set authorizationtemplate(value: string) {
    this._authorizationtemplate = value;
  }
  public resetAuthorizationtemplate() {
    this._authorizationtemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationtemplateInput() {
    return this._authorizationtemplate;
  }

  // desc - computed: false, optional: true, required: false
  private _desc?: string; 
  public get desc() {
    return this.getStringAttribute('desc');
  }
  public set desc(value: string) {
    this._desc = value;
  }
  public resetDesc() {
    this._desc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descInput() {
    return this._desc;
  }

  // deviceaction - computed: false, optional: true, required: false
  private _deviceaction?: string; 
  public get deviceaction() {
    return this.getStringAttribute('deviceaction');
  }
  public set deviceaction(value: string) {
    this._deviceaction = value;
  }
  public resetDeviceaction() {
    this._deviceaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceactionInput() {
    return this._deviceaction;
  }

  // deviceblueprint - computed: false, optional: true, required: false
  private _deviceblueprint?: string; 
  public get deviceblueprint() {
    return this.getStringAttribute('deviceblueprint');
  }
  public set deviceblueprint(value: string) {
    this._deviceblueprint = value;
  }
  public resetDeviceblueprint() {
    this._deviceblueprint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceblueprintInput() {
    return this._deviceblueprint;
  }

  // fazquota - computed: false, optional: true, required: false
  private _fazquota?: number; 
  public get fazquota() {
    return this.getNumberAttribute('fazquota');
  }
  public set fazquota(value: number) {
    this._fazquota = value;
  }
  public resetFazquota() {
    this._fazquota = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fazquotaInput() {
    return this._fazquota;
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // metafields - computed: false, optional: true, required: false
  private _metafields?: string; 
  public get metafields() {
    return this.getStringAttribute('metafields');
  }
  public set metafields(value: string) {
    this._metafields = value;
  }
  public resetMetafields() {
    this._metafields = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metafieldsInput() {
    return this._metafields;
  }

  // metafields_map - computed: false, optional: true, required: false
  private _metafieldsMap?: { [key: string]: string }; 
  public get metafieldsMap() {
    return this.getStringMapAttribute('metafields_map');
  }
  public set metafieldsMap(value: { [key: string]: string }) {
    this._metafieldsMap = value;
  }
  public resetMetafieldsMap() {
    this._metafieldsMap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metafieldsMapInput() {
    return this._metafieldsMap;
  }

  // mgmt_mode - computed: false, optional: true, required: false
  private _mgmtMode?: string; 
  public get mgmtMode() {
    return this.getStringAttribute('mgmt_mode');
  }
  public set mgmtMode(value: string) {
    this._mgmtMode = value;
  }
  public resetMgmtMode() {
    this._mgmtMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mgmtModeInput() {
    return this._mgmtMode;
  }

  // mr - computed: false, optional: true, required: false
  private _mr?: number; 
  public get mr() {
    return this.getNumberAttribute('mr');
  }
  public set mr(value: number) {
    this._mr = value;
  }
  public resetMr() {
    this._mr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mrInput() {
    return this._mr;
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

  // os_type - computed: false, optional: true, required: false
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  public resetOsType() {
    this._osType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // os_ver - computed: false, optional: true, required: false
  private _osVer?: string; 
  public get osVer() {
    return this.getStringAttribute('os_ver');
  }
  public set osVer(value: string) {
    this._osVer = value;
  }
  public resetOsVer() {
    this._osVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osVerInput() {
    return this._osVer;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: number; 
  public get patch() {
    return this.getNumberAttribute('patch');
  }
  public set patch(value: number) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // platform_str - computed: false, optional: true, required: false
  private _platformStr?: string; 
  public get platformStr() {
    return this.getStringAttribute('platform_str');
  }
  public set platformStr(value: string) {
    this._platformStr = value;
  }
  public resetPlatformStr() {
    this._platformStr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformStrInput() {
    return this._platformStr;
  }

  // sn - computed: false, optional: true, required: false
  private _sn?: string; 
  public get sn() {
    return this.getStringAttribute('sn');
  }
  public set sn(value: string) {
    this._sn = value;
  }
  public resetSn() {
    this._sn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snInput() {
    return this._sn;
  }
}
export interface DvmCmdAddDeviceGroups {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#name DvmCmdAddDevice#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#vdom DvmCmdAddDevice#vdom}
  */
  readonly vdom?: string;
}

export function dvmCmdAddDeviceGroupsToTerraform(struct?: DvmCmdAddDeviceGroups | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    vdom: cdktf.stringToTerraform(struct!.vdom),
  }
}


export function dvmCmdAddDeviceGroupsToHclTerraform(struct?: DvmCmdAddDeviceGroups | cdktf.IResolvable): any {
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
    vdom: {
      value: cdktf.stringToHclTerraform(struct!.vdom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DvmCmdAddDeviceGroupsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DvmCmdAddDeviceGroups | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._vdom !== undefined) {
      hasAnyValues = true;
      internalValueResult.vdom = this._vdom;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DvmCmdAddDeviceGroups | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._vdom = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._vdom = value.vdom;
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

  // vdom - computed: false, optional: true, required: false
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  public resetVdom() {
    this._vdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }
}

export class DvmCmdAddDeviceGroupsList extends cdktf.ComplexList {
  public internalValue? : DvmCmdAddDeviceGroups[] | cdktf.IResolvable

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
  public get(index: number): DvmCmdAddDeviceGroupsOutputReference {
    return new DvmCmdAddDeviceGroupsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device fortimanager_dvm_cmd_add_device}
*/
export class DvmCmdAddDevice extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_dvm_cmd_add_device";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DvmCmdAddDevice resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DvmCmdAddDevice to import
  * @param importFromId The id of the existing DvmCmdAddDevice that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DvmCmdAddDevice to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_dvm_cmd_add_device", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/dvm_cmd_add_device fortimanager_dvm_cmd_add_device} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DvmCmdAddDeviceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DvmCmdAddDeviceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_dvm_cmd_add_device',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dynamicSortSubtable = config.dynamicSortSubtable;
    this._flags = config.flags;
    this._fmgadom = config.fmgadom;
    this._forceRecreate = config.forceRecreate;
    this._id = config.id;
    this._device.internalValue = config.device;
    this._groups.internalValue = config.groups;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dynamic_sort_subtable - computed: false, optional: true, required: false
  private _dynamicSortSubtable?: string; 
  public get dynamicSortSubtable() {
    return this.getStringAttribute('dynamic_sort_subtable');
  }
  public set dynamicSortSubtable(value: string) {
    this._dynamicSortSubtable = value;
  }
  public resetDynamicSortSubtable() {
    this._dynamicSortSubtable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dynamicSortSubtableInput() {
    return this._dynamicSortSubtable;
  }

  // flags - computed: true, optional: true, required: false
  private _flags?: string[]; 
  public get flags() {
    return cdktf.Fn.tolist(this.getListAttribute('flags'));
  }
  public set flags(value: string[]) {
    this._flags = value;
  }
  public resetFlags() {
    this._flags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get flagsInput() {
    return this._flags;
  }

  // fmgadom - computed: true, optional: true, required: false
  private _fmgadom?: string; 
  public get fmgadom() {
    return this.getStringAttribute('fmgadom');
  }
  public set fmgadom(value: string) {
    this._fmgadom = value;
  }
  public resetFmgadom() {
    this._fmgadom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fmgadomInput() {
    return this._fmgadom;
  }

  // force_recreate - computed: true, optional: true, required: false
  private _forceRecreate?: string; 
  public get forceRecreate() {
    return this.getStringAttribute('force_recreate');
  }
  public set forceRecreate(value: string) {
    this._forceRecreate = value;
  }
  public resetForceRecreate() {
    this._forceRecreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceRecreateInput() {
    return this._forceRecreate;
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

  // device - computed: false, optional: true, required: false
  private _device = new DvmCmdAddDeviceDeviceOutputReference(this, "device");
  public get device() {
    return this._device;
  }
  public putDevice(value: DvmCmdAddDeviceDevice) {
    this._device.internalValue = value;
  }
  public resetDevice() {
    this._device.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device.internalValue;
  }

  // groups - computed: false, optional: true, required: false
  private _groups = new DvmCmdAddDeviceGroupsList(this, "groups", false);
  public get groups() {
    return this._groups;
  }
  public putGroups(value: DvmCmdAddDeviceGroups[] | cdktf.IResolvable) {
    this._groups.internalValue = value;
  }
  public resetGroups() {
    this._groups.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dynamic_sort_subtable: cdktf.stringToTerraform(this._dynamicSortSubtable),
      flags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._flags),
      fmgadom: cdktf.stringToTerraform(this._fmgadom),
      force_recreate: cdktf.stringToTerraform(this._forceRecreate),
      id: cdktf.stringToTerraform(this._id),
      device: dvmCmdAddDeviceDeviceToTerraform(this._device.internalValue),
      groups: cdktf.listMapper(dvmCmdAddDeviceGroupsToTerraform, true)(this._groups.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dynamic_sort_subtable: {
        value: cdktf.stringToHclTerraform(this._dynamicSortSubtable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._flags),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fmgadom: {
        value: cdktf.stringToHclTerraform(this._fmgadom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      force_recreate: {
        value: cdktf.stringToHclTerraform(this._forceRecreate),
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
      device: {
        value: dvmCmdAddDeviceDeviceToHclTerraform(this._device.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DvmCmdAddDeviceDeviceList",
      },
      groups: {
        value: cdktf.listMapperHcl(dvmCmdAddDeviceGroupsToHclTerraform, true)(this._groups.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DvmCmdAddDeviceGroupsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
