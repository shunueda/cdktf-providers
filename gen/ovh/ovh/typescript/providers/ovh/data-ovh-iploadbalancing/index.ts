// https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOvhIploadbalancingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#display_name DataOvhIploadbalancing#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#id DataOvhIploadbalancing#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#ip_loadbalancing DataOvhIploadbalancing#ip_loadbalancing}
  */
  readonly ipLoadbalancing?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#ipv4 DataOvhIploadbalancing#ipv4}
  */
  readonly ipv4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#ipv6 DataOvhIploadbalancing#ipv6}
  */
  readonly ipv6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#offer DataOvhIploadbalancing#offer}
  */
  readonly offer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#service_name DataOvhIploadbalancing#service_name}
  */
  readonly serviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#ssl_configuration DataOvhIploadbalancing#ssl_configuration}
  */
  readonly sslConfiguration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#state DataOvhIploadbalancing#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#vrack_eligibility DataOvhIploadbalancing#vrack_eligibility}
  */
  readonly vrackEligibility?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#vrack_name DataOvhIploadbalancing#vrack_name}
  */
  readonly vrackName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#zone DataOvhIploadbalancing#zone}
  */
  readonly zone?: string[];
}
export interface DataOvhIploadbalancingOrderableZone {
}

export function dataOvhIploadbalancingOrderableZoneToTerraform(struct?: DataOvhIploadbalancingOrderableZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOvhIploadbalancingOrderableZoneToHclTerraform(struct?: DataOvhIploadbalancingOrderableZone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOvhIploadbalancingOrderableZoneOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOvhIploadbalancingOrderableZone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOvhIploadbalancingOrderableZone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // plan_code - computed: true, optional: false, required: false
  public get planCode() {
    return this.getStringAttribute('plan_code');
  }
}

export class DataOvhIploadbalancingOrderableZoneList extends cdktf.ComplexList {

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
  public get(index: number): DataOvhIploadbalancingOrderableZoneOutputReference {
    return new DataOvhIploadbalancingOrderableZoneOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing ovh_iploadbalancing}
*/
export class DataOvhIploadbalancing extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ovh_iploadbalancing";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOvhIploadbalancing resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOvhIploadbalancing to import
  * @param importFromId The id of the existing DataOvhIploadbalancing that should be imported. Refer to the {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOvhIploadbalancing to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ovh_iploadbalancing", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ovh/ovh/2.9.0/docs/data-sources/iploadbalancing ovh_iploadbalancing} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOvhIploadbalancingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataOvhIploadbalancingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ovh_iploadbalancing',
      terraformGeneratorMetadata: {
        providerName: 'ovh',
        providerVersion: '2.9.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._displayName = config.displayName;
    this._id = config.id;
    this._ipLoadbalancing = config.ipLoadbalancing;
    this._ipv4 = config.ipv4;
    this._ipv6 = config.ipv6;
    this._offer = config.offer;
    this._serviceName = config.serviceName;
    this._sslConfiguration = config.sslConfiguration;
    this._state = config.state;
    this._vrackEligibility = config.vrackEligibility;
    this._vrackName = config.vrackName;
    this._zone = config.zone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
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

  // ip_loadbalancing - computed: true, optional: true, required: false
  private _ipLoadbalancing?: string; 
  public get ipLoadbalancing() {
    return this.getStringAttribute('ip_loadbalancing');
  }
  public set ipLoadbalancing(value: string) {
    this._ipLoadbalancing = value;
  }
  public resetIpLoadbalancing() {
    this._ipLoadbalancing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipLoadbalancingInput() {
    return this._ipLoadbalancing;
  }

  // ipv4 - computed: true, optional: true, required: false
  private _ipv4?: string; 
  public get ipv4() {
    return this.getStringAttribute('ipv4');
  }
  public set ipv4(value: string) {
    this._ipv4 = value;
  }
  public resetIpv4() {
    this._ipv4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4Input() {
    return this._ipv4;
  }

  // ipv6 - computed: true, optional: true, required: false
  private _ipv6?: string; 
  public get ipv6() {
    return this.getStringAttribute('ipv6');
  }
  public set ipv6(value: string) {
    this._ipv6 = value;
  }
  public resetIpv6() {
    this._ipv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6Input() {
    return this._ipv6;
  }

  // metrics_token - computed: true, optional: false, required: false
  public get metricsToken() {
    return this.getStringAttribute('metrics_token');
  }

  // offer - computed: true, optional: true, required: false
  private _offer?: string; 
  public get offer() {
    return this.getStringAttribute('offer');
  }
  public set offer(value: string) {
    this._offer = value;
  }
  public resetOffer() {
    this._offer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offerInput() {
    return this._offer;
  }

  // orderable_zone - computed: true, optional: false, required: false
  private _orderableZone = new DataOvhIploadbalancingOrderableZoneList(this, "orderable_zone", true);
  public get orderableZone() {
    return this._orderableZone;
  }

  // service_name - computed: true, optional: true, required: false
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  public resetServiceName() {
    this._serviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // ssl_configuration - computed: true, optional: true, required: false
  private _sslConfiguration?: string; 
  public get sslConfiguration() {
    return this.getStringAttribute('ssl_configuration');
  }
  public set sslConfiguration(value: string) {
    this._sslConfiguration = value;
  }
  public resetSslConfiguration() {
    this._sslConfiguration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigurationInput() {
    return this._sslConfiguration;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // urn - computed: true, optional: false, required: false
  public get urn() {
    return this.getStringAttribute('urn');
  }

  // vrack_eligibility - computed: true, optional: true, required: false
  private _vrackEligibility?: boolean | cdktf.IResolvable; 
  public get vrackEligibility() {
    return this.getBooleanAttribute('vrack_eligibility');
  }
  public set vrackEligibility(value: boolean | cdktf.IResolvable) {
    this._vrackEligibility = value;
  }
  public resetVrackEligibility() {
    this._vrackEligibility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrackEligibilityInput() {
    return this._vrackEligibility;
  }

  // vrack_name - computed: true, optional: true, required: false
  private _vrackName?: string; 
  public get vrackName() {
    return this.getStringAttribute('vrack_name');
  }
  public set vrackName(value: string) {
    this._vrackName = value;
  }
  public resetVrackName() {
    this._vrackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrackNameInput() {
    return this._vrackName;
  }

  // zone - computed: true, optional: true, required: false
  private _zone?: string[]; 
  public get zone() {
    return cdktf.Fn.tolist(this.getListAttribute('zone'));
  }
  public set zone(value: string[]) {
    this._zone = value;
  }
  public resetZone() {
    this._zone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneInput() {
    return this._zone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      display_name: cdktf.stringToTerraform(this._displayName),
      id: cdktf.stringToTerraform(this._id),
      ip_loadbalancing: cdktf.stringToTerraform(this._ipLoadbalancing),
      ipv4: cdktf.stringToTerraform(this._ipv4),
      ipv6: cdktf.stringToTerraform(this._ipv6),
      offer: cdktf.stringToTerraform(this._offer),
      service_name: cdktf.stringToTerraform(this._serviceName),
      ssl_configuration: cdktf.stringToTerraform(this._sslConfiguration),
      state: cdktf.stringToTerraform(this._state),
      vrack_eligibility: cdktf.booleanToTerraform(this._vrackEligibility),
      vrack_name: cdktf.stringToTerraform(this._vrackName),
      zone: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
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
      ip_loadbalancing: {
        value: cdktf.stringToHclTerraform(this._ipLoadbalancing),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4: {
        value: cdktf.stringToHclTerraform(this._ipv4),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv6: {
        value: cdktf.stringToHclTerraform(this._ipv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offer: {
        value: cdktf.stringToHclTerraform(this._offer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_configuration: {
        value: cdktf.stringToHclTerraform(this._sslConfiguration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrack_eligibility: {
        value: cdktf.booleanToHclTerraform(this._vrackEligibility),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vrack_name: {
        value: cdktf.stringToHclTerraform(this._vrackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zone),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
