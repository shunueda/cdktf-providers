// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnssoarecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#contact Dnssoarec#contact}
  */
  readonly contact?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#domain Dnssoarec#domain}
  */
  readonly domain: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#ecssubnet Dnssoarec#ecssubnet}
  */
  readonly ecssubnet?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#expire Dnssoarec#expire}
  */
  readonly expire?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#id Dnssoarec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#minimum Dnssoarec#minimum}
  */
  readonly minimum?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#nodeid Dnssoarec#nodeid}
  */
  readonly nodeid?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#originserver Dnssoarec#originserver}
  */
  readonly originserver?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#refresh Dnssoarec#refresh}
  */
  readonly refresh?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#retry Dnssoarec#retry}
  */
  readonly retry?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#serial Dnssoarec#serial}
  */
  readonly serial?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#ttl Dnssoarec#ttl}
  */
  readonly ttl?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec citrixadc_dnssoarec}
*/
export class Dnssoarec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_dnssoarec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Dnssoarec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Dnssoarec to import
  * @param importFromId The id of the existing Dnssoarec that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Dnssoarec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_dnssoarec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/resources/dnssoarec citrixadc_dnssoarec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnssoarecConfig
  */
  public constructor(scope: Construct, id: string, config: DnssoarecConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_dnssoarec',
      terraformGeneratorMetadata: {
        providerName: 'citrixadc',
        providerVersion: '2.1.0',
        providerVersionConstraint: '2.1.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._contact = config.contact;
    this._domain = config.domain;
    this._ecssubnet = config.ecssubnet;
    this._expire = config.expire;
    this._id = config.id;
    this._minimum = config.minimum;
    this._nodeid = config.nodeid;
    this._originserver = config.originserver;
    this._refresh = config.refresh;
    this._retry = config.retry;
    this._serial = config.serial;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // contact - computed: true, optional: true, required: false
  private _contact?: string; 
  public get contact() {
    return this.getStringAttribute('contact');
  }
  public set contact(value: string) {
    this._contact = value;
  }
  public resetContact() {
    this._contact = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactInput() {
    return this._contact;
  }

  // domain - computed: false, optional: false, required: true
  private _domain?: string; 
  public get domain() {
    return this.getStringAttribute('domain');
  }
  public set domain(value: string) {
    this._domain = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainInput() {
    return this._domain;
  }

  // ecssubnet - computed: true, optional: true, required: false
  private _ecssubnet?: string; 
  public get ecssubnet() {
    return this.getStringAttribute('ecssubnet');
  }
  public set ecssubnet(value: string) {
    this._ecssubnet = value;
  }
  public resetEcssubnet() {
    this._ecssubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ecssubnetInput() {
    return this._ecssubnet;
  }

  // expire - computed: true, optional: true, required: false
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
  }
  public resetExpire() {
    this._expire = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expireInput() {
    return this._expire;
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

  // minimum - computed: true, optional: true, required: false
  private _minimum?: number; 
  public get minimum() {
    return this.getNumberAttribute('minimum');
  }
  public set minimum(value: number) {
    this._minimum = value;
  }
  public resetMinimum() {
    this._minimum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumInput() {
    return this._minimum;
  }

  // nodeid - computed: true, optional: true, required: false
  private _nodeid?: number; 
  public get nodeid() {
    return this.getNumberAttribute('nodeid');
  }
  public set nodeid(value: number) {
    this._nodeid = value;
  }
  public resetNodeid() {
    this._nodeid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeidInput() {
    return this._nodeid;
  }

  // originserver - computed: true, optional: true, required: false
  private _originserver?: string; 
  public get originserver() {
    return this.getStringAttribute('originserver');
  }
  public set originserver(value: string) {
    this._originserver = value;
  }
  public resetOriginserver() {
    this._originserver = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get originserverInput() {
    return this._originserver;
  }

  // refresh - computed: true, optional: true, required: false
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  public resetRefresh() {
    this._refresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // retry - computed: true, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // serial - computed: true, optional: true, required: false
  private _serial?: number; 
  public get serial() {
    return this.getNumberAttribute('serial');
  }
  public set serial(value: number) {
    this._serial = value;
  }
  public resetSerial() {
    this._serial = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // ttl - computed: true, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      contact: cdktf.stringToTerraform(this._contact),
      domain: cdktf.stringToTerraform(this._domain),
      ecssubnet: cdktf.stringToTerraform(this._ecssubnet),
      expire: cdktf.numberToTerraform(this._expire),
      id: cdktf.stringToTerraform(this._id),
      minimum: cdktf.numberToTerraform(this._minimum),
      nodeid: cdktf.numberToTerraform(this._nodeid),
      originserver: cdktf.stringToTerraform(this._originserver),
      refresh: cdktf.numberToTerraform(this._refresh),
      retry: cdktf.numberToTerraform(this._retry),
      serial: cdktf.numberToTerraform(this._serial),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      contact: {
        value: cdktf.stringToHclTerraform(this._contact),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ecssubnet: {
        value: cdktf.stringToHclTerraform(this._ecssubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expire: {
        value: cdktf.numberToHclTerraform(this._expire),
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
      minimum: {
        value: cdktf.numberToHclTerraform(this._minimum),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nodeid: {
        value: cdktf.numberToHclTerraform(this._nodeid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      originserver: {
        value: cdktf.stringToHclTerraform(this._originserver),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      refresh: {
        value: cdktf.numberToHclTerraform(this._refresh),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      serial: {
        value: cdktf.numberToHclTerraform(this._serial),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
