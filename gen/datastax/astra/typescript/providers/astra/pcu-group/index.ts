// https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PcuGroupConfig extends cdktf.TerraformMetaArguments {
  /**
  * The instance type/cache type for the PCU group. Defaults to 'STANDARD'. Changing this value requires replacement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#cache_type PcuGroup#cache_type}
  */
  readonly cacheType?: string;
  /**
  * The cloud provider where the PCU group will be provisioned (e.g., AWS, GCP, AZURE). This cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#cloud_provider PcuGroup#cloud_provider}
  */
  readonly cloudProvider: string;
  /**
  * When enabled, prevents accidental deletion of the PCU group. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#deletion_protection PcuGroup#deletion_protection}
  */
  readonly deletionProtection?: boolean | cdktf.IResolvable;
  /**
  * A user-defined description for the PCU group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#description PcuGroup#description}
  */
  readonly description?: string;
  /**
  * The maximum capacity units the PCU group may scale to. Must be at least 1 and greater than or equal to min_capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#max_capacity PcuGroup#max_capacity}
  */
  readonly maxCapacity: number;
  /**
  * The minimum capacity units the PCU must be scaled to. Must be at least 1 and greater than or equal to reserved_capacity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#min_capacity PcuGroup#min_capacity}
  */
  readonly minCapacity: number;
  /**
  * When set to true, parks the PCU group and any associated databases, reducing costs. When set to false, unparks the group. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#park PcuGroup#park}
  */
  readonly park?: boolean | cdktf.IResolvable;
  /**
  * The provisioning type for the PCU group (e.g., SHARED, DEDICATED). Defaults to 'SHARED'. Changing this value requires replacement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#provision_type PcuGroup#provision_type}
  */
  readonly provisionType?: string;
  /**
  * The cloud region where the PCU group will be provisioned. This cannot be changed after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#region PcuGroup#region}
  */
  readonly region: string;
  /**
  * The reserved (committed) capacity units for the PCU group. Must be at least 0. Changing this value when reserved_protection is enabled will result in an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#reserved_capacity PcuGroup#reserved_capacity}
  */
  readonly reservedCapacity?: number;
  /**
  * When enabled, prevents accidental reserved capacity unit increases. Defaults to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#reserved_protection PcuGroup#reserved_protection}
  */
  readonly reservedProtection?: boolean | cdktf.IResolvable;
  /**
  * The user-defined title/name of the PCU group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#title PcuGroup#title}
  */
  readonly title: string;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#timeouts PcuGroup#timeouts}
  */
  readonly timeouts?: PcuGroupTimeouts;
}
export interface PcuGroupTimeouts {
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#create PcuGroup#create}
  */
  readonly create?: string;
  /**
  * A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#update PcuGroup#update}
  */
  readonly update?: string;
}

