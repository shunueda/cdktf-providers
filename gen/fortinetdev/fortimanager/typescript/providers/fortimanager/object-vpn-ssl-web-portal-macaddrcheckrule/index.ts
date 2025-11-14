// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectVpnSslWebPortalMacaddrcheckruleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule#adom ObjectVpnSslWebPortalMacaddrcheckrule#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule#id ObjectVpnSslWebPortalMacaddrcheckrule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule#mac_addr_list ObjectVpnSslWebPortalMacaddrcheckrule#mac_addr_list}
  */
  readonly macAddrList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule#mac_addr_mask ObjectVpnSslWebPortalMacaddrcheckrule#mac_addr_mask}
  */
  readonly macAddrMask?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule#name ObjectVpnSslWebPortalMacaddrcheckrule#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule#portal ObjectVpnSslWebPortalMacaddrcheckrule#portal}
  */
  readonly portal: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule#scopetype ObjectVpnSslWebPortalMacaddrcheckrule#scopetype}
  */
  readonly scopetype?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule fortimanager_object_vpn_ssl_web_portal_macaddrcheckrule}
*/
export class ObjectVpnSslWebPortalMacaddrcheckrule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_vpn_ssl_web_portal_macaddrcheckrule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectVpnSslWebPortalMacaddrcheckrule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectVpnSslWebPortalMacaddrcheckrule to import
  * @param importFromId The id of the existing ObjectVpnSslWebPortalMacaddrcheckrule that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectVpnSslWebPortalMacaddrcheckrule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_vpn_ssl_web_portal_macaddrcheckrule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_vpn_ssl_web_portal_macaddrcheckrule fortimanager_object_vpn_ssl_web_portal_macaddrcheckrule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectVpnSslWebPortalMacaddrcheckruleConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectVpnSslWebPortalMacaddrcheckruleConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_vpn_ssl_web_portal_macaddrcheckrule',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.15.0',
        providerVersionConstraint: '1.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._id = config.id;
    this._macAddrList = config.macAddrList;
    this._macAddrMask = config.macAddrMask;
    this._name = config.name;
    this._portal = config.portal;
    this._scopetype = config.scopetype;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
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

  // mac_addr_list - computed: true, optional: true, required: false
  private _macAddrList?: string[]; 
  public get macAddrList() {
    return cdktf.Fn.tolist(this.getListAttribute('mac_addr_list'));
  }
  public set macAddrList(value: string[]) {
    this._macAddrList = value;
  }
  public resetMacAddrList() {
    this._macAddrList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrListInput() {
    return this._macAddrList;
  }

  // mac_addr_mask - computed: false, optional: true, required: false
  private _macAddrMask?: number; 
  public get macAddrMask() {
    return this.getNumberAttribute('mac_addr_mask');
  }
  public set macAddrMask(value: number) {
    this._macAddrMask = value;
  }
  public resetMacAddrMask() {
    this._macAddrMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddrMaskInput() {
    return this._macAddrMask;
  }

  // name - computed: false, optional: true, required: false
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

  // portal - computed: false, optional: false, required: true
  private _portal?: string; 
  public get portal() {
    return this.getStringAttribute('portal');
  }
  public set portal(value: string) {
    this._portal = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      id: cdktf.stringToTerraform(this._id),
      mac_addr_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._macAddrList),
      mac_addr_mask: cdktf.numberToTerraform(this._macAddrMask),
      name: cdktf.stringToTerraform(this._name),
      portal: cdktf.stringToTerraform(this._portal),
      scopetype: cdktf.stringToTerraform(this._scopetype),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
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
      mac_addr_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._macAddrList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      mac_addr_mask: {
        value: cdktf.numberToHclTerraform(this._macAddrMask),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      portal: {
        value: cdktf.stringToHclTerraform(this._portal),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
