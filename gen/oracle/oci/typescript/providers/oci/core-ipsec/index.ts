// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreIpsecConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#compartment_id CoreIpsec#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#cpe_id CoreIpsec#cpe_id}
  */
  readonly cpeId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#cpe_local_identifier CoreIpsec#cpe_local_identifier}
  */
  readonly cpeLocalIdentifier?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#cpe_local_identifier_type CoreIpsec#cpe_local_identifier_type}
  */
  readonly cpeLocalIdentifierType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#defined_tags CoreIpsec#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#display_name CoreIpsec#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#drg_id CoreIpsec#drg_id}
  */
  readonly drgId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#freeform_tags CoreIpsec#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#id CoreIpsec#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#static_routes CoreIpsec#static_routes}
  */
  readonly staticRoutes: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#timeouts CoreIpsec#timeouts}
  */
  readonly timeouts?: CoreIpsecTimeouts;
  /**
  * tunnel_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#tunnel_configuration CoreIpsec#tunnel_configuration}
  */
  readonly tunnelConfiguration?: CoreIpsecTunnelConfiguration[] | cdktf.IResolvable;
}
export interface CoreIpsecTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#create CoreIpsec#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#delete CoreIpsec#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#update CoreIpsec#update}
  */
  readonly update?: string;
}

export function coreIpsecTimeoutsToTerraform(struct?: CoreIpsecTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function coreIpsecTimeoutsToHclTerraform(struct?: CoreIpsecTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreIpsecTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreIpsecTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreIpsecTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface CoreIpsecTunnelConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#associated_virtual_circuits CoreIpsec#associated_virtual_circuits}
  */
  readonly associatedVirtualCircuits?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#drg_route_table_id CoreIpsec#drg_route_table_id}
  */
  readonly drgRouteTableId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#oracle_tunnel_ip CoreIpsec#oracle_tunnel_ip}
  */
  readonly oracleTunnelIp?: string;
}

export function coreIpsecTunnelConfigurationToTerraform(struct?: CoreIpsecTunnelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    associated_virtual_circuits: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.associatedVirtualCircuits),
    drg_route_table_id: cdktf.stringToTerraform(struct!.drgRouteTableId),
    oracle_tunnel_ip: cdktf.stringToTerraform(struct!.oracleTunnelIp),
  }
}


