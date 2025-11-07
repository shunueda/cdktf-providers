// https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/endpoint_identity_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EndpointIdentityGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/endpoint_identity_group#description EndpointIdentityGroup#description}
  */
  readonly description?: string;
  /**
  * The name of the endpoint identity group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/endpoint_identity_group#name EndpointIdentityGroup#name}
  */
  readonly name: string;
  /**
  * Parent endpoint identity group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/endpoint_identity_group#parent_endpoint_identity_group_id EndpointIdentityGroup#parent_endpoint_identity_group_id}
  */
  readonly parentEndpointIdentityGroupId?: string;
  /**
  * System defined endpoint identity group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/endpoint_identity_group#system_defined EndpointIdentityGroup#system_defined}
  */
  readonly systemDefined?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/endpoint_identity_group ise_endpoint_identity_group}
*/
export class EndpointIdentityGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ise_endpoint_identity_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EndpointIdentityGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EndpointIdentityGroup to import
  * @param importFromId The id of the existing EndpointIdentityGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/endpoint_identity_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EndpointIdentityGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ise_endpoint_identity_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ise/0.2.12/docs/resources/endpoint_identity_group ise_endpoint_identity_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EndpointIdentityGroupConfig
  */
  public constructor(scope: Construct, id: string, config: EndpointIdentityGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'ise_endpoint_identity_group',
      terraformGeneratorMetadata: {
        providerName: 'ise',
        providerVersion: '0.2.12'
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
    this._name = config.name;
    this._parentEndpointIdentityGroupId = config.parentEndpointIdentityGroupId;
    this._systemDefined = config.systemDefined;
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

  // parent_endpoint_identity_group_id - computed: false, optional: true, required: false
  private _parentEndpointIdentityGroupId?: string; 
  public get parentEndpointIdentityGroupId() {
    return this.getStringAttribute('parent_endpoint_identity_group_id');
  }
  public set parentEndpointIdentityGroupId(value: string) {
    this._parentEndpointIdentityGroupId = value;
  }
  public resetParentEndpointIdentityGroupId() {
    this._parentEndpointIdentityGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentEndpointIdentityGroupIdInput() {
    return this._parentEndpointIdentityGroupId;
  }

  // system_defined - computed: false, optional: true, required: false
  private _systemDefined?: boolean | cdktf.IResolvable; 
  public get systemDefined() {
    return this.getBooleanAttribute('system_defined');
  }
  public set systemDefined(value: boolean | cdktf.IResolvable) {
    this._systemDefined = value;
  }
  public resetSystemDefined() {
    this._systemDefined = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemDefinedInput() {
    return this._systemDefined;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      parent_endpoint_identity_group_id: cdktf.stringToTerraform(this._parentEndpointIdentityGroupId),
      system_defined: cdktf.booleanToTerraform(this._systemDefined),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parent_endpoint_identity_group_id: {
        value: cdktf.stringToHclTerraform(this._parentEndpointIdentityGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      system_defined: {
        value: cdktf.booleanToHclTerraform(this._systemDefined),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
