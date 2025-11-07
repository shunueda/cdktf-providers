// https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NamespaceSecretConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret#id NamespaceSecret#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret#namespace NamespaceSecret#namespace}
  */
  readonly namespace: string;
  /**
  * The namespace secret description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret#secret_description NamespaceSecret#secret_description}
  */
  readonly secretDescription?: string;
  /**
  * The namespace secret key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret#secret_key NamespaceSecret#secret_key}
  */
  readonly secretKey: string;
  /**
  * The namespace secret description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret#secret_tags NamespaceSecret#secret_tags}
  */
  readonly secretTags?: { [key: string]: string };
  /**
  * The namespace secret value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret#secret_value NamespaceSecret#secret_value}
  */
  readonly secretValue: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret kestra_namespace_secret}
*/
export class NamespaceSecret extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kestra_namespace_secret";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NamespaceSecret resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NamespaceSecret to import
  * @param importFromId The id of the existing NamespaceSecret that should be imported. Refer to the {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NamespaceSecret to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kestra_namespace_secret", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kestra-io/kestra/1.0.2/docs/resources/namespace_secret kestra_namespace_secret} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NamespaceSecretConfig
  */
  public constructor(scope: Construct, id: string, config: NamespaceSecretConfig) {
    super(scope, id, {
      terraformResourceType: 'kestra_namespace_secret',
      terraformGeneratorMetadata: {
        providerName: 'kestra',
        providerVersion: '1.0.2'
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
    this._namespace = config.namespace;
    this._secretDescription = config.secretDescription;
    this._secretKey = config.secretKey;
    this._secretTags = config.secretTags;
    this._secretValue = config.secretValue;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // secret_description - computed: false, optional: true, required: false
  private _secretDescription?: string; 
  public get secretDescription() {
    return this.getStringAttribute('secret_description');
  }
  public set secretDescription(value: string) {
    this._secretDescription = value;
  }
  public resetSecretDescription() {
    this._secretDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretDescriptionInput() {
    return this._secretDescription;
  }

  // secret_key - computed: false, optional: false, required: true
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // secret_tags - computed: false, optional: true, required: false
  private _secretTags?: { [key: string]: string }; 
  public get secretTags() {
    return this.getStringMapAttribute('secret_tags');
  }
  public set secretTags(value: { [key: string]: string }) {
    this._secretTags = value;
  }
  public resetSecretTags() {
    this._secretTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretTagsInput() {
    return this._secretTags;
  }

  // secret_value - computed: false, optional: false, required: true
  private _secretValue?: string; 
  public get secretValue() {
    return this.getStringAttribute('secret_value');
  }
  public set secretValue(value: string) {
    this._secretValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get secretValueInput() {
    return this._secretValue;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      namespace: cdktf.stringToTerraform(this._namespace),
      secret_description: cdktf.stringToTerraform(this._secretDescription),
      secret_key: cdktf.stringToTerraform(this._secretKey),
      secret_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._secretTags),
      secret_value: cdktf.stringToTerraform(this._secretValue),
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
      namespace: {
        value: cdktf.stringToHclTerraform(this._namespace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_description: {
        value: cdktf.stringToHclTerraform(this._secretDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_key: {
        value: cdktf.stringToHclTerraform(this._secretKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._secretTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      secret_value: {
        value: cdktf.stringToHclTerraform(this._secretValue),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
