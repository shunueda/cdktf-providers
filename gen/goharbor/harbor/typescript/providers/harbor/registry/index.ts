// https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RegistryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry#access_id Registry#access_id}
  */
  readonly accessId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry#access_secret Registry#access_secret}
  */
  readonly accessSecret?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry#description Registry#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry#endpoint_url Registry#endpoint_url}
  */
  readonly endpointUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry#id Registry#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry#insecure Registry#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry#name Registry#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry#provider_name Registry#provider_name}
  */
  readonly providerName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry harbor_registry}
*/
export class Registry extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "harbor_registry";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Registry resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Registry to import
  * @param importFromId The id of the existing Registry that should be imported. Refer to the {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Registry to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "harbor_registry", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/goharbor/harbor/3.11.3/docs/resources/registry harbor_registry} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RegistryConfig
  */
  public constructor(scope: Construct, id: string, config: RegistryConfig) {
    super(scope, id, {
      terraformResourceType: 'harbor_registry',
      terraformGeneratorMetadata: {
        providerName: 'harbor',
        providerVersion: '3.11.3',
        providerVersionConstraint: '3.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessId = config.accessId;
    this._accessSecret = config.accessSecret;
    this._description = config.description;
    this._endpointUrl = config.endpointUrl;
    this._id = config.id;
    this._insecure = config.insecure;
    this._name = config.name;
    this._providerName = config.providerName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_id - computed: false, optional: true, required: false
  private _accessId?: string; 
  public get accessId() {
    return this.getStringAttribute('access_id');
  }
  public set accessId(value: string) {
    this._accessId = value;
  }
  public resetAccessId() {
    this._accessId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessIdInput() {
    return this._accessId;
  }

  // access_secret - computed: false, optional: true, required: false
  private _accessSecret?: string; 
  public get accessSecret() {
    return this.getStringAttribute('access_secret');
  }
  public set accessSecret(value: string) {
    this._accessSecret = value;
  }
  public resetAccessSecret() {
    this._accessSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessSecretInput() {
    return this._accessSecret;
  }

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

  // endpoint_url - computed: false, optional: false, required: true
  private _endpointUrl?: string; 
  public get endpointUrl() {
    return this.getStringAttribute('endpoint_url');
  }
  public set endpointUrl(value: string) {
    this._endpointUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointUrlInput() {
    return this._endpointUrl;
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

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
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

  // provider_name - computed: false, optional: false, required: true
  private _providerName?: string; 
  public get providerName() {
    return this.getStringAttribute('provider_name');
  }
  public set providerName(value: string) {
    this._providerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get providerNameInput() {
    return this._providerName;
  }

  // registry_id - computed: true, optional: false, required: false
  public get registryId() {
    return this.getNumberAttribute('registry_id');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_id: cdktf.stringToTerraform(this._accessId),
      access_secret: cdktf.stringToTerraform(this._accessSecret),
      description: cdktf.stringToTerraform(this._description),
      endpoint_url: cdktf.stringToTerraform(this._endpointUrl),
      id: cdktf.stringToTerraform(this._id),
      insecure: cdktf.booleanToTerraform(this._insecure),
      name: cdktf.stringToTerraform(this._name),
      provider_name: cdktf.stringToTerraform(this._providerName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_id: {
        value: cdktf.stringToHclTerraform(this._accessId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      access_secret: {
        value: cdktf.stringToHclTerraform(this._accessSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      endpoint_url: {
        value: cdktf.stringToHclTerraform(this._endpointUrl),
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
      insecure: {
        value: cdktf.booleanToHclTerraform(this._insecure),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      provider_name: {
        value: cdktf.stringToHclTerraform(this._providerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
