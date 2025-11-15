// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CentralizedConsumerKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the of the consumer. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer_key#consumer_id CentralizedConsumerKey#consumer_id}
  */
  readonly consumerId: string;
  /**
  * ID of the realm. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer_key#realm_id CentralizedConsumerKey#realm_id}
  */
  readonly realmId: string;
  /**
  * secret to be created. Must be unique within the realm. If not specified a secret will be automatically generated. Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer_key#secret CentralizedConsumerKey#secret}
  */
  readonly secret?: string;
  /**
  * Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer_key#tags CentralizedConsumerKey#tags}
  */
  readonly tags?: string[];
  /**
  * Default: "legacy"; must be one of ["new", "legacy"]; Requires replacement if changed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer_key#type CentralizedConsumerKey#type}
  */
  readonly type?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer_key konnect_centralized_consumer_key}
*/
export class CentralizedConsumerKey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_centralized_consumer_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CentralizedConsumerKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CentralizedConsumerKey to import
  * @param importFromId The id of the existing CentralizedConsumerKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CentralizedConsumerKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_centralized_consumer_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer_key konnect_centralized_consumer_key} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CentralizedConsumerKeyConfig
  */
  public constructor(scope: Construct, id: string, config: CentralizedConsumerKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_centralized_consumer_key',
      terraformGeneratorMetadata: {
        providerName: 'konnect',
        providerVersion: '3.4.2',
        providerVersionConstraint: '3.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._consumerId = config.consumerId;
    this._realmId = config.realmId;
    this._secret = config.secret;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_id - computed: false, optional: false, required: true
  private _consumerId?: string; 
  public get consumerId() {
    return this.getStringAttribute('consumer_id');
  }
  public set consumerId(value: string) {
    this._consumerId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdInput() {
    return this._consumerId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // realm_id - computed: false, optional: false, required: true
  private _realmId?: string; 
  public get realmId() {
    return this.getStringAttribute('realm_id');
  }
  public set realmId(value: string) {
    this._realmId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get realmIdInput() {
    return this._realmId;
  }

  // secret - computed: true, optional: true, required: false
  private _secret?: string; 
  public get secret() {
    return this.getStringAttribute('secret');
  }
  public set secret(value: string) {
    this._secret = value;
  }
  public resetSecret() {
    this._secret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretInput() {
    return this._secret;
  }

  // tags - computed: true, optional: true, required: false
  private _tags?: string[]; 
  public get tags() {
    return this.getListAttribute('tags');
  }
  public set tags(value: string[]) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_id: cdktf.stringToTerraform(this._consumerId),
      realm_id: cdktf.stringToTerraform(this._realmId),
      secret: cdktf.stringToTerraform(this._secret),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_id: {
        value: cdktf.stringToHclTerraform(this._consumerId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      realm_id: {
        value: cdktf.stringToHclTerraform(this._realmId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secret: {
        value: cdktf.stringToHclTerraform(this._secret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tags),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
