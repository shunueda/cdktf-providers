// https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VanityNameserverRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record#default_config VanityNameserverRecord#default_config}
  */
  readonly defaultConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record#id VanityNameserverRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record#name VanityNameserverRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record#name_server_group_id VanityNameserverRecord#name_server_group_id}
  */
  readonly nameServerGroupId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record#public_config VanityNameserverRecord#public_config}
  */
  readonly publicConfig?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record#servers VanityNameserverRecord#servers}
  */
  readonly servers: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record dme_vanity_nameserver_record}
*/
export class VanityNameserverRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dme_vanity_nameserver_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VanityNameserverRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VanityNameserverRecord to import
  * @param importFromId The id of the existing VanityNameserverRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VanityNameserverRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dme_vanity_nameserver_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/vanity_nameserver_record dme_vanity_nameserver_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VanityNameserverRecordConfig
  */
  public constructor(scope: Construct, id: string, config: VanityNameserverRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'dme_vanity_nameserver_record',
      terraformGeneratorMetadata: {
        providerName: 'dme',
        providerVersion: '1.0.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultConfig = config.defaultConfig;
    this._id = config.id;
    this._name = config.name;
    this._nameServerGroupId = config.nameServerGroupId;
    this._publicConfig = config.publicConfig;
    this._servers = config.servers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // default_config - computed: false, optional: true, required: false
  private _defaultConfig?: boolean | cdktf.IResolvable; 
  public get defaultConfig() {
    return this.getBooleanAttribute('default_config');
  }
  public set defaultConfig(value: boolean | cdktf.IResolvable) {
    this._defaultConfig = value;
  }
  public resetDefaultConfig() {
    this._defaultConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultConfigInput() {
    return this._defaultConfig;
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

  // name_server_group_id - computed: false, optional: true, required: false
  private _nameServerGroupId?: number; 
  public get nameServerGroupId() {
    return this.getNumberAttribute('name_server_group_id');
  }
  public set nameServerGroupId(value: number) {
    this._nameServerGroupId = value;
  }
  public resetNameServerGroupId() {
    this._nameServerGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameServerGroupIdInput() {
    return this._nameServerGroupId;
  }

  // public_config - computed: false, optional: true, required: false
  private _publicConfig?: boolean | cdktf.IResolvable; 
  public get publicConfig() {
    return this.getBooleanAttribute('public_config');
  }
  public set publicConfig(value: boolean | cdktf.IResolvable) {
    this._publicConfig = value;
  }
  public resetPublicConfig() {
    this._publicConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicConfigInput() {
    return this._publicConfig;
  }

  // servers - computed: false, optional: false, required: true
  private _servers?: string[]; 
  public get servers() {
    return this.getListAttribute('servers');
  }
  public set servers(value: string[]) {
    this._servers = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serversInput() {
    return this._servers;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_config: cdktf.booleanToTerraform(this._defaultConfig),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      name_server_group_id: cdktf.numberToTerraform(this._nameServerGroupId),
      public_config: cdktf.booleanToTerraform(this._publicConfig),
      servers: cdktf.listMapper(cdktf.stringToTerraform, false)(this._servers),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_config: {
        value: cdktf.booleanToHclTerraform(this._defaultConfig),
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
      name_server_group_id: {
        value: cdktf.numberToHclTerraform(this._nameServerGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      public_config: {
        value: cdktf.booleanToHclTerraform(this._publicConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      servers: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._servers),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
