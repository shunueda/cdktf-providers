// https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_fortiguard
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataFortiswitchSystemFortiguardConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_fortiguard#id DataFortiswitchSystemFortiguard#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}
export interface DataFortiswitchSystemFortiguardSrvOvrdListStruct {
}

export function dataFortiswitchSystemFortiguardSrvOvrdListStructToTerraform(struct?: DataFortiswitchSystemFortiguardSrvOvrdListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataFortiswitchSystemFortiguardSrvOvrdListStructToHclTerraform(struct?: DataFortiswitchSystemFortiguardSrvOvrdListStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataFortiswitchSystemFortiguardSrvOvrdListStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataFortiswitchSystemFortiguardSrvOvrdListStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataFortiswitchSystemFortiguardSrvOvrdListStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // addr_type - computed: true, optional: false, required: false
  public get addrType() {
    return this.getStringAttribute('addr_type');
  }

  // ip - computed: true, optional: false, required: false
  public get ip() {
    return this.getStringAttribute('ip');
  }

  // ip6 - computed: true, optional: false, required: false
  public get ip6() {
    return this.getStringAttribute('ip6');
  }
}

export class DataFortiswitchSystemFortiguardSrvOvrdListStructList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): DataFortiswitchSystemFortiguardSrvOvrdListStructOutputReference {
    return new DataFortiswitchSystemFortiguardSrvOvrdListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_fortiguard fortiswitch_system_fortiguard}
*/
export class DataFortiswitchSystemFortiguard extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortiswitch_system_fortiguard";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataFortiswitchSystemFortiguard resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataFortiswitchSystemFortiguard to import
  * @param importFromId The id of the existing DataFortiswitchSystemFortiguard that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_fortiguard#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataFortiswitchSystemFortiguard to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortiswitch_system_fortiguard", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortiswitch/1.1.6/docs/data-sources/system_fortiguard fortiswitch_system_fortiguard} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataFortiswitchSystemFortiguardConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataFortiswitchSystemFortiguardConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortiswitch_system_fortiguard',
      terraformGeneratorMetadata: {
        providerName: 'fortiswitch',
        providerVersion: '1.1.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analysis_service - computed: true, optional: false, required: false
  public get analysisService() {
    return this.getStringAttribute('analysis_service');
  }

  // antispam_cache - computed: true, optional: false, required: false
  public get antispamCache() {
    return this.getStringAttribute('antispam_cache');
  }

  // antispam_cache_mpercent - computed: true, optional: false, required: false
  public get antispamCacheMpercent() {
    return this.getNumberAttribute('antispam_cache_mpercent');
  }

  // antispam_cache_ttl - computed: true, optional: false, required: false
  public get antispamCacheTtl() {
    return this.getNumberAttribute('antispam_cache_ttl');
  }

  // antispam_expiration - computed: true, optional: false, required: false
  public get antispamExpiration() {
    return this.getNumberAttribute('antispam_expiration');
  }

  // antispam_force_off - computed: true, optional: false, required: false
  public get antispamForceOff() {
    return this.getStringAttribute('antispam_force_off');
  }

  // antispam_license - computed: true, optional: false, required: false
  public get antispamLicense() {
    return this.getNumberAttribute('antispam_license');
  }

  // antispam_score_threshold - computed: true, optional: false, required: false
  public get antispamScoreThreshold() {
    return this.getNumberAttribute('antispam_score_threshold');
  }

  // antispam_timeout - computed: true, optional: false, required: false
  public get antispamTimeout() {
    return this.getNumberAttribute('antispam_timeout');
  }

  // avquery_cache - computed: true, optional: false, required: false
  public get avqueryCache() {
    return this.getStringAttribute('avquery_cache');
  }

  // avquery_cache_mpercent - computed: true, optional: false, required: false
  public get avqueryCacheMpercent() {
    return this.getNumberAttribute('avquery_cache_mpercent');
  }

  // avquery_cache_ttl - computed: true, optional: false, required: false
  public get avqueryCacheTtl() {
    return this.getNumberAttribute('avquery_cache_ttl');
  }

  // avquery_expiration - computed: true, optional: false, required: false
  public get avqueryExpiration() {
    return this.getNumberAttribute('avquery_expiration');
  }

  // avquery_force_off - computed: true, optional: false, required: false
  public get avqueryForceOff() {
    return this.getStringAttribute('avquery_force_off');
  }

  // avquery_license - computed: true, optional: false, required: false
  public get avqueryLicense() {
    return this.getNumberAttribute('avquery_license');
  }

  // avquery_timeout - computed: true, optional: false, required: false
  public get avqueryTimeout() {
    return this.getNumberAttribute('avquery_timeout');
  }

  // client_override_ip - computed: true, optional: false, required: false
  public get clientOverrideIp() {
    return this.getStringAttribute('client_override_ip');
  }

  // client_override_status - computed: true, optional: false, required: false
  public get clientOverrideStatus() {
    return this.getStringAttribute('client_override_status');
  }

  // hostname - computed: true, optional: false, required: false
  public get hostname() {
    return this.getStringAttribute('hostname');
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

  // load_balance_servers - computed: true, optional: false, required: false
  public get loadBalanceServers() {
    return this.getNumberAttribute('load_balance_servers');
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getStringAttribute('port');
  }

  // service_account_id - computed: true, optional: false, required: false
  public get serviceAccountId() {
    return this.getStringAttribute('service_account_id');
  }

  // srv_ovrd - computed: true, optional: false, required: false
  public get srvOvrd() {
    return this.getStringAttribute('srv_ovrd');
  }

  // srv_ovrd_list - computed: true, optional: false, required: false
  private _srvOvrdList = new DataFortiswitchSystemFortiguardSrvOvrdListStructList(this, "srv_ovrd_list", false);
  public get srvOvrdList() {
    return this._srvOvrdList;
  }

  // webfilter_cache - computed: true, optional: false, required: false
  public get webfilterCache() {
    return this.getStringAttribute('webfilter_cache');
  }

  // webfilter_cache_ttl - computed: true, optional: false, required: false
  public get webfilterCacheTtl() {
    return this.getNumberAttribute('webfilter_cache_ttl');
  }

  // webfilter_expiration - computed: true, optional: false, required: false
  public get webfilterExpiration() {
    return this.getNumberAttribute('webfilter_expiration');
  }

  // webfilter_force_off - computed: true, optional: false, required: false
  public get webfilterForceOff() {
    return this.getStringAttribute('webfilter_force_off');
  }

  // webfilter_license - computed: true, optional: false, required: false
  public get webfilterLicense() {
    return this.getNumberAttribute('webfilter_license');
  }

  // webfilter_timeout - computed: true, optional: false, required: false
  public get webfilterTimeout() {
    return this.getNumberAttribute('webfilter_timeout');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