export function coreIpsecTunnelConfigurationToHclTerraform(struct?: CoreIpsecTunnelConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    associated_virtual_circuits: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.associatedVirtualCircuits),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    drg_route_table_id: {
      value: cdktf.stringToHclTerraform(struct!.drgRouteTableId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    oracle_tunnel_ip: {
      value: cdktf.stringToHclTerraform(struct!.oracleTunnelIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CoreIpsecTunnelConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CoreIpsecTunnelConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._associatedVirtualCircuits !== undefined) {
      hasAnyValues = true;
      internalValueResult.associatedVirtualCircuits = this._associatedVirtualCircuits;
    }
    if (this._drgRouteTableId !== undefined) {
      hasAnyValues = true;
      internalValueResult.drgRouteTableId = this._drgRouteTableId;
    }
    if (this._oracleTunnelIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.oracleTunnelIp = this._oracleTunnelIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CoreIpsecTunnelConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._associatedVirtualCircuits = undefined;
      this._drgRouteTableId = undefined;
      this._oracleTunnelIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._associatedVirtualCircuits = value.associatedVirtualCircuits;
      this._drgRouteTableId = value.drgRouteTableId;
      this._oracleTunnelIp = value.oracleTunnelIp;
    }
  }

  // associated_virtual_circuits - computed: true, optional: true, required: false
  private _associatedVirtualCircuits?: string[]; 
  public get associatedVirtualCircuits() {
    return this.getListAttribute('associated_virtual_circuits');
  }
  public set associatedVirtualCircuits(value: string[]) {
    this._associatedVirtualCircuits = value;
  }
  public resetAssociatedVirtualCircuits() {
    this._associatedVirtualCircuits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get associatedVirtualCircuitsInput() {
    return this._associatedVirtualCircuits;
  }

  // drg_route_table_id - computed: true, optional: true, required: false
  private _drgRouteTableId?: string; 
  public get drgRouteTableId() {
    return this.getStringAttribute('drg_route_table_id');
  }
  public set drgRouteTableId(value: string) {
    this._drgRouteTableId = value;
  }
  public resetDrgRouteTableId() {
    this._drgRouteTableId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get drgRouteTableIdInput() {
    return this._drgRouteTableId;
  }

  // oracle_tunnel_ip - computed: true, optional: true, required: false
  private _oracleTunnelIp?: string; 
  public get oracleTunnelIp() {
    return this.getStringAttribute('oracle_tunnel_ip');
  }
  public set oracleTunnelIp(value: string) {
    this._oracleTunnelIp = value;
  }
  public resetOracleTunnelIp() {
    this._oracleTunnelIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oracleTunnelIpInput() {
    return this._oracleTunnelIp;
  }
}

export class CoreIpsecTunnelConfigurationList extends cdktf.ComplexList {
  public internalValue? : CoreIpsecTunnelConfiguration[] | cdktf.IResolvable

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
  public get(index: number): CoreIpsecTunnelConfigurationOutputReference {
    return new CoreIpsecTunnelConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec oci_core_ipsec}
*/
export class CoreIpsec extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_ipsec";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreIpsec resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreIpsec to import
  * @param importFromId The id of the existing CoreIpsec that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreIpsec to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_ipsec", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/core_ipsec oci_core_ipsec} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreIpsecConfig
  */
  public constructor(scope: Construct, id: string, config: CoreIpsecConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_ipsec',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._compartmentId = config.compartmentId;
    this._cpeId = config.cpeId;
    this._cpeLocalIdentifier = config.cpeLocalIdentifier;
    this._cpeLocalIdentifierType = config.cpeLocalIdentifierType;
    this._definedTags = config.definedTags;
    this._displayName = config.displayName;
    this._drgId = config.drgId;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._staticRoutes = config.staticRoutes;
    this._timeouts.internalValue = config.timeouts;
    this._tunnelConfiguration.internalValue = config.tunnelConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // cpe_id - computed: false, optional: false, required: true
  private _cpeId?: string; 
  public get cpeId() {
    return this.getStringAttribute('cpe_id');
  }
  public set cpeId(value: string) {
    this._cpeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cpeIdInput() {
    return this._cpeId;
  }

  // cpe_local_identifier - computed: true, optional: true, required: false
  private _cpeLocalIdentifier?: string; 
  public get cpeLocalIdentifier() {
    return this.getStringAttribute('cpe_local_identifier');
  }
  public set cpeLocalIdentifier(value: string) {
    this._cpeLocalIdentifier = value;
  }
  public resetCpeLocalIdentifier() {
    this._cpeLocalIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpeLocalIdentifierInput() {
    return this._cpeLocalIdentifier;
  }

  // cpe_local_identifier_type - computed: true, optional: true, required: false
  private _cpeLocalIdentifierType?: string; 
  public get cpeLocalIdentifierType() {
    return this.getStringAttribute('cpe_local_identifier_type');
  }
  public set cpeLocalIdentifierType(value: string) {
    this._cpeLocalIdentifierType = value;
  }
  public resetCpeLocalIdentifierType() {
    this._cpeLocalIdentifierType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpeLocalIdentifierTypeInput() {
    return this._cpeLocalIdentifierType;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
  }

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

  // drg_id - computed: false, optional: false, required: true
  private _drgId?: string; 
  public get drgId() {
    return this.getStringAttribute('drg_id');
  }
  public set drgId(value: string) {
    this._drgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drgIdInput() {
    return this._drgId;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // static_routes - computed: false, optional: false, required: true
  private _staticRoutes?: string[]; 
  public get staticRoutes() {
    return this.getListAttribute('static_routes');
  }
  public set staticRoutes(value: string[]) {
    this._staticRoutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRoutesInput() {
    return this._staticRoutes;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // transport_type - computed: true, optional: false, required: false
  public get transportType() {
    return this.getStringAttribute('transport_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreIpsecTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreIpsecTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // tunnel_configuration - computed: false, optional: true, required: false
  private _tunnelConfiguration = new CoreIpsecTunnelConfigurationList(this, "tunnel_configuration", false);
  public get tunnelConfiguration() {
    return this._tunnelConfiguration;
  }
  public putTunnelConfiguration(value: CoreIpsecTunnelConfiguration[] | cdktf.IResolvable) {
    this._tunnelConfiguration.internalValue = value;
  }
  public resetTunnelConfiguration() {
    this._tunnelConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelConfigurationInput() {
    return this._tunnelConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      cpe_id: cdktf.stringToTerraform(this._cpeId),
      cpe_local_identifier: cdktf.stringToTerraform(this._cpeLocalIdentifier),
      cpe_local_identifier_type: cdktf.stringToTerraform(this._cpeLocalIdentifierType),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      display_name: cdktf.stringToTerraform(this._displayName),
      drg_id: cdktf.stringToTerraform(this._drgId),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      static_routes: cdktf.listMapper(cdktf.stringToTerraform, false)(this._staticRoutes),
      timeouts: coreIpsecTimeoutsToTerraform(this._timeouts.internalValue),
      tunnel_configuration: cdktf.listMapper(coreIpsecTunnelConfigurationToTerraform, true)(this._tunnelConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpe_id: {
        value: cdktf.stringToHclTerraform(this._cpeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpe_local_identifier: {
        value: cdktf.stringToHclTerraform(this._cpeLocalIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cpe_local_identifier_type: {
        value: cdktf.stringToHclTerraform(this._cpeLocalIdentifierType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drg_id: {
        value: cdktf.stringToHclTerraform(this._drgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      static_routes: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._staticRoutes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      timeouts: {
        value: coreIpsecTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreIpsecTimeouts",
      },
      tunnel_configuration: {
        value: cdktf.listMapperHcl(coreIpsecTunnelConfigurationToHclTerraform, true)(this._tunnelConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CoreIpsecTunnelConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
