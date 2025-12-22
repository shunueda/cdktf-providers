// https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/ingestionkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface IngestionkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the ingestion key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/ingestionkey#name Ingestionkey#name}
  */
  readonly name: string;
  /**
  * Indicates if the ingestion key is configured for remote configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/ingestionkey#remote_config Ingestionkey#remote_config}
  */
  readonly remoteConfig?: boolean | cdktf.IResolvable;
  /**
  * Tags associated with the ingestion key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/ingestionkey#tags Ingestionkey#tags}
  */
  readonly tags?: string[];
  /**
  * The type of the ingestion key (e.g., 'ingestion').
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/ingestionkey#type Ingestionkey#type}
  */
  readonly type: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/ingestionkey groundcover_ingestionkey}
*/
export class Ingestionkey extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "groundcover_ingestionkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Ingestionkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Ingestionkey to import
  * @param importFromId The id of the existing Ingestionkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/ingestionkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Ingestionkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "groundcover_ingestionkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/groundcover-com/groundcover/1.5.2/docs/resources/ingestionkey groundcover_ingestionkey} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options IngestionkeyConfig
  */
  public constructor(scope: Construct, id: string, config: IngestionkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'groundcover_ingestionkey',
      terraformGeneratorMetadata: {
        providerName: 'groundcover',
        providerVersion: '1.5.2',
        providerVersionConstraint: '1.5.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._name = config.name;
    this._remoteConfig = config.remoteConfig;
    this._tags = config.tags;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // creation_date - computed: true, optional: false, required: false
  public get creationDate() {
    return this.getStringAttribute('creation_date');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
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

  // remote_config - computed: true, optional: true, required: false
  private _remoteConfig?: boolean | cdktf.IResolvable; 
  public get remoteConfig() {
    return this.getBooleanAttribute('remote_config');
  }
  public set remoteConfig(value: boolean | cdktf.IResolvable) {
    this._remoteConfig = value;
  }
  public resetRemoteConfig() {
    this._remoteConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteConfigInput() {
    return this._remoteConfig;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      remote_config: cdktf.booleanToTerraform(this._remoteConfig),
      tags: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tags),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_config: {
        value: cdktf.booleanToHclTerraform(this._remoteConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
