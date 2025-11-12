// https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface OrgsecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret#allow_on_pull_request Orgsecret#allow_on_pull_request}
  */
  readonly allowOnPullRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret#allow_push_on_pull_request Orgsecret#allow_push_on_pull_request}
  */
  readonly allowPushOnPullRequest?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret#id Orgsecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret#name Orgsecret#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret#namespace Orgsecret#namespace}
  */
  readonly namespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret#value Orgsecret#value}
  */
  readonly value: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret drone_orgsecret}
*/
export class Orgsecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "drone_orgsecret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Orgsecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Orgsecret to import
  * @param importFromId The id of the existing Orgsecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Orgsecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "drone_orgsecret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kazanexpress/drone/0.4.0/docs/resources/orgsecret drone_orgsecret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options OrgsecretConfig
  */
  public constructor(scope: Construct, id: string, config: OrgsecretConfig) {
    super(scope, id, {
      terraformResourceType: 'drone_orgsecret',
      terraformGeneratorMetadata: {
        providerName: 'drone',
        providerVersion: '0.4.0',
        providerVersionConstraint: '0.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowOnPullRequest = config.allowOnPullRequest;
    this._allowPushOnPullRequest = config.allowPushOnPullRequest;
    this._id = config.id;
    this._name = config.name;
    this._namespace = config.namespace;
    this._value = config.value;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_on_pull_request - computed: false, optional: true, required: false
  private _allowOnPullRequest?: boolean | cdktf.IResolvable; 
  public get allowOnPullRequest() {
    return this.getBooleanAttribute('allow_on_pull_request');
  }
  public set allowOnPullRequest(value: boolean | cdktf.IResolvable) {
    this._allowOnPullRequest = value;
  }
  public resetAllowOnPullRequest() {
    this._allowOnPullRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowOnPullRequestInput() {
    return this._allowOnPullRequest;
  }

  // allow_push_on_pull_request - computed: false, optional: true, required: false
  private _allowPushOnPullRequest?: boolean | cdktf.IResolvable; 
  public get allowPushOnPullRequest() {
    return this.getBooleanAttribute('allow_push_on_pull_request');
  }
  public set allowPushOnPullRequest(value: boolean | cdktf.IResolvable) {
    this._allowPushOnPullRequest = value;
  }
  public resetAllowPushOnPullRequest() {
    this._allowPushOnPullRequest = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowPushOnPullRequestInput() {
    return this._allowPushOnPullRequest;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_on_pull_request: cdktf.booleanToTerraform(this._allowOnPullRequest),
      allow_push_on_pull_request: cdktf.booleanToTerraform(this._allowPushOnPullRequest),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      namespace: cdktf.stringToTerraform(this._namespace),
      value: cdktf.stringToTerraform(this._value),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_on_pull_request: {
        value: cdktf.booleanToHclTerraform(this._allowOnPullRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      allow_push_on_pull_request: {
        value: cdktf.booleanToHclTerraform(this._allowPushOnPullRequest),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      value: {
        value: cdktf.stringToHclTerraform(this._value),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
