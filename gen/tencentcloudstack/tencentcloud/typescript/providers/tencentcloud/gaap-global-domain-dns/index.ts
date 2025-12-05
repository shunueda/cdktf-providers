// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/gaap_global_domain_dns
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GaapGlobalDomainDnsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Domain Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/gaap_global_domain_dns#domain_id GaapGlobalDomainDns#domain_id}
  */
  readonly domainId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/gaap_global_domain_dns#id GaapGlobalDomainDns#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Nation Country Inner Codes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/gaap_global_domain_dns#nation_country_inner_codes GaapGlobalDomainDns#nation_country_inner_codes}
  */
  readonly nationCountryInnerCodes: string[];
  /**
  * Proxy Id List.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/gaap_global_domain_dns#proxy_id_list GaapGlobalDomainDns#proxy_id_list}
  */
  readonly proxyIdList: string[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/gaap_global_domain_dns tencentcloud_gaap_global_domain_dns}
*/
export class GaapGlobalDomainDns extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_gaap_global_domain_dns";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GaapGlobalDomainDns resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GaapGlobalDomainDns to import
  * @param importFromId The id of the existing GaapGlobalDomainDns that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/gaap_global_domain_dns#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GaapGlobalDomainDns to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_gaap_global_domain_dns", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.42/docs/resources/gaap_global_domain_dns tencentcloud_gaap_global_domain_dns} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GaapGlobalDomainDnsConfig
  */
  public constructor(scope: Construct, id: string, config: GaapGlobalDomainDnsConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_gaap_global_domain_dns',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.42',
        providerVersionConstraint: '1.82.42'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._domainId = config.domainId;
    this._id = config.id;
    this._nationCountryInnerCodes = config.nationCountryInnerCodes;
    this._proxyIdList = config.proxyIdList;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // domain_id - computed: false, optional: false, required: true
  private _domainId?: string; 
  public get domainId() {
    return this.getStringAttribute('domain_id');
  }
  public set domainId(value: string) {
    this._domainId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get domainIdInput() {
    return this._domainId;
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

  // nation_country_inner_codes - computed: false, optional: false, required: true
  private _nationCountryInnerCodes?: string[]; 
  public get nationCountryInnerCodes() {
    return cdktf.Fn.tolist(this.getListAttribute('nation_country_inner_codes'));
  }
  public set nationCountryInnerCodes(value: string[]) {
    this._nationCountryInnerCodes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nationCountryInnerCodesInput() {
    return this._nationCountryInnerCodes;
  }

  // proxy_id_list - computed: false, optional: false, required: true
  private _proxyIdList?: string[]; 
  public get proxyIdList() {
    return cdktf.Fn.tolist(this.getListAttribute('proxy_id_list'));
  }
  public set proxyIdList(value: string[]) {
    this._proxyIdList = value;
  }
  // Temporarily expose input value. Use with caution.
  public get proxyIdListInput() {
    return this._proxyIdList;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      domain_id: cdktf.stringToTerraform(this._domainId),
      id: cdktf.stringToTerraform(this._id),
      nation_country_inner_codes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._nationCountryInnerCodes),
      proxy_id_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._proxyIdList),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      domain_id: {
        value: cdktf.stringToHclTerraform(this._domainId),
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
      nation_country_inner_codes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._nationCountryInnerCodes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      proxy_id_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._proxyIdList),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
