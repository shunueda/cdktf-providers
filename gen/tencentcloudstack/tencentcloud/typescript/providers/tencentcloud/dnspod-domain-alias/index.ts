// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_domain_alias
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DnspodDomainAliasConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_domain_alias#domain DnspodDomainAlias#domain}
  */
  readonly domain: string;
  /**
  * Domain alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_domain_alias#domain_alias DnspodDomainAlias#domain_alias}
  */
  readonly domainAlias: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_domain_alias#id DnspodDomainAlias#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_domain_alias tencentcloud_dnspod_domain_alias}
*/
export class DnspodDomainAlias extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_dnspod_domain_alias";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DnspodDomainAlias resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DnspodDomainAlias to import
  * @param importFromId The id of the existing DnspodDomainAlias that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_domain_alias#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DnspodDomainAlias to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_dnspod_domain_alias", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.38/docs/resources/dnspod_domain_alias tencentcloud_dnspod_domain_alias} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DnspodDomainAliasConfig
  */
  public constructor(scope: Construct, id: string, config: DnspodDomainAliasConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_dnspod_domain_alias',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.38',
        providerVersionConstraint: '1.82.38'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domain = config.domain;
    this._domainAlias = config.domainAlias;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // domain_alias - computed: false, optional: false, required: true
  private _domainAlias?: string; 
  public get domainAlias() {
    return this.getStringAttribute('domain_alias');
  }
  public set domainAlias(value: string) {
    this._domainAlias = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainAliasInput() {
    return this._domainAlias;
  }

  // domain_alias_id - computed: true, optional: false, required: false
  public get domainAliasId() {
    return this.getNumberAttribute('domain_alias_id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain: cdktf.stringToTerraform(this._domain),
      domain_alias: cdktf.stringToTerraform(this._domainAlias),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain: {
        value: cdktf.stringToHclTerraform(this._domain),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      domain_alias: {
        value: cdktf.stringToHclTerraform(this._domainAlias),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
