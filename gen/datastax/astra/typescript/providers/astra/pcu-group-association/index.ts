// https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group_association
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PcuGroupAssociationConfig extends cdktf.TerraformMetaArguments {
  /**
  * The datacenter to associate with the PCU group. Note that this is a datacenter ID, not a database ID. The `provider::astra::resolve_datacenter` function may be used to easily obtain the datacenter ID from a database ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group_association#datacenter_id PcuGroupAssociation#datacenter_id}
  */
  readonly datacenterId: string;
  /**
  * The PCU group to associate the datacenter with. This may be changed to transfer the association to another PCU group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group_association#pcu_group_id PcuGroupAssociation#pcu_group_id}
  */
  readonly pcuGroupId: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group_association#timeouts PcuGroupAssociation#timeouts}
  */
  readonly timeouts?: PcuGroupAssociationTimeouts;
}
export interface PcuGroupAssociationTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group_association#create PcuGroupAssociation#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group_association#update PcuGroupAssociation#update}
  */
  readonly update?: string;
}

export function pcuGroupAssociationTimeoutsToTerraform(struct?: PcuGroupAssociationTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function pcuGroupAssociationTimeoutsToHclTerraform(struct?: PcuGroupAssociationTimeouts | cdktf.IResolvable): any {
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

export class PcuGroupAssociationTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcuGroupAssociationTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PcuGroupAssociationTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
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
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group_association astra_pcu_group_association}
*/
export class PcuGroupAssociation extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_pcu_group_association";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PcuGroupAssociation resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PcuGroupAssociation to import
  * @param importFromId The id of the existing PcuGroupAssociation that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group_association#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PcuGroupAssociation to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_pcu_group_association", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group_association astra_pcu_group_association} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PcuGroupAssociationConfig
  */
  public constructor(scope: Construct, id: string, config: PcuGroupAssociationConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_pcu_group_association',
      terraformGeneratorMetadata: {
        providerName: 'astra',
        providerVersion: '2.4.0',
        providerVersionConstraint: '2.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._datacenterId = config.datacenterId;
    this._pcuGroupId = config.pcuGroupId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // datacenter_id - computed: false, optional: false, required: true
  private _datacenterId?: string; 
  public get datacenterId() {
    return this.getStringAttribute('datacenter_id');
  }
  public set datacenterId(value: string) {
    this._datacenterId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get datacenterIdInput() {
    return this._datacenterId;
  }

  // pcu_group_id - computed: false, optional: false, required: true
  private _pcuGroupId?: string; 
  public get pcuGroupId() {
    return this.getStringAttribute('pcu_group_id');
  }
  public set pcuGroupId(value: string) {
    this._pcuGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pcuGroupIdInput() {
    return this._pcuGroupId;
  }

  // provisioning_status - computed: true, optional: false, required: false
  public get provisioningStatus() {
    return this.getStringAttribute('provisioning_status');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PcuGroupAssociationTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PcuGroupAssociationTimeouts) {
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
      datacenter_id: cdktf.stringToTerraform(this._datacenterId),
      pcu_group_id: cdktf.stringToTerraform(this._pcuGroupId),
      timeouts: pcuGroupAssociationTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      datacenter_id: {
        value: cdktf.stringToHclTerraform(this._datacenterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pcu_group_id: {
        value: cdktf.stringToHclTerraform(this._pcuGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: pcuGroupAssociationTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PcuGroupAssociationTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
