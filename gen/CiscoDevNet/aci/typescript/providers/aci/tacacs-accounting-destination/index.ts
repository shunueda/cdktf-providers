// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TacacsAccountingDestinationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#annotation TacacsAccountingDestination#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#auth_protocol TacacsAccountingDestination#auth_protocol}
  */
  readonly authProtocol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#description TacacsAccountingDestination#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#host TacacsAccountingDestination#host}
  */
  readonly host: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#id TacacsAccountingDestination#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#key TacacsAccountingDestination#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#name TacacsAccountingDestination#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#name_alias TacacsAccountingDestination#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#port TacacsAccountingDestination#port}
  */
  readonly port?: string;
  /**
  * Create relation to fv:ATg
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#relation_file_rs_a_remote_host_to_epg TacacsAccountingDestination#relation_file_rs_a_remote_host_to_epg}
  */
  readonly relationFileRsARemoteHostToEpg?: string;
  /**
  * Create relation to fv:AREpP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#relation_file_rs_a_remote_host_to_epp TacacsAccountingDestination#relation_file_rs_a_remote_host_to_epp}
  */
  readonly relationFileRsARemoteHostToEpp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#tacacs_accounting_dn TacacsAccountingDestination#tacacs_accounting_dn}
  */
  readonly tacacsAccountingDn: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination aci_tacacs_accounting_destination}
*/
export class TacacsAccountingDestination extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_tacacs_accounting_destination";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TacacsAccountingDestination resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TacacsAccountingDestination to import
  * @param importFromId The id of the existing TacacsAccountingDestination that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TacacsAccountingDestination to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_tacacs_accounting_destination", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/tacacs_accounting_destination aci_tacacs_accounting_destination} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TacacsAccountingDestinationConfig
  */
  public constructor(scope: Construct, id: string, config: TacacsAccountingDestinationConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_tacacs_accounting_destination',
      terraformGeneratorMetadata: {
        providerName: 'aci',
        providerVersion: '2.18.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._annotation = config.annotation;
    this._authProtocol = config.authProtocol;
    this._description = config.description;
    this._host = config.host;
    this._id = config.id;
    this._key = config.key;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._port = config.port;
    this._relationFileRsARemoteHostToEpg = config.relationFileRsARemoteHostToEpg;
    this._relationFileRsARemoteHostToEpp = config.relationFileRsARemoteHostToEpp;
    this._tacacsAccountingDn = config.tacacsAccountingDn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // annotation - computed: true, optional: true, required: false
  private _annotation?: string; 
  public get annotation() {
    return this.getStringAttribute('annotation');
  }
  public set annotation(value: string) {
    this._annotation = value;
  }
  public resetAnnotation() {
    this._annotation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationInput() {
    return this._annotation;
  }

  // auth_protocol - computed: true, optional: true, required: false
  private _authProtocol?: string; 
  public get authProtocol() {
    return this.getStringAttribute('auth_protocol');
  }
  public set authProtocol(value: string) {
    this._authProtocol = value;
  }
  public resetAuthProtocol() {
    this._authProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authProtocolInput() {
    return this._authProtocol;
  }

  // description - computed: true, optional: true, required: false
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

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // key - computed: true, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_alias - computed: true, optional: true, required: false
  private _nameAlias?: string; 
  public get nameAlias() {
    return this.getStringAttribute('name_alias');
  }
  public set nameAlias(value: string) {
    this._nameAlias = value;
  }
  public resetNameAlias() {
    this._nameAlias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameAliasInput() {
    return this._nameAlias;
  }

  // port - computed: false, optional: true, required: false
  private _port?: string; 
  public get port() {
    return this.getStringAttribute('port');
  }
  public set port(value: string) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // relation_file_rs_a_remote_host_to_epg - computed: false, optional: true, required: false
  private _relationFileRsARemoteHostToEpg?: string; 
  public get relationFileRsARemoteHostToEpg() {
    return this.getStringAttribute('relation_file_rs_a_remote_host_to_epg');
  }
  public set relationFileRsARemoteHostToEpg(value: string) {
    this._relationFileRsARemoteHostToEpg = value;
  }
  public resetRelationFileRsARemoteHostToEpg() {
    this._relationFileRsARemoteHostToEpg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFileRsARemoteHostToEpgInput() {
    return this._relationFileRsARemoteHostToEpg;
  }

  // relation_file_rs_a_remote_host_to_epp - computed: false, optional: true, required: false
  private _relationFileRsARemoteHostToEpp?: string; 
  public get relationFileRsARemoteHostToEpp() {
    return this.getStringAttribute('relation_file_rs_a_remote_host_to_epp');
  }
  public set relationFileRsARemoteHostToEpp(value: string) {
    this._relationFileRsARemoteHostToEpp = value;
  }
  public resetRelationFileRsARemoteHostToEpp() {
    this._relationFileRsARemoteHostToEpp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationFileRsARemoteHostToEppInput() {
    return this._relationFileRsARemoteHostToEpp;
  }

  // tacacs_accounting_dn - computed: false, optional: false, required: true
  private _tacacsAccountingDn?: string; 
  public get tacacsAccountingDn() {
    return this.getStringAttribute('tacacs_accounting_dn');
  }
  public set tacacsAccountingDn(value: string) {
    this._tacacsAccountingDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tacacsAccountingDnInput() {
    return this._tacacsAccountingDn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      annotation: cdktf.stringToTerraform(this._annotation),
      auth_protocol: cdktf.stringToTerraform(this._authProtocol),
      description: cdktf.stringToTerraform(this._description),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      key: cdktf.stringToTerraform(this._key),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      port: cdktf.stringToTerraform(this._port),
      relation_file_rs_a_remote_host_to_epg: cdktf.stringToTerraform(this._relationFileRsARemoteHostToEpg),
      relation_file_rs_a_remote_host_to_epp: cdktf.stringToTerraform(this._relationFileRsARemoteHostToEpp),
      tacacs_accounting_dn: cdktf.stringToTerraform(this._tacacsAccountingDn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_protocol: {
        value: cdktf.stringToHclTerraform(this._authProtocol),
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
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      key: {
        value: cdktf.stringToHclTerraform(this._key),
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
      name_alias: {
        value: cdktf.stringToHclTerraform(this._nameAlias),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port: {
        value: cdktf.stringToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_file_rs_a_remote_host_to_epg: {
        value: cdktf.stringToHclTerraform(this._relationFileRsARemoteHostToEpg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      relation_file_rs_a_remote_host_to_epp: {
        value: cdktf.stringToHclTerraform(this._relationFileRsARemoteHostToEpp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tacacs_accounting_dn: {
        value: cdktf.stringToHclTerraform(this._tacacsAccountingDn),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
