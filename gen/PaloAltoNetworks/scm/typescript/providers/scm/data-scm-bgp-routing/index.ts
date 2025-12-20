// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_routing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmBgpRoutingConfig extends cdktf.TerraformMetaArguments {
}
export interface DataScmBgpRoutingRoutingPreferenceDefault {
}

export function dataScmBgpRoutingRoutingPreferenceDefaultToTerraform(struct?: DataScmBgpRoutingRoutingPreferenceDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRoutingRoutingPreferenceDefaultToHclTerraform(struct?: DataScmBgpRoutingRoutingPreferenceDefault): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRoutingRoutingPreferenceDefaultOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRoutingRoutingPreferenceDefault | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRoutingRoutingPreferenceDefault | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpRoutingRoutingPreferenceHotPotatoRouting {
}

export function dataScmBgpRoutingRoutingPreferenceHotPotatoRoutingToTerraform(struct?: DataScmBgpRoutingRoutingPreferenceHotPotatoRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRoutingRoutingPreferenceHotPotatoRoutingToHclTerraform(struct?: DataScmBgpRoutingRoutingPreferenceHotPotatoRouting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRoutingRoutingPreferenceHotPotatoRoutingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRoutingRoutingPreferenceHotPotatoRouting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRoutingRoutingPreferenceHotPotatoRouting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }
}
export interface DataScmBgpRoutingRoutingPreference {
}

export function dataScmBgpRoutingRoutingPreferenceToTerraform(struct?: DataScmBgpRoutingRoutingPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmBgpRoutingRoutingPreferenceToHclTerraform(struct?: DataScmBgpRoutingRoutingPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmBgpRoutingRoutingPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmBgpRoutingRoutingPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmBgpRoutingRoutingPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default - computed: true, optional: false, required: false
  private _default = new DataScmBgpRoutingRoutingPreferenceDefaultOutputReference(this, "default");
  public get default() {
    return this._default;
  }

  // hot_potato_routing - computed: true, optional: false, required: false
  private _hotPotatoRouting = new DataScmBgpRoutingRoutingPreferenceHotPotatoRoutingOutputReference(this, "hot_potato_routing");
  public get hotPotatoRouting() {
    return this._hotPotatoRouting;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_routing scm_bgp_routing}
*/
export class DataScmBgpRouting extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_bgp_routing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmBgpRouting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmBgpRouting to import
  * @param importFromId The id of the existing DataScmBgpRouting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_routing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmBgpRouting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_bgp_routing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/data-sources/bgp_routing scm_bgp_routing} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmBgpRoutingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataScmBgpRoutingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_bgp_routing',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // accept_route_over_sc - computed: true, optional: false, required: false
  public get acceptRouteOverSc() {
    return this.getBooleanAttribute('accept_route_over_sc');
  }

  // add_host_route_to_ike_peer - computed: true, optional: false, required: false
  public get addHostRouteToIkePeer() {
    return this.getBooleanAttribute('add_host_route_to_ike_peer');
  }

  // backbone_routing - computed: true, optional: false, required: false
  public get backboneRouting() {
    return this.getStringAttribute('backbone_routing');
  }

  // outbound_routes_for_services - computed: true, optional: false, required: false
  public get outboundRoutesForServices() {
    return this.getListAttribute('outbound_routes_for_services');
  }

  // routing_preference - computed: true, optional: false, required: false
  private _routingPreference = new DataScmBgpRoutingRoutingPreferenceOutputReference(this, "routing_preference");
  public get routingPreference() {
    return this._routingPreference;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // withdraw_static_route - computed: true, optional: false, required: false
  public get withdrawStaticRoute() {
    return this.getBooleanAttribute('withdraw_static_route');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
