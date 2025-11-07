// https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_acl
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataKongConsumerAclConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_acl#consumer_id DataKongConsumerAcl#consumer_id}
  */
  readonly consumerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_acl#consumer_username DataKongConsumerAcl#consumer_username}
  */
  readonly consumerUsername?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_acl#group DataKongConsumerAcl#group}
  */
  readonly group: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_acl kong_consumer_acl}
*/
export class DataKongConsumerAcl extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kong_consumer_acl";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataKongConsumerAcl resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataKongConsumerAcl to import
  * @param importFromId The id of the existing DataKongConsumerAcl that should be imported. Refer to the {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_acl#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataKongConsumerAcl to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kong_consumer_acl", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/granular-oss/kong/8.1.0/docs/data-sources/consumer_acl kong_consumer_acl} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataKongConsumerAclConfig
  */
  public constructor(scope: Construct, id: string, config: DataKongConsumerAclConfig) {
    super(scope, id, {
      terraformResourceType: 'kong_consumer_acl',
      terraformGeneratorMetadata: {
        providerName: 'kong',
        providerVersion: '8.1.0'
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
    this._consumerUsername = config.consumerUsername;
    this._group = config.group;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // consumer_id - computed: false, optional: true, required: false
  private _consumerId?: string; 
  public get consumerId() {
    return this.getStringAttribute('consumer_id');
  }
  public set consumerId(value: string) {
    this._consumerId = value;
  }
  public resetConsumerId() {
    this._consumerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerIdInput() {
    return this._consumerId;
  }

  // consumer_username - computed: false, optional: true, required: false
  private _consumerUsername?: string; 
  public get consumerUsername() {
    return this.getStringAttribute('consumer_username');
  }
  public set consumerUsername(value: string) {
    this._consumerUsername = value;
  }
  public resetConsumerUsername() {
    this._consumerUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consumerUsernameInput() {
    return this._consumerUsername;
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // kong_id - computed: true, optional: false, required: false
  public get kongId() {
    return this.getStringAttribute('kong_id');
  }

  // tags - computed: true, optional: false, required: false
  public get tags() {
    return this.getListAttribute('tags');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      consumer_id: cdktf.stringToTerraform(this._consumerId),
      consumer_username: cdktf.stringToTerraform(this._consumerUsername),
      group: cdktf.stringToTerraform(this._group),
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
      consumer_username: {
        value: cdktf.stringToHclTerraform(this._consumerUsername),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      group: {
        value: cdktf.stringToHclTerraform(this._group),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
