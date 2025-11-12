// https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_dns_vdom
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemDnsVdomConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_dns_vdom#dns_overide SystemDnsVdom#dns_overide}
  */
  readonly dnsOveride?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_dns_vdom#id SystemDnsVdom#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_dns_vdom#ip_primary SystemDnsVdom#ip_primary}
  */
  readonly ipPrimary?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_dns_vdom#ip_second SystemDnsVdom#ip_second}
  */
  readonly ipSecond?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_dns_vdom#vdom SystemDnsVdom#vdom}
  */
  readonly vdom: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_dns_vdom fortiadc_system_dns_vdom}
*/
export class SystemDnsVdom extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiadc_system_dns_vdom";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemDnsVdom resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemDnsVdom to import
  * @param importFromId The id of the existing SystemDnsVdom that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_dns_vdom#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemDnsVdom to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiadc_system_dns_vdom", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiadc/1.3.1/docs/resources/system_dns_vdom fortiadc_system_dns_vdom} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemDnsVdomConfig
  */
  public constructor(scope: Construct, id: string, config: SystemDnsVdomConfig) {
    super(scope, id, {
      terraformResourceType: 'fortiadc_system_dns_vdom',
      terraformGeneratorMetadata: {
        providerName: 'fortiadc',
        providerVersion: '1.3.1',
        providerVersionConstraint: '1.3.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._dnsOveride = config.dnsOveride;
    this._id = config.id;
    this._ipPrimary = config.ipPrimary;
    this._ipSecond = config.ipSecond;
    this._vdom = config.vdom;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // dns_overide - computed: true, optional: true, required: false
  private _dnsOveride?: string; 
  public get dnsOveride() {
    return this.getStringAttribute('dns_overide');
  }
  public set dnsOveride(value: string) {
    this._dnsOveride = value;
  }
  public resetDnsOveride() {
    this._dnsOveride = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsOverideInput() {
    return this._dnsOveride;
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

  // ip_primary - computed: true, optional: true, required: false
  private _ipPrimary?: string; 
  public get ipPrimary() {
    return this.getStringAttribute('ip_primary');
  }
  public set ipPrimary(value: string) {
    this._ipPrimary = value;
  }
  public resetIpPrimary() {
    this._ipPrimary = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipPrimaryInput() {
    return this._ipPrimary;
  }

  // ip_second - computed: true, optional: true, required: false
  private _ipSecond?: string; 
  public get ipSecond() {
    return this.getStringAttribute('ip_second');
  }
  public set ipSecond(value: string) {
    this._ipSecond = value;
  }
  public resetIpSecond() {
    this._ipSecond = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSecondInput() {
    return this._ipSecond;
  }

  // vdom - computed: false, optional: false, required: true
  private _vdom?: string; 
  public get vdom() {
    return this.getStringAttribute('vdom');
  }
  public set vdom(value: string) {
    this._vdom = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vdomInput() {
    return this._vdom;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      dns_overide: cdktf.stringToTerraform(this._dnsOveride),
      id: cdktf.stringToTerraform(this._id),
      ip_primary: cdktf.stringToTerraform(this._ipPrimary),
      ip_second: cdktf.stringToTerraform(this._ipSecond),
      vdom: cdktf.stringToTerraform(this._vdom),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      dns_overide: {
        value: cdktf.stringToHclTerraform(this._dnsOveride),
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
      ip_primary: {
        value: cdktf.stringToHclTerraform(this._ipPrimary),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_second: {
        value: cdktf.stringToHclTerraform(this._ipSecond),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vdom: {
        value: cdktf.stringToHclTerraform(this._vdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
