// https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_view
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnmpViewConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of snmp view.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_view#name SnmpView#name}
  */
  readonly name: string;
  /**
  * OID exclude list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_view#oid_exclude SnmpView#oid_exclude}
  */
  readonly oidExclude?: string[];
  /**
  * OID include list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_view#oid_include SnmpView#oid_include}
  */
  readonly oidInclude?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_view junos_snmp_view}
*/
export class SnmpView extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "junos_snmp_view";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnmpView resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnmpView to import
  * @param importFromId The id of the existing SnmpView that should be imported. Refer to the {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_view#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnmpView to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "junos_snmp_view", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jeremmfr/junos/2.16.0/docs/resources/snmp_view junos_snmp_view} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnmpViewConfig
  */
  public constructor(scope: Construct, id: string, config: SnmpViewConfig) {
    super(scope, id, {
      terraformResourceType: 'junos_snmp_view',
      terraformGeneratorMetadata: {
        providerName: 'junos',
        providerVersion: '2.16.0',
        providerVersionConstraint: '2.16.0'
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
    this._oidExclude = config.oidExclude;
    this._oidInclude = config.oidInclude;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // oid_exclude - computed: false, optional: true, required: false
  private _oidExclude?: string[]; 
  public get oidExclude() {
    return cdktf.Fn.tolist(this.getListAttribute('oid_exclude'));
  }
  public set oidExclude(value: string[]) {
    this._oidExclude = value;
  }
  public resetOidExclude() {
    this._oidExclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidExcludeInput() {
    return this._oidExclude;
  }

  // oid_include - computed: false, optional: true, required: false
  private _oidInclude?: string[]; 
  public get oidInclude() {
    return cdktf.Fn.tolist(this.getListAttribute('oid_include'));
  }
  public set oidInclude(value: string[]) {
    this._oidInclude = value;
  }
  public resetOidInclude() {
    this._oidInclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oidIncludeInput() {
    return this._oidInclude;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      name: cdktf.stringToTerraform(this._name),
      oid_exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oidExclude),
      oid_include: cdktf.listMapper(cdktf.stringToTerraform, false)(this._oidInclude),
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
      oid_exclude: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oidExclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      oid_include: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._oidInclude),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
