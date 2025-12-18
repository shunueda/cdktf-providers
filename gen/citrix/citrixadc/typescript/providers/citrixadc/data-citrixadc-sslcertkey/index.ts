// https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcertkey
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCitrixadcSslcertkeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the certificate and private-key pair to read.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcertkey#certkey DataCitrixadcSslcertkey#certkey}
  */
  readonly certkey: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcertkey citrixadc_sslcertkey}
*/
export class DataCitrixadcSslcertkey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrixadc_sslcertkey";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCitrixadcSslcertkey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCitrixadcSslcertkey to import
  * @param importFromId The id of the existing DataCitrixadcSslcertkey that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcertkey#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCitrixadcSslcertkey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrixadc_sslcertkey", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrixadc/2.1.0/docs/data-sources/sslcertkey citrixadc_sslcertkey} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCitrixadcSslcertkeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataCitrixadcSslcertkeyConfig) {
    super(scope, id, {
      terraformResourceType: 'citrixadc_sslcertkey',
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
    this._certkey = config.certkey;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // bundle - computed: true, optional: false, required: false
  public get bundle() {
    return this.getStringAttribute('bundle');
  }

  // cert - computed: true, optional: false, required: false
  public get cert() {
    return this.getStringAttribute('cert');
  }

  // certkey - computed: false, optional: false, required: true
  private _certkey?: string; 
  public get certkey() {
    return this.getStringAttribute('certkey');
  }
  public set certkey(value: string) {
    this._certkey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get certkeyInput() {
    return this._certkey;
  }

  // deletecertkeyfilesonremoval - computed: true, optional: false, required: false
  public get deletecertkeyfilesonremoval() {
    return this.getStringAttribute('deletecertkeyfilesonremoval');
  }

  // deletefromdevice - computed: true, optional: false, required: false
  public get deletefromdevice() {
    return this.getBooleanAttribute('deletefromdevice');
  }

  // expirymonitor - computed: true, optional: false, required: false
  public get expirymonitor() {
    return this.getStringAttribute('expirymonitor');
  }

  // fipskey - computed: true, optional: false, required: false
  public get fipskey() {
    return this.getStringAttribute('fipskey');
  }

  // hsmkey - computed: true, optional: false, required: false
  public get hsmkey() {
    return this.getStringAttribute('hsmkey');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inform - computed: true, optional: false, required: false
  public get inform() {
    return this.getStringAttribute('inform');
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // linkcertkeyname - computed: true, optional: false, required: false
  public get linkcertkeyname() {
    return this.getStringAttribute('linkcertkeyname');
  }

  // nodomaincheck - computed: true, optional: false, required: false
  public get nodomaincheck() {
    return this.getBooleanAttribute('nodomaincheck');
  }

  // notificationperiod - computed: true, optional: false, required: false
  public get notificationperiod() {
    return this.getNumberAttribute('notificationperiod');
  }

  // ocspstaplingcache - computed: true, optional: false, required: false
  public get ocspstaplingcache() {
    return this.getBooleanAttribute('ocspstaplingcache');
  }

  // passplain - computed: true, optional: false, required: false
  public get passplain() {
    return this.getStringAttribute('passplain');
  }

  // passplain_wo - computed: true, optional: false, required: false
  public get passplainWo() {
    return this.getStringAttribute('passplain_wo');
  }

  // passplain_wo_version - computed: true, optional: false, required: false
  public get passplainWoVersion() {
    return this.getNumberAttribute('passplain_wo_version');
  }

  // password - computed: true, optional: false, required: false
  public get password() {
    return this.getBooleanAttribute('password');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      certkey: cdktf.stringToTerraform(this._certkey),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      certkey: {
        value: cdktf.stringToHclTerraform(this._certkey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
