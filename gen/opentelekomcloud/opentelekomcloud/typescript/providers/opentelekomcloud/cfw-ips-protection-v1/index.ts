// https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CfwIpsProtectionV1Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1#feature_status CfwIpsProtectionV1#feature_status}
  */
  readonly featureStatus: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1#id CfwIpsProtectionV1#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1#ips_type CfwIpsProtectionV1#ips_type}
  */
  readonly ipsType?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1#mode CfwIpsProtectionV1#mode}
  */
  readonly mode: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1#object_id CfwIpsProtectionV1#object_id}
  */
  readonly objectId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1#timeouts CfwIpsProtectionV1#timeouts}
  */
  readonly timeouts?: CfwIpsProtectionV1Timeouts;
}
export interface CfwIpsProtectionV1Timeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1#create CfwIpsProtectionV1#create}
  */
  readonly create?: string;
}

export function cfwIpsProtectionV1TimeoutsToTerraform(struct?: CfwIpsProtectionV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function cfwIpsProtectionV1TimeoutsToHclTerraform(struct?: CfwIpsProtectionV1Timeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CfwIpsProtectionV1TimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CfwIpsProtectionV1Timeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CfwIpsProtectionV1Timeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1 opentelekomcloud_cfw_ips_protection_v1}
*/
export class CfwIpsProtectionV1 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "opentelekomcloud_cfw_ips_protection_v1";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CfwIpsProtectionV1 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CfwIpsProtectionV1 to import
  * @param importFromId The id of the existing CfwIpsProtectionV1 that should be imported. Refer to the {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CfwIpsProtectionV1 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "opentelekomcloud_cfw_ips_protection_v1", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/opentelekomcloud/opentelekomcloud/1.36.52/docs/resources/cfw_ips_protection_v1 opentelekomcloud_cfw_ips_protection_v1} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CfwIpsProtectionV1Config
  */
  public constructor(scope: Construct, id: string, config: CfwIpsProtectionV1Config) {
    super(scope, id, {
      terraformResourceType: 'opentelekomcloud_cfw_ips_protection_v1',
      terraformGeneratorMetadata: {
        providerName: 'opentelekomcloud',
        providerVersion: '1.36.52'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._featureStatus = config.featureStatus;
    this._id = config.id;
    this._ipsType = config.ipsType;
    this._mode = config.mode;
    this._objectId = config.objectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // basic_defense_status - computed: true, optional: false, required: false
  public get basicDefenseStatus() {
    return this.getNumberAttribute('basic_defense_status');
  }

  // feature_status - computed: false, optional: false, required: true
  private _featureStatus?: number; 
  public get featureStatus() {
    return this.getNumberAttribute('feature_status');
  }
  public set featureStatus(value: number) {
    this._featureStatus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get featureStatusInput() {
    return this._featureStatus;
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

  // ips_protection_mode_id - computed: true, optional: false, required: false
  public get ipsProtectionModeId() {
    return this.getStringAttribute('ips_protection_mode_id');
  }

  // ips_switch_id - computed: true, optional: false, required: false
  public get ipsSwitchId() {
    return this.getStringAttribute('ips_switch_id');
  }

  // ips_type - computed: false, optional: true, required: false
  private _ipsType?: number; 
  public get ipsType() {
    return this.getNumberAttribute('ips_type');
  }
  public set ipsType(value: number) {
    this._ipsType = value;
  }
  public resetIpsType() {
    this._ipsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsTypeInput() {
    return this._ipsType;
  }

  // mode - computed: false, optional: false, required: true
  private _mode?: number; 
  public get mode() {
    return this.getNumberAttribute('mode');
  }
  public set mode(value: number) {
    this._mode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // object_id - computed: false, optional: false, required: true
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CfwIpsProtectionV1TimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CfwIpsProtectionV1Timeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      feature_status: cdktf.numberToTerraform(this._featureStatus),
      id: cdktf.stringToTerraform(this._id),
      ips_type: cdktf.numberToTerraform(this._ipsType),
      mode: cdktf.numberToTerraform(this._mode),
      object_id: cdktf.stringToTerraform(this._objectId),
      timeouts: cfwIpsProtectionV1TimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      feature_status: {
        value: cdktf.numberToHclTerraform(this._featureStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ips_type: {
        value: cdktf.numberToHclTerraform(this._ipsType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.numberToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      object_id: {
        value: cdktf.stringToHclTerraform(this._objectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: cfwIpsProtectionV1TimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CfwIpsProtectionV1Timeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
