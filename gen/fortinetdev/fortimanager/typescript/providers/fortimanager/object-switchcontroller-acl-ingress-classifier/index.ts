// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectSwitchcontrollerAclIngressClassifierAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#adom ObjectSwitchcontrollerAclIngressClassifierA#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#dst_ip_prefix ObjectSwitchcontrollerAclIngressClassifierA#dst_ip_prefix}
  */
  readonly dstIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#dst_mac ObjectSwitchcontrollerAclIngressClassifierA#dst_mac}
  */
  readonly dstMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#id ObjectSwitchcontrollerAclIngressClassifierA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#ingress ObjectSwitchcontrollerAclIngressClassifierA#ingress}
  */
  readonly ingress: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#scopetype ObjectSwitchcontrollerAclIngressClassifierA#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#src_ip_prefix ObjectSwitchcontrollerAclIngressClassifierA#src_ip_prefix}
  */
  readonly srcIpPrefix?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#src_mac ObjectSwitchcontrollerAclIngressClassifierA#src_mac}
  */
  readonly srcMac?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#vlan ObjectSwitchcontrollerAclIngressClassifierA#vlan}
  */
  readonly vlan?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier fortimanager_object_switchcontroller_acl_ingress_classifier}
*/
export class ObjectSwitchcontrollerAclIngressClassifierA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_switchcontroller_acl_ingress_classifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectSwitchcontrollerAclIngressClassifierA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectSwitchcontrollerAclIngressClassifierA to import
  * @param importFromId The id of the existing ObjectSwitchcontrollerAclIngressClassifierA that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectSwitchcontrollerAclIngressClassifierA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_switchcontroller_acl_ingress_classifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_switchcontroller_acl_ingress_classifier fortimanager_object_switchcontroller_acl_ingress_classifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectSwitchcontrollerAclIngressClassifierAConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectSwitchcontrollerAclIngressClassifierAConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_switchcontroller_acl_ingress_classifier',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0'
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
    this._dstIpPrefix = config.dstIpPrefix;
    this._dstMac = config.dstMac;
    this._id = config.id;
    this._ingress = config.ingress;
    this._scopetype = config.scopetype;
    this._srcIpPrefix = config.srcIpPrefix;
    this._srcMac = config.srcMac;
    this._vlan = config.vlan;
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

  // dst_ip_prefix - computed: true, optional: true, required: false
  private _dstIpPrefix?: string; 
  public get dstIpPrefix() {
    return this.getStringAttribute('dst_ip_prefix');
  }
  public set dstIpPrefix(value: string) {
    this._dstIpPrefix = value;
  }
  public resetDstIpPrefix() {
    this._dstIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstIpPrefixInput() {
    return this._dstIpPrefix;
  }

  // dst_mac - computed: true, optional: true, required: false
  private _dstMac?: string; 
  public get dstMac() {
    return this.getStringAttribute('dst_mac');
  }
  public set dstMac(value: string) {
    this._dstMac = value;
  }
  public resetDstMac() {
    this._dstMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstMacInput() {
    return this._dstMac;
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

  // ingress - computed: false, optional: false, required: true
  private _ingress?: string; 
  public get ingress() {
    return this.getStringAttribute('ingress');
  }
  public set ingress(value: string) {
    this._ingress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ingressInput() {
    return this._ingress;
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

  // src_ip_prefix - computed: true, optional: true, required: false
  private _srcIpPrefix?: string; 
  public get srcIpPrefix() {
    return this.getStringAttribute('src_ip_prefix');
  }
  public set srcIpPrefix(value: string) {
    this._srcIpPrefix = value;
  }
  public resetSrcIpPrefix() {
    this._srcIpPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcIpPrefixInput() {
    return this._srcIpPrefix;
  }

  // src_mac - computed: true, optional: true, required: false
  private _srcMac?: string; 
  public get srcMac() {
    return this.getStringAttribute('src_mac');
  }
  public set srcMac(value: string) {
    this._srcMac = value;
  }
  public resetSrcMac() {
    this._srcMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcMacInput() {
    return this._srcMac;
  }

  // vlan - computed: false, optional: true, required: false
  private _vlan?: number; 
  public get vlan() {
    return this.getNumberAttribute('vlan');
  }
  public set vlan(value: number) {
    this._vlan = value;
  }
  public resetVlan() {
    this._vlan = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanInput() {
    return this._vlan;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      dst_ip_prefix: cdktf.stringToTerraform(this._dstIpPrefix),
      dst_mac: cdktf.stringToTerraform(this._dstMac),
      id: cdktf.stringToTerraform(this._id),
      ingress: cdktf.stringToTerraform(this._ingress),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      src_ip_prefix: cdktf.stringToTerraform(this._srcIpPrefix),
      src_mac: cdktf.stringToTerraform(this._srcMac),
      vlan: cdktf.numberToTerraform(this._vlan),
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
      dst_ip_prefix: {
        value: cdktf.stringToHclTerraform(this._dstIpPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dst_mac: {
        value: cdktf.stringToHclTerraform(this._dstMac),
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
      ingress: {
        value: cdktf.stringToHclTerraform(this._ingress),
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
      src_ip_prefix: {
        value: cdktf.stringToHclTerraform(this._srcIpPrefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_mac: {
        value: cdktf.stringToHclTerraform(this._srcMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan: {
        value: cdktf.numberToHclTerraform(this._vlan),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
