// https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CentralizedConsumerConfig extends cdktf.TerraformMetaArguments {
  /**
  * A list of consumer groups that the Consumer is in.
  * If `consumer_groups` are provided on the Consumer object _and_ on the Realm, the Consumer will be placed in all defined consumer groups.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer#consumer_groups CentralizedConsumer#consumer_groups}
  */
  readonly consumerGroups?: string[];
  /**
  * Field for storing an existing unique ID for the Consumer - useful for mapping Kong with users in your existing database.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer#custom_id CentralizedConsumer#custom_id}
  */
  readonly customId?: string;
  /**
  * ID of the realm
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer#realm_id CentralizedConsumer#realm_id}
  */
  readonly realmId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer#tags CentralizedConsumer#tags}
  */
  readonly tags?: string[];
  /**
  * Type of the consumer. Default: "proxy"; must be one of ["proxy", "developer", "admin", "application"]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer#type CentralizedConsumer#type}
  */
  readonly type?: string;
  /**
  * The unique username of the Consumer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer#username CentralizedConsumer#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer konnect_centralized_consumer}
*/
export class CentralizedConsumer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "konnect_centralized_consumer";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CentralizedConsumer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CentralizedConsumer to import
  * @param importFromId The id of the existing CentralizedConsumer that should be imported. Refer to the {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CentralizedConsumer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "konnect_centralized_consumer", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kong/konnect/3.4.2/docs/resources/centralized_consumer konnect_centralized_consumer} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CentralizedConsumerConfig
  */
  public constructor(scope: Construct, id: string, config: CentralizedConsumerConfig) {
    super(scope, id, {
      terraformResourceType: 'konnect_centralized_consumer',
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
    this._consumerGroups = config.consumerGroups;
    this._customId = config.customId;
    this._realmId = config.realmId;
    this._tags = config.tags;
    this._type = config.type;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_groups - computed: true, optional: true, required: false
  private _consumerGroups?: string[]; 
  public get consumerGroups() {
    return this.getListAttribute('consumer_groups');
  }
  public set consumerGroups(value: string[]) {
    this._consumerGroups = value;
  }
  public resetConsumerGroups() {
    this._consumerGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerGroupsInput() {
    return this._consumerGroups;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // custom_id - computed: false, optional: true, required: false
  private _customId?: string; 
  public get customId() {
    return this.getStringAttribute('custom_id');
  }
  public set customId(value: string) {
    this._customId = value;
  }
  public resetCustomId() {
    this._customId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customIdInput() {
    return this._customId;
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

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(this._consumerGroups),
      custom_id: cdktf.stringToTerraform(this._customId),
      realm_id: cdktf.stringToTerraform(this._realmId),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      consumer_groups: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._consumerGroups),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      custom_id: {
        value: cdktf.stringToHclTerraform(this._customId),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