export function pcuGroupTimeoutsToTerraform(struct?: PcuGroupTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function pcuGroupTimeoutsToHclTerraform(struct?: PcuGroupTimeouts | cdktf.IResolvable): any {
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

export class PcuGroupTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): PcuGroupTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: PcuGroupTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group astra_pcu_group}
*/
export class PcuGroup extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "astra_pcu_group";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PcuGroup resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PcuGroup to import
  * @param importFromId The id of the existing PcuGroup that should be imported. Refer to the {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PcuGroup to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "astra_pcu_group", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/datastax/astra/2.4.0/docs/resources/pcu_group astra_pcu_group} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PcuGroupConfig
  */
  public constructor(scope: Construct, id: string, config: PcuGroupConfig) {
    super(scope, id, {
      terraformResourceType: 'astra_pcu_group',
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
    this._cacheType = config.cacheType;
    this._cloudProvider = config.cloudProvider;
    this._deletionProtection = config.deletionProtection;
    this._description = config.description;
    this._maxCapacity = config.maxCapacity;
    this._minCapacity = config.minCapacity;
    this._park = config.park;
    this._provisionType = config.provisionType;
    this._region = config.region;
    this._reservedCapacity = config.reservedCapacity;
    this._reservedProtection = config.reservedProtection;
    this._title = config.title;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_type - computed: true, optional: true, required: false
  private _cacheType?: string; 
  public get cacheType() {
    return this.getStringAttribute('cache_type');
  }
  public set cacheType(value: string) {
    this._cacheType = value;
  }
  public resetCacheType() {
    this._cacheType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheTypeInput() {
    return this._cacheType;
  }

  // cloud_provider - computed: false, optional: false, required: true
  private _cloudProvider?: string; 
  public get cloudProvider() {
    return this.getStringAttribute('cloud_provider');
  }
  public set cloudProvider(value: string) {
    this._cloudProvider = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudProviderInput() {
    return this._cloudProvider;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // deletion_protection - computed: true, optional: true, required: false
  private _deletionProtection?: boolean | cdktf.IResolvable; 
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
  }
  public set deletionProtection(value: boolean | cdktf.IResolvable) {
    this._deletionProtection = value;
  }
  public resetDeletionProtection() {
    this._deletionProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionProtectionInput() {
    return this._deletionProtection;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // max_capacity - computed: false, optional: false, required: true
  private _maxCapacity?: number; 
  public get maxCapacity() {
    return this.getNumberAttribute('max_capacity');
  }
  public set maxCapacity(value: number) {
    this._maxCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCapacityInput() {
    return this._maxCapacity;
  }

  // min_capacity - computed: false, optional: false, required: true
  private _minCapacity?: number; 
  public get minCapacity() {
    return this.getNumberAttribute('min_capacity');
  }
  public set minCapacity(value: number) {
    this._minCapacity = value;
  }
  // Temporarily expose input value. Use with caution.
  public get minCapacityInput() {
    return this._minCapacity;
  }

  // org_id - computed: true, optional: false, required: false
  public get orgId() {
    return this.getStringAttribute('org_id');
  }

  // park - computed: true, optional: true, required: false
  private _park?: boolean | cdktf.IResolvable; 
  public get park() {
    return this.getBooleanAttribute('park');
  }
  public set park(value: boolean | cdktf.IResolvable) {
    this._park = value;
  }
  public resetPark() {
    this._park = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parkInput() {
    return this._park;
  }

  // provision_type - computed: true, optional: true, required: false
  private _provisionType?: string; 
  public get provisionType() {
    return this.getStringAttribute('provision_type');
  }
  public set provisionType(value: string) {
    this._provisionType = value;
  }
  public resetProvisionType() {
    this._provisionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionTypeInput() {
    return this._provisionType;
  }

  // region - computed: false, optional: false, required: true
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // reserved_capacity - computed: false, optional: true, required: false
  private _reservedCapacity?: number; 
  public get reservedCapacity() {
    return this.getNumberAttribute('reserved_capacity');
  }
  public set reservedCapacity(value: number) {
    this._reservedCapacity = value;
  }
  public resetReservedCapacity() {
    this._reservedCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedCapacityInput() {
    return this._reservedCapacity;
  }

  // reserved_protection - computed: true, optional: true, required: false
  private _reservedProtection?: boolean | cdktf.IResolvable; 
  public get reservedProtection() {
    return this.getBooleanAttribute('reserved_protection');
  }
  public set reservedProtection(value: boolean | cdktf.IResolvable) {
    this._reservedProtection = value;
  }
  public resetReservedProtection() {
    this._reservedProtection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reservedProtectionInput() {
    return this._reservedProtection;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // title - computed: false, optional: false, required: true
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: false, required: false
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new PcuGroupTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: PcuGroupTimeouts) {
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
      cache_type: cdktf.stringToTerraform(this._cacheType),
      cloud_provider: cdktf.stringToTerraform(this._cloudProvider),
      deletion_protection: cdktf.booleanToTerraform(this._deletionProtection),
      description: cdktf.stringToTerraform(this._description),
      max_capacity: cdktf.numberToTerraform(this._maxCapacity),
      min_capacity: cdktf.numberToTerraform(this._minCapacity),
      park: cdktf.booleanToTerraform(this._park),
      provision_type: cdktf.stringToTerraform(this._provisionType),
      region: cdktf.stringToTerraform(this._region),
      reserved_capacity: cdktf.numberToTerraform(this._reservedCapacity),
      reserved_protection: cdktf.booleanToTerraform(this._reservedProtection),
      title: cdktf.stringToTerraform(this._title),
      timeouts: pcuGroupTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_type: {
        value: cdktf.stringToHclTerraform(this._cacheType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_provider: {
        value: cdktf.stringToHclTerraform(this._cloudProvider),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_protection: {
        value: cdktf.booleanToHclTerraform(this._deletionProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_capacity: {
        value: cdktf.numberToHclTerraform(this._maxCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_capacity: {
        value: cdktf.numberToHclTerraform(this._minCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      park: {
        value: cdktf.booleanToHclTerraform(this._park),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      provision_type: {
        value: cdktf.stringToHclTerraform(this._provisionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      reserved_capacity: {
        value: cdktf.numberToHclTerraform(this._reservedCapacity),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      reserved_protection: {
        value: cdktf.booleanToHclTerraform(this._reservedProtection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      title: {
        value: cdktf.stringToHclTerraform(this._title),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeouts: {
        value: pcuGroupTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "PcuGroupTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
