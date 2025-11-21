// https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HbacPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * HBAC policy description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy#description HbacPolicy#description}
  */
  readonly description?: string;
  /**
  * Enable this hbac policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy#enabled HbacPolicy#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Host category the hbac policy is applied to (allowed value: all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy#hostcategory HbacPolicy#hostcategory}
  */
  readonly hostcategory?: string;
  /**
  * Name of the hbac policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy#name HbacPolicy#name}
  */
  readonly name: string;
  /**
  * Service category the hbac policy is applied to (allowed value: all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy#servicecategory HbacPolicy#servicecategory}
  */
  readonly servicecategory?: string;
  /**
  * User category the hbac policy is applied to (allowed value: all)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy#usercategory HbacPolicy#usercategory}
  */
  readonly usercategory?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy freeipa_hbac_policy}
*/
export class HbacPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "freeipa_hbac_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a HbacPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the HbacPolicy to import
  * @param importFromId The id of the existing HbacPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the HbacPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "freeipa_hbac_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rework-space-com/freeipa/5.1.4/docs/resources/hbac_policy freeipa_hbac_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HbacPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: HbacPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'freeipa_hbac_policy',
      terraformGeneratorMetadata: {
        providerName: 'freeipa',
        providerVersion: '5.1.4',
        providerVersionConstraint: '5.1.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._enabled = config.enabled;
    this._hostcategory = config.hostcategory;
    this._name = config.name;
    this._servicecategory = config.servicecategory;
    this._usercategory = config.usercategory;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // hostcategory - computed: false, optional: true, required: false
  private _hostcategory?: string; 
  public get hostcategory() {
    return this.getStringAttribute('hostcategory');
  }
  public set hostcategory(value: string) {
    this._hostcategory = value;
  }
  public resetHostcategory() {
    this._hostcategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostcategoryInput() {
    return this._hostcategory;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // servicecategory - computed: false, optional: true, required: false
  private _servicecategory?: string; 
  public get servicecategory() {
    return this.getStringAttribute('servicecategory');
  }
  public set servicecategory(value: string) {
    this._servicecategory = value;
  }
  public resetServicecategory() {
    this._servicecategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicecategoryInput() {
    return this._servicecategory;
  }

  // usercategory - computed: false, optional: true, required: false
  private _usercategory?: string; 
  public get usercategory() {
    return this.getStringAttribute('usercategory');
  }
  public set usercategory(value: string) {
    this._usercategory = value;
  }
  public resetUsercategory() {
    this._usercategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usercategoryInput() {
    return this._usercategory;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      hostcategory: cdktf.stringToTerraform(this._hostcategory),
      name: cdktf.stringToTerraform(this._name),
      servicecategory: cdktf.stringToTerraform(this._servicecategory),
      usercategory: cdktf.stringToTerraform(this._usercategory),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      hostcategory: {
        value: cdktf.stringToHclTerraform(this._hostcategory),
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
      servicecategory: {
        value: cdktf.stringToHclTerraform(this._servicecategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      usercategory: {
        value: cdktf.stringToHclTerraform(this._usercategory),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
