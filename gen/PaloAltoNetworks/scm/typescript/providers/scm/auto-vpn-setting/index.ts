// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoVpnSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * As range
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_setting#as_range AutoVpnSetting#as_range}
  */
  readonly asRange: AutoVpnSettingAsRange;
  /**
  * Enable mesh connection between hubs?
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_setting#enable_mesh_between_hubs AutoVpnSetting#enable_mesh_between_hubs}
  */
  readonly enableMeshBetweenHubs?: boolean | cdktf.IResolvable;
  /**
  * VPN address pool
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_setting#vpn_address_pool AutoVpnSetting#vpn_address_pool}
  */
  readonly vpnAddressPool: string[];
}
export interface AutoVpnSettingAsRange {
  /**
  * End
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_setting#end AutoVpnSetting#end}
  */
  readonly end?: number;
  /**
  * Start
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_setting#start AutoVpnSetting#start}
  */
  readonly start?: number;
}

export function autoVpnSettingAsRangeToTerraform(struct?: AutoVpnSettingAsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    end: cdktf.numberToTerraform(struct!.end),
    start: cdktf.numberToTerraform(struct!.start),
  }
}


export function autoVpnSettingAsRangeToHclTerraform(struct?: AutoVpnSettingAsRange | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    end: {
      value: cdktf.numberToHclTerraform(struct!.end),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    start: {
      value: cdktf.numberToHclTerraform(struct!.start),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AutoVpnSettingAsRangeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): AutoVpnSettingAsRange | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._end !== undefined) {
      hasAnyValues = true;
      internalValueResult.end = this._end;
    }
    if (this._start !== undefined) {
      hasAnyValues = true;
      internalValueResult.start = this._start;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AutoVpnSettingAsRange | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._end = undefined;
      this._start = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._end = value.end;
      this._start = value.start;
    }
  }

  // end - computed: false, optional: true, required: false
  private _end?: number; 
  public get end() {
    return this.getNumberAttribute('end');
  }
  public set end(value: number) {
    this._end = value;
  }
  public resetEnd() {
    this._end = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endInput() {
    return this._end;
  }

  // start - computed: false, optional: true, required: false
  private _start?: number; 
  public get start() {
    return this.getNumberAttribute('start');
  }
  public set start(value: number) {
    this._start = value;
  }
  public resetStart() {
    this._start = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startInput() {
    return this._start;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_setting scm_auto_vpn_setting}
*/
export class AutoVpnSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_auto_vpn_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoVpnSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoVpnSetting to import
  * @param importFromId The id of the existing AutoVpnSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoVpnSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_auto_vpn_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/auto_vpn_setting scm_auto_vpn_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoVpnSettingConfig
  */
  public constructor(scope: Construct, id: string, config: AutoVpnSettingConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_auto_vpn_setting',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asRange.internalValue = config.asRange;
    this._enableMeshBetweenHubs = config.enableMeshBetweenHubs;
    this._vpnAddressPool = config.vpnAddressPool;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // as_range - computed: false, optional: false, required: true
  private _asRange = new AutoVpnSettingAsRangeOutputReference(this, "as_range");
  public get asRange() {
    return this._asRange;
  }
  public putAsRange(value: AutoVpnSettingAsRange) {
    this._asRange.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asRangeInput() {
    return this._asRange.internalValue;
  }

  // enable_mesh_between_hubs - computed: false, optional: true, required: false
  private _enableMeshBetweenHubs?: boolean | cdktf.IResolvable; 
  public get enableMeshBetweenHubs() {
    return this.getBooleanAttribute('enable_mesh_between_hubs');
  }
  public set enableMeshBetweenHubs(value: boolean | cdktf.IResolvable) {
    this._enableMeshBetweenHubs = value;
  }
  public resetEnableMeshBetweenHubs() {
    this._enableMeshBetweenHubs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMeshBetweenHubsInput() {
    return this._enableMeshBetweenHubs;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // vpn_address_pool - computed: false, optional: false, required: true
  private _vpnAddressPool?: string[]; 
  public get vpnAddressPool() {
    return this.getListAttribute('vpn_address_pool');
  }
  public set vpnAddressPool(value: string[]) {
    this._vpnAddressPool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnAddressPoolInput() {
    return this._vpnAddressPool;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      as_range: autoVpnSettingAsRangeToTerraform(this._asRange.internalValue),
      enable_mesh_between_hubs: cdktf.booleanToTerraform(this._enableMeshBetweenHubs),
      vpn_address_pool: cdktf.listMapper(cdktf.stringToTerraform, false)(this._vpnAddressPool),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      as_range: {
        value: autoVpnSettingAsRangeToHclTerraform(this._asRange.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "AutoVpnSettingAsRange",
      },
      enable_mesh_between_hubs: {
        value: cdktf.booleanToHclTerraform(this._enableMeshBetweenHubs),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vpn_address_pool: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._vpnAddressPool),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
