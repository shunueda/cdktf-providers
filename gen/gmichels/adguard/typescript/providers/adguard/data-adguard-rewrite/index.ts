// https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/rewrite
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAdguardRewriteConfig extends cdktf.TerraformMetaArguments {
  /**
  * Value of A, AAAA or CNAME DNS record
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/rewrite#answer DataAdguardRewrite#answer}
  */
  readonly answer: string;
  /**
  * Domain name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/rewrite#domain DataAdguardRewrite#domain}
  */
  readonly domain: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/rewrite adguard_rewrite}
*/
export class DataAdguardRewrite extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "adguard_rewrite";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataAdguardRewrite resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataAdguardRewrite to import
  * @param importFromId The id of the existing DataAdguardRewrite that should be imported. Refer to the {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/rewrite#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataAdguardRewrite to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "adguard_rewrite", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gmichels/adguard/1.6.2/docs/data-sources/rewrite adguard_rewrite} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAdguardRewriteConfig
  */
  public constructor(scope: Construct, id: string, config: DataAdguardRewriteConfig) {
    super(scope, id, {
      terraformResourceType: 'adguard_rewrite',
      terraformGeneratorMetadata: {
        providerName: 'adguard',
        providerVersion: '1.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._answer = config.answer;
    this._domain = config.domain;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // answer - computed: false, optional: false, required: true
  private _answer?: string; 
  public get answer() {
    return this.getStringAttribute('answer');
  }
  public set answer(value: string) {
    this._answer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get answerInput() {
    return this._answer;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      answer: cdktf.stringToTerraform(this._answer),
      domain: cdktf.stringToTerraform(this._domain),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      answer: {
        value: cdktf.stringToHclTerraform(this._answer),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
