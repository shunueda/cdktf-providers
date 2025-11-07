// https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CoreDrgRouteTableRouteRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#destination CoreDrgRouteTableRouteRule#destination}
  */
  readonly destination: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#destination_type CoreDrgRouteTableRouteRule#destination_type}
  */
  readonly destinationType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#drg_route_table_id CoreDrgRouteTableRouteRule#drg_route_table_id}
  */
  readonly drgRouteTableId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#id CoreDrgRouteTableRouteRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#next_hop_drg_attachment_id CoreDrgRouteTableRouteRule#next_hop_drg_attachment_id}
  */
  readonly nextHopDrgAttachmentId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#timeouts CoreDrgRouteTableRouteRule#timeouts}
  */
  readonly timeouts?: CoreDrgRouteTableRouteRuleTimeouts;
}
export interface CoreDrgRouteTableRouteRuleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#create CoreDrgRouteTableRouteRule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#delete CoreDrgRouteTableRouteRule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#update CoreDrgRouteTableRouteRule#update}
  */
  readonly update?: string;
}

export function coreDrgRouteTableRouteRuleTimeoutsToTerraform(struct?: CoreDrgRouteTableRouteRuleTimeouts | cdktf.IResolvable): any {
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


export function coreDrgRouteTableRouteRuleTimeoutsToHclTerraform(struct?: CoreDrgRouteTableRouteRuleTimeouts | cdktf.IResolvable): any {
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

export class CoreDrgRouteTableRouteRuleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CoreDrgRouteTableRouteRuleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: CoreDrgRouteTableRouteRuleTimeouts | cdktf.IResolvable | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule oci_core_drg_route_table_route_rule}
*/
export class CoreDrgRouteTableRouteRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_core_drg_route_table_route_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CoreDrgRouteTableRouteRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CoreDrgRouteTableRouteRule to import
  * @param importFromId The id of the existing CoreDrgRouteTableRouteRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CoreDrgRouteTableRouteRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_core_drg_route_table_route_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.25.0/docs/resources/core_drg_route_table_route_rule oci_core_drg_route_table_route_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CoreDrgRouteTableRouteRuleConfig
  */
  public constructor(scope: Construct, id: string, config: CoreDrgRouteTableRouteRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_core_drg_route_table_route_rule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.25.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._destination = config.destination;
    this._destinationType = config.destinationType;
    this._drgRouteTableId = config.drgRouteTableId;
    this._id = config.id;
    this._nextHopDrgAttachmentId = config.nextHopDrgAttachmentId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // attributes - computed: true, optional: false, required: false
  private _attributes = new cdktf.StringMap(this, "attributes");
  public get attributes() {
    return this._attributes;
  }

  // destination - computed: false, optional: false, required: true
  private _destination?: string; 
  public get destination() {
    return this.getStringAttribute('destination');
  }
  public set destination(value: string) {
    this._destination = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination;
  }

  // destination_type - computed: false, optional: false, required: true
  private _destinationType?: string; 
  public get destinationType() {
    return this.getStringAttribute('destination_type');
  }
  public set destinationType(value: string) {
    this._destinationType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationTypeInput() {
    return this._destinationType;
  }

  // drg_route_table_id - computed: false, optional: false, required: true
  private _drgRouteTableId?: string; 
  public get drgRouteTableId() {
    return this.getStringAttribute('drg_route_table_id');
  }
  public set drgRouteTableId(value: string) {
    this._drgRouteTableId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get drgRouteTableIdInput() {
    return this._drgRouteTableId;
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

  // is_blackhole - computed: true, optional: false, required: false
  public get isBlackhole() {
    return this.getBooleanAttribute('is_blackhole');
  }

  // is_conflict - computed: true, optional: false, required: false
  public get isConflict() {
    return this.getBooleanAttribute('is_conflict');
  }

  // next_hop_drg_attachment_id - computed: false, optional: false, required: true
  private _nextHopDrgAttachmentId?: string; 
  public get nextHopDrgAttachmentId() {
    return this.getStringAttribute('next_hop_drg_attachment_id');
  }
  public set nextHopDrgAttachmentId(value: string) {
    this._nextHopDrgAttachmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nextHopDrgAttachmentIdInput() {
    return this._nextHopDrgAttachmentId;
  }

  // route_provenance - computed: true, optional: false, required: false
  public get routeProvenance() {
    return this.getStringAttribute('route_provenance');
  }

  // route_type - computed: true, optional: false, required: false
  public get routeType() {
    return this.getStringAttribute('route_type');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CoreDrgRouteTableRouteRuleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CoreDrgRouteTableRouteRuleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      destination: cdktf.stringToTerraform(this._destination),
      destination_type: cdktf.stringToTerraform(this._destinationType),
      drg_route_table_id: cdktf.stringToTerraform(this._drgRouteTableId),
      id: cdktf.stringToTerraform(this._id),
      next_hop_drg_attachment_id: cdktf.stringToTerraform(this._nextHopDrgAttachmentId),
      timeouts: coreDrgRouteTableRouteRuleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      destination: {
        value: cdktf.stringToHclTerraform(this._destination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      destination_type: {
        value: cdktf.stringToHclTerraform(this._destinationType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      drg_route_table_id: {
        value: cdktf.stringToHclTerraform(this._drgRouteTableId),
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
      next_hop_drg_attachment_id: {
        value: cdktf.stringToHclTerraform(this._nextHopDrgAttachmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: coreDrgRouteTableRouteRuleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CoreDrgRouteTableRouteRuleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
