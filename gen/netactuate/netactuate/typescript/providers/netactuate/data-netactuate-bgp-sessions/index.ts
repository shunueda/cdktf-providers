// https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/data-sources/bgp_sessions
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetactuateBgpSessionsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/data-sources/bgp_sessions#id DataNetactuateBgpSessions#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/data-sources/bgp_sessions#mbpkgid DataNetactuateBgpSessions#mbpkgid}
  */
  readonly mbpkgid: number;
}
export interface DataNetactuateBgpSessionsSessions {
}

export function dataNetactuateBgpSessionsSessionsToTerraform(struct?: DataNetactuateBgpSessionsSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataNetactuateBgpSessionsSessionsToHclTerraform(struct?: DataNetactuateBgpSessionsSessions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataNetactuateBgpSessionsSessionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataNetactuateBgpSessionsSessions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataNetactuateBgpSessionsSessions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // config_status - computed: true, optional: false, required: false
  public get configStatus() {
    return this.getStringAttribute('config_status');
  }

  // customer_asn - computed: true, optional: false, required: false
  public get customerAsn() {
    return this.getNumberAttribute('customer_asn');
  }

  // customer_peer_ip - computed: true, optional: false, required: false
  public get customerPeerIp() {
    return this.getStringAttribute('customer_peer_ip');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // group_name - computed: true, optional: false, required: false
  public get groupName() {
    return this.getStringAttribute('group_name');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
  }

  // last_update - computed: true, optional: false, required: false
  public get lastUpdate() {
    return this.getStringAttribute('last_update');
  }

  // location_name - computed: true, optional: false, required: false
  public get locationName() {
    return this.getStringAttribute('location_name');
  }

  // locked - computed: true, optional: false, required: false
  public get locked() {
    return this.getBooleanAttribute('locked');
  }

  // mb_id - computed: true, optional: false, required: false
  public get mbId() {
    return this.getNumberAttribute('mb_id');
  }

  // provider_asn - computed: true, optional: false, required: false
  public get providerAsn() {
    return this.getNumberAttribute('provider_asn');
  }

  // provider_ip_type - computed: true, optional: false, required: false
  public get providerIpType() {
    return this.getStringAttribute('provider_ip_type');
  }

  // provider_peer_ip - computed: true, optional: false, required: false
  public get providerPeerIp() {
    return this.getStringAttribute('provider_peer_ip');
  }

  // routes_received - computed: true, optional: false, required: false
  public get routesReceived() {
    return this.getStringAttribute('routes_received');
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }
}

export class DataNetactuateBgpSessionsSessionsList extends cdktf.ComplexList {

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
  public get(index: number): DataNetactuateBgpSessionsSessionsOutputReference {
    return new DataNetactuateBgpSessionsSessionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/data-sources/bgp_sessions netactuate_bgp_sessions}
*/
export class DataNetactuateBgpSessions extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netactuate_bgp_sessions";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetactuateBgpSessions resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetactuateBgpSessions to import
  * @param importFromId The id of the existing DataNetactuateBgpSessions that should be imported. Refer to the {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/data-sources/bgp_sessions#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetactuateBgpSessions to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netactuate_bgp_sessions", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netactuate/netactuate/0.2.4/docs/data-sources/bgp_sessions netactuate_bgp_sessions} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetactuateBgpSessionsConfig
  */
  public constructor(scope: Construct, id: string, config: DataNetactuateBgpSessionsConfig) {
    super(scope, id, {
      terraformResourceType: 'netactuate_bgp_sessions',
      terraformGeneratorMetadata: {
        providerName: 'netactuate',
        providerVersion: '0.2.4',
        providerVersionConstraint: '0.2.4'
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
    this._mbpkgid = config.mbpkgid;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // mbpkgid - computed: false, optional: false, required: true
  private _mbpkgid?: number; 
  public get mbpkgid() {
    return this.getNumberAttribute('mbpkgid');
  }
  public set mbpkgid(value: number) {
    this._mbpkgid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mbpkgidInput() {
    return this._mbpkgid;
  }

  // sessions - computed: true, optional: false, required: false
  private _sessions = new DataNetactuateBgpSessionsSessionsList(this, "sessions", false);
  public get sessions() {
    return this._sessions;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      mbpkgid: cdktf.numberToTerraform(this._mbpkgid),
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
      mbpkgid: {
        value: cdktf.numberToHclTerraform(this._mbpkgid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
