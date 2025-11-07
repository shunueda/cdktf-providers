// https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#adj_type Connection#adj_type}
  */
  readonly adjType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#annotation Connection#annotation}
  */
  readonly annotation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#conn_dir Connection#conn_dir}
  */
  readonly connDir?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#conn_type Connection#conn_type}
  */
  readonly connType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#description Connection#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#direct_connect Connection#direct_connect}
  */
  readonly directConnect?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#id Connection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#l4_l7_service_graph_template_dn Connection#l4_l7_service_graph_template_dn}
  */
  readonly l4L7ServiceGraphTemplateDn: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#name Connection#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#name_alias Connection#name_alias}
  */
  readonly nameAlias?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#relation_vns_rs_abs_connection_conns Connection#relation_vns_rs_abs_connection_conns}
  */
  readonly relationVnsRsAbsConnectionConns?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#relation_vns_rs_abs_copy_connection Connection#relation_vns_rs_abs_copy_connection}
  */
  readonly relationVnsRsAbsCopyConnection?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#unicast_route Connection#unicast_route}
  */
  readonly unicastRoute?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection aci_connection}
*/
export class Connection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aci_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Connection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Connection to import
  * @param importFromId The id of the existing Connection that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Connection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aci_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/aci/2.18.0/docs/resources/connection aci_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: ConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'aci_connection',
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
    this._adjType = config.adjType;
    this._annotation = config.annotation;
    this._connDir = config.connDir;
    this._connType = config.connType;
    this._description = config.description;
    this._directConnect = config.directConnect;
    this._id = config.id;
    this._l4L7ServiceGraphTemplateDn = config.l4L7ServiceGraphTemplateDn;
    this._name = config.name;
    this._nameAlias = config.nameAlias;
    this._relationVnsRsAbsConnectionConns = config.relationVnsRsAbsConnectionConns;
    this._relationVnsRsAbsCopyConnection = config.relationVnsRsAbsCopyConnection;
    this._unicastRoute = config.unicastRoute;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adj_type - computed: true, optional: true, required: false
  private _adjType?: string; 
  public get adjType() {
    return this.getStringAttribute('adj_type');
  }
  public set adjType(value: string) {
    this._adjType = value;
  }
  public resetAdjType() {
    this._adjType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adjTypeInput() {
    return this._adjType;
  }

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

  // conn_dir - computed: true, optional: true, required: false
  private _connDir?: string; 
  public get connDir() {
    return this.getStringAttribute('conn_dir');
  }
  public set connDir(value: string) {
    this._connDir = value;
  }
  public resetConnDir() {
    this._connDir = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connDirInput() {
    return this._connDir;
  }

  // conn_type - computed: true, optional: true, required: false
  private _connType?: string; 
  public get connType() {
    return this.getStringAttribute('conn_type');
  }
  public set connType(value: string) {
    this._connType = value;
  }
  public resetConnType() {
    this._connType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTypeInput() {
    return this._connType;
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

  // direct_connect - computed: true, optional: true, required: false
  private _directConnect?: string; 
  public get directConnect() {
    return this.getStringAttribute('direct_connect');
  }
  public set directConnect(value: string) {
    this._directConnect = value;
  }
  public resetDirectConnect() {
    this._directConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectInput() {
    return this._directConnect;
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

  // l4_l7_service_graph_template_dn - computed: false, optional: false, required: true
  private _l4L7ServiceGraphTemplateDn?: string; 
  public get l4L7ServiceGraphTemplateDn() {
    return this.getStringAttribute('l4_l7_service_graph_template_dn');
  }
  public set l4L7ServiceGraphTemplateDn(value: string) {
    this._l4L7ServiceGraphTemplateDn = value;
  }
  // Temporarily expose input value. Use with caution.
  public get l4L7ServiceGraphTemplateDnInput() {
    return this._l4L7ServiceGraphTemplateDn;
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

  // relation_vns_rs_abs_connection_conns - computed: false, optional: true, required: false
  private _relationVnsRsAbsConnectionConns?: string[]; 
  public get relationVnsRsAbsConnectionConns() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_vns_rs_abs_connection_conns'));
  }
  public set relationVnsRsAbsConnectionConns(value: string[]) {
    this._relationVnsRsAbsConnectionConns = value;
  }
  public resetRelationVnsRsAbsConnectionConns() {
    this._relationVnsRsAbsConnectionConns = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsAbsConnectionConnsInput() {
    return this._relationVnsRsAbsConnectionConns;
  }

  // relation_vns_rs_abs_copy_connection - computed: false, optional: true, required: false
  private _relationVnsRsAbsCopyConnection?: string[]; 
  public get relationVnsRsAbsCopyConnection() {
    return cdktf.Fn.tolist(this.getListAttribute('relation_vns_rs_abs_copy_connection'));
  }
  public set relationVnsRsAbsCopyConnection(value: string[]) {
    this._relationVnsRsAbsCopyConnection = value;
  }
  public resetRelationVnsRsAbsCopyConnection() {
    this._relationVnsRsAbsCopyConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relationVnsRsAbsCopyConnectionInput() {
    return this._relationVnsRsAbsCopyConnection;
  }

  // unicast_route - computed: true, optional: true, required: false
  private _unicastRoute?: string; 
  public get unicastRoute() {
    return this.getStringAttribute('unicast_route');
  }
  public set unicastRoute(value: string) {
    this._unicastRoute = value;
  }
  public resetUnicastRoute() {
    this._unicastRoute = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unicastRouteInput() {
    return this._unicastRoute;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adj_type: cdktf.stringToTerraform(this._adjType),
      annotation: cdktf.stringToTerraform(this._annotation),
      conn_dir: cdktf.stringToTerraform(this._connDir),
      conn_type: cdktf.stringToTerraform(this._connType),
      description: cdktf.stringToTerraform(this._description),
      direct_connect: cdktf.stringToTerraform(this._directConnect),
      id: cdktf.stringToTerraform(this._id),
      l4_l7_service_graph_template_dn: cdktf.stringToTerraform(this._l4L7ServiceGraphTemplateDn),
      name: cdktf.stringToTerraform(this._name),
      name_alias: cdktf.stringToTerraform(this._nameAlias),
      relation_vns_rs_abs_connection_conns: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationVnsRsAbsConnectionConns),
      relation_vns_rs_abs_copy_connection: cdktf.listMapper(cdktf.stringToTerraform, false)(this._relationVnsRsAbsCopyConnection),
      unicast_route: cdktf.stringToTerraform(this._unicastRoute),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adj_type: {
        value: cdktf.stringToHclTerraform(this._adjType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      annotation: {
        value: cdktf.stringToHclTerraform(this._annotation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_dir: {
        value: cdktf.stringToHclTerraform(this._connDir),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      conn_type: {
        value: cdktf.stringToHclTerraform(this._connType),
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
      direct_connect: {
        value: cdktf.stringToHclTerraform(this._directConnect),
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
      l4_l7_service_graph_template_dn: {
        value: cdktf.stringToHclTerraform(this._l4L7ServiceGraphTemplateDn),
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
      relation_vns_rs_abs_connection_conns: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationVnsRsAbsConnectionConns),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      relation_vns_rs_abs_copy_connection: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._relationVnsRsAbsCopyConnection),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      unicast_route: {
        value: cdktf.stringToHclTerraform(this._unicastRoute),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
