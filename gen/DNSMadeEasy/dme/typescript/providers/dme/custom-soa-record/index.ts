// https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomSoaRecordConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#comp CustomSoaRecord#comp}
  */
  readonly comp: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#email CustomSoaRecord#email}
  */
  readonly email: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#expire CustomSoaRecord#expire}
  */
  readonly expire: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#id CustomSoaRecord#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#name CustomSoaRecord#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#negative_cache CustomSoaRecord#negative_cache}
  */
  readonly negativeCache: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#refresh CustomSoaRecord#refresh}
  */
  readonly refresh: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#retry CustomSoaRecord#retry}
  */
  readonly retry: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#serial CustomSoaRecord#serial}
  */
  readonly serial: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#ttl CustomSoaRecord#ttl}
  */
  readonly ttl: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record dme_custom_soa_record}
*/
export class CustomSoaRecord extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dme_custom_soa_record";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomSoaRecord resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomSoaRecord to import
  * @param importFromId The id of the existing CustomSoaRecord that should be imported. Refer to the {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomSoaRecord to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dme_custom_soa_record", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dnsmadeeasy/dme/1.0.8/docs/resources/custom_soa_record dme_custom_soa_record} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomSoaRecordConfig
  */
  public constructor(scope: Construct, id: string, config: CustomSoaRecordConfig) {
    super(scope, id, {
      terraformResourceType: 'dme_custom_soa_record',
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
    this._comp = config.comp;
    this._email = config.email;
    this._expire = config.expire;
    this._id = config.id;
    this._name = config.name;
    this._negativeCache = config.negativeCache;
    this._refresh = config.refresh;
    this._retry = config.retry;
    this._serial = config.serial;
    this._ttl = config.ttl;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // comp - computed: false, optional: false, required: true
  private _comp?: string; 
  public get comp() {
    return this.getStringAttribute('comp');
  }
  public set comp(value: string) {
    this._comp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compInput() {
    return this._comp;
  }

  // email - computed: false, optional: false, required: true
  private _email?: string; 
  public get email() {
    return this.getStringAttribute('email');
  }
  public set email(value: string) {
    this._email = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // expire - computed: false, optional: false, required: true
  private _expire?: number; 
  public get expire() {
    return this.getNumberAttribute('expire');
  }
  public set expire(value: number) {
    this._expire = value;
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

  // negative_cache - computed: false, optional: false, required: true
  private _negativeCache?: number; 
  public get negativeCache() {
    return this.getNumberAttribute('negative_cache');
  }
  public set negativeCache(value: number) {
    this._negativeCache = value;
  }
  // Temporarily expose input value. Use with caution.
  public get negativeCacheInput() {
    return this._negativeCache;
  }

  // refresh - computed: false, optional: false, required: true
  private _refresh?: number; 
  public get refresh() {
    return this.getNumberAttribute('refresh');
  }
  public set refresh(value: number) {
    this._refresh = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshInput() {
    return this._refresh;
  }

  // retry - computed: false, optional: false, required: true
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // serial - computed: false, optional: false, required: true
  private _serial?: number; 
  public get serial() {
    return this.getNumberAttribute('serial');
  }
  public set serial(value: number) {
    this._serial = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serialInput() {
    return this._serial;
  }

  // ttl - computed: false, optional: false, required: true
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
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
      comp: cdktf.stringToTerraform(this._comp),
      email: cdktf.stringToTerraform(this._email),
      expire: cdktf.numberToTerraform(this._expire),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      negative_cache: cdktf.numberToTerraform(this._negativeCache),
      refresh: cdktf.numberToTerraform(this._refresh),
      retry: cdktf.numberToTerraform(this._retry),
      serial: cdktf.numberToTerraform(this._serial),
      ttl: cdktf.numberToTerraform(this._ttl),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      comp: {
        value: cdktf.stringToHclTerraform(this._comp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      email: {
        value: cdktf.stringToHclTerraform(this._email),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      negative_cache: {
        value: cdktf.numberToHclTerraform(this._negativeCache),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
