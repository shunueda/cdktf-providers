// https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ThreatDetectionHoneyPotConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot#honeypot_image_id ThreatDetectionHoneyPot#honeypot_image_id}
  */
  readonly honeypotImageId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot#honeypot_image_name ThreatDetectionHoneyPot#honeypot_image_name}
  */
  readonly honeypotImageName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot#honeypot_name ThreatDetectionHoneyPot#honeypot_name}
  */
  readonly honeypotName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot#id ThreatDetectionHoneyPot#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot#node_id ThreatDetectionHoneyPot#node_id}
  */
  readonly nodeId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot#timeouts ThreatDetectionHoneyPot#timeouts}
  */
  readonly timeouts?: ThreatDetectionHoneyPotTimeouts;
}
export interface ThreatDetectionHoneyPotTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot#delete ThreatDetectionHoneyPot#delete}
  */
  readonly delete?: string;
}

export function threatDetectionHoneyPotTimeoutsToTerraform(struct?: ThreatDetectionHoneyPotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    delete: cdktf.stringToTerraform(struct!.delete),
  }
}


export function threatDetectionHoneyPotTimeoutsToHclTerraform(struct?: ThreatDetectionHoneyPotTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ThreatDetectionHoneyPotTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ThreatDetectionHoneyPotTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ThreatDetectionHoneyPotTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._delete = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._delete = value.delete;
    }
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot alicloud_threat_detection_honey_pot}
*/
export class ThreatDetectionHoneyPot extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_threat_detection_honey_pot";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ThreatDetectionHoneyPot resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ThreatDetectionHoneyPot to import
  * @param importFromId The id of the existing ThreatDetectionHoneyPot that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ThreatDetectionHoneyPot to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_threat_detection_honey_pot", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.263.0/docs/resources/threat_detection_honey_pot alicloud_threat_detection_honey_pot} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ThreatDetectionHoneyPotConfig
  */
  public constructor(scope: Construct, id: string, config: ThreatDetectionHoneyPotConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_threat_detection_honey_pot',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.263.0',
        providerVersionConstraint: '1.263.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._honeypotImageId = config.honeypotImageId;
    this._honeypotImageName = config.honeypotImageName;
    this._honeypotName = config.honeypotName;
    this._id = config.id;
    this._nodeId = config.nodeId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // honeypot_id - computed: true, optional: false, required: false
  public get honeypotId() {
    return this.getStringAttribute('honeypot_id');
  }

  // honeypot_image_id - computed: false, optional: false, required: true
  private _honeypotImageId?: string; 
  public get honeypotImageId() {
    return this.getStringAttribute('honeypot_image_id');
  }
  public set honeypotImageId(value: string) {
    this._honeypotImageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotImageIdInput() {
    return this._honeypotImageId;
  }

  // honeypot_image_name - computed: false, optional: false, required: true
  private _honeypotImageName?: string; 
  public get honeypotImageName() {
    return this.getStringAttribute('honeypot_image_name');
  }
  public set honeypotImageName(value: string) {
    this._honeypotImageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotImageNameInput() {
    return this._honeypotImageName;
  }

  // honeypot_name - computed: false, optional: false, required: true
  private _honeypotName?: string; 
  public get honeypotName() {
    return this.getStringAttribute('honeypot_name');
  }
  public set honeypotName(value: string) {
    this._honeypotName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get honeypotNameInput() {
    return this._honeypotName;
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

  // node_id - computed: false, optional: false, required: true
  private _nodeId?: string; 
  public get nodeId() {
    return this.getStringAttribute('node_id');
  }
  public set nodeId(value: string) {
    this._nodeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeIdInput() {
    return this._nodeId;
  }

  // preset_id - computed: true, optional: false, required: false
  public get presetId() {
    return this.getStringAttribute('preset_id');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getListAttribute('state');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ThreatDetectionHoneyPotTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ThreatDetectionHoneyPotTimeouts) {
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
      honeypot_image_id: cdktf.stringToTerraform(this._honeypotImageId),
      honeypot_image_name: cdktf.stringToTerraform(this._honeypotImageName),
      honeypot_name: cdktf.stringToTerraform(this._honeypotName),
      id: cdktf.stringToTerraform(this._id),
      node_id: cdktf.stringToTerraform(this._nodeId),
      timeouts: threatDetectionHoneyPotTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      honeypot_image_id: {
        value: cdktf.stringToHclTerraform(this._honeypotImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      honeypot_image_name: {
        value: cdktf.stringToHclTerraform(this._honeypotImageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      honeypot_name: {
        value: cdktf.stringToHclTerraform(this._honeypotName),
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
      node_id: {
        value: cdktf.stringToHclTerraform(this._nodeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: threatDetectionHoneyPotTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ThreatDetectionHoneyPotTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
