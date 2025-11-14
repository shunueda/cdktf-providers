// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFirewallSslsshprofileSslexemptConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#address ObjectFirewallSslsshprofileSslexempt#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#address6 ObjectFirewallSslsshprofileSslexempt#address6}
  */
  readonly address6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#adom ObjectFirewallSslsshprofileSslexempt#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#fortiguard_category ObjectFirewallSslsshprofileSslexempt#fortiguard_category}
  */
  readonly fortiguardCategory?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#fosid ObjectFirewallSslsshprofileSslexempt#fosid}
  */
  readonly fosid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#id ObjectFirewallSslsshprofileSslexempt#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#regex ObjectFirewallSslsshprofileSslexempt#regex}
  */
  readonly regex?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#scopetype ObjectFirewallSslsshprofileSslexempt#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#ssl_ssh_profile ObjectFirewallSslsshprofileSslexempt#ssl_ssh_profile}
  */
  readonly sslSshProfile: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#type ObjectFirewallSslsshprofileSslexempt#type}
  */
  readonly type?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#wildcard_fqdn ObjectFirewallSslsshprofileSslexempt#wildcard_fqdn}
  */
  readonly wildcardFqdn?: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt fortimanager_object_firewall_sslsshprofile_sslexempt}
*/
export class ObjectFirewallSslsshprofileSslexempt extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_firewall_sslsshprofile_sslexempt";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFirewallSslsshprofileSslexempt resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFirewallSslsshprofileSslexempt to import
  * @param importFromId The id of the existing ObjectFirewallSslsshprofileSslexempt that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFirewallSslsshprofileSslexempt to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_firewall_sslsshprofile_sslexempt", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.15.0/docs/resources/object_firewall_sslsshprofile_sslexempt fortimanager_object_firewall_sslsshprofile_sslexempt} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFirewallSslsshprofileSslexemptConfig
  */
  public constructor(scope: Construct, id: string, config: ObjectFirewallSslsshprofileSslexemptConfig) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_firewall_sslsshprofile_sslexempt',
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
    this._address = config.address;
    this._address6 = config.address6;
    this._adom = config.adom;
    this._fortiguardCategory = config.fortiguardCategory;
    this._fosid = config.fosid;
    this._id = config.id;
    this._regex = config.regex;
    this._scopetype = config.scopetype;
    this._sslSshProfile = config.sslSshProfile;
    this._type = config.type;
    this._wildcardFqdn = config.wildcardFqdn;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // address6 - computed: false, optional: true, required: false
  private _address6?: string; 
  public get address6() {
    return this.getStringAttribute('address6');
  }
  public set address6(value: string) {
    this._address6 = value;
  }
  public resetAddress6() {
    this._address6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get address6Input() {
    return this._address6;
  }

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

  // fortiguard_category - computed: true, optional: true, required: false
  private _fortiguardCategory?: string[]; 
  public get fortiguardCategory() {
    return cdktf.Fn.tolist(this.getListAttribute('fortiguard_category'));
  }
  public set fortiguardCategory(value: string[]) {
    this._fortiguardCategory = value;
  }
  public resetFortiguardCategory() {
    this._fortiguardCategory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fortiguardCategoryInput() {
    return this._fortiguardCategory;
  }

  // fosid - computed: true, optional: true, required: false
  private _fosid?: number; 
  public get fosid() {
    return this.getNumberAttribute('fosid');
  }
  public set fosid(value: number) {
    this._fosid = value;
  }
  public resetFosid() {
    this._fosid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fosidInput() {
    return this._fosid;
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

  // regex - computed: false, optional: true, required: false
  private _regex?: string; 
  public get regex() {
    return this.getStringAttribute('regex');
  }
  public set regex(value: string) {
    this._regex = value;
  }
  public resetRegex() {
    this._regex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regexInput() {
    return this._regex;
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

  // ssl_ssh_profile - computed: false, optional: false, required: true
  private _sslSshProfile?: string; 
  public get sslSshProfile() {
    return this.getStringAttribute('ssl_ssh_profile');
  }
  public set sslSshProfile(value: string) {
    this._sslSshProfile = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslSshProfileInput() {
    return this._sslSshProfile;
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

  // wildcard_fqdn - computed: true, optional: true, required: false
  private _wildcardFqdn?: string[]; 
  public get wildcardFqdn() {
    return cdktf.Fn.tolist(this.getListAttribute('wildcard_fqdn'));
  }
  public set wildcardFqdn(value: string[]) {
    this._wildcardFqdn = value;
  }
  public resetWildcardFqdn() {
    this._wildcardFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wildcardFqdnInput() {
    return this._wildcardFqdn;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      address: cdktf.stringToTerraform(this._address),
      address6: cdktf.stringToTerraform(this._address6),
      adom: cdktf.stringToTerraform(this._adom),
      fortiguard_category: cdktf.listMapper(cdktf.stringToTerraform, false)(this._fortiguardCategory),
      fosid: cdktf.numberToTerraform(this._fosid),
      id: cdktf.stringToTerraform(this._id),
      regex: cdktf.stringToTerraform(this._regex),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      ssl_ssh_profile: cdktf.stringToTerraform(this._sslSshProfile),
      type: cdktf.stringToTerraform(this._type),
      wildcard_fqdn: cdktf.listMapper(cdktf.stringToTerraform, false)(this._wildcardFqdn),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      address: {
        value: cdktf.stringToHclTerraform(this._address),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      address6: {
        value: cdktf.stringToHclTerraform(this._address6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fortiguard_category: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._fortiguardCategory),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      fosid: {
        value: cdktf.numberToHclTerraform(this._fosid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      regex: {
        value: cdktf.stringToHclTerraform(this._regex),
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
      ssl_ssh_profile: {
        value: cdktf.stringToHclTerraform(this._sslSshProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wildcard_fqdn: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._wildcardFqdn),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
