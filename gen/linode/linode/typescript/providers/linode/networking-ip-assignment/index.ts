// https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/networking_ip_assignment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NetworkingIpAssignmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/networking_ip_assignment#assignments NetworkingIpAssignment#assignments}
  */
  readonly assignments?: NetworkingIpAssignmentAssignments[] | cdktf.IResolvable;
  /**
  * The region for the IP assignments.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/networking_ip_assignment#region NetworkingIpAssignment#region}
  */
  readonly region: string;
}
export interface NetworkingIpAssignmentAssignments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/networking_ip_assignment#address NetworkingIpAssignment#address}
  */
  readonly address?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/networking_ip_assignment#linode_id NetworkingIpAssignment#linode_id}
  */
  readonly linodeId?: number;
}

export function networkingIpAssignmentAssignmentsToTerraform(struct?: NetworkingIpAssignmentAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    address: cdktf.stringToTerraform(struct!.address),
    linode_id: cdktf.numberToTerraform(struct!.linodeId),
  }
}


export function networkingIpAssignmentAssignmentsToHclTerraform(struct?: NetworkingIpAssignmentAssignments | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    address: {
      value: cdktf.stringToHclTerraform(struct!.address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    linode_id: {
      value: cdktf.numberToHclTerraform(struct!.linodeId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NetworkingIpAssignmentAssignmentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NetworkingIpAssignmentAssignments | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._address !== undefined) {
      hasAnyValues = true;
      internalValueResult.address = this._address;
    }
    if (this._linodeId !== undefined) {
      hasAnyValues = true;
      internalValueResult.linodeId = this._linodeId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NetworkingIpAssignmentAssignments | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._address = undefined;
      this._linodeId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._address = value.address;
      this._linodeId = value.linodeId;
    }
  }

  // address - computed: false, optional: true, required: false
  private _address?: string; 
  public get address() {
    return this.getStringAttribute('address');
  }
  public set address(value: string) {
    this._address = value;
  }
  public resetAddress() {
    this._address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get addressInput() {
    return this._address;
  }

  // linode_id - computed: false, optional: true, required: false
  private _linodeId?: number; 
  public get linodeId() {
    return this.getNumberAttribute('linode_id');
  }
  public set linodeId(value: number) {
    this._linodeId = value;
  }
  public resetLinodeId() {
    this._linodeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linodeIdInput() {
    return this._linodeId;
  }
}

export class NetworkingIpAssignmentAssignmentsList extends cdktf.ComplexList {
  public internalValue? : NetworkingIpAssignmentAssignments[] | cdktf.IResolvable

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
  public get(index: number): NetworkingIpAssignmentAssignmentsOutputReference {
    return new NetworkingIpAssignmentAssignmentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/networking_ip_assignment linode_networking_ip_assignment}
*/
export class NetworkingIpAssignment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "linode_networking_ip_assignment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NetworkingIpAssignment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NetworkingIpAssignment to import
  * @param importFromId The id of the existing NetworkingIpAssignment that should be imported. Refer to the {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/networking_ip_assignment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NetworkingIpAssignment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "linode_networking_ip_assignment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/linode/linode/3.6.0/docs/resources/networking_ip_assignment linode_networking_ip_assignment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NetworkingIpAssignmentConfig
  */
  public constructor(scope: Construct, id: string, config: NetworkingIpAssignmentConfig) {
    super(scope, id, {
      terraformResourceType: 'linode_networking_ip_assignment',
      terraformGeneratorMetadata: {
        providerName: 'linode',
        providerVersion: '3.6.0',
        providerVersionConstraint: '3.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._assignments.internalValue = config.assignments;
    this._region = config.region;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // assignments - computed: false, optional: true, required: false
  private _assignments = new NetworkingIpAssignmentAssignmentsList(this, "assignments", false);
  public get assignments() {
    return this._assignments;
  }
  public putAssignments(value: NetworkingIpAssignmentAssignments[] | cdktf.IResolvable) {
    this._assignments.internalValue = value;
  }
  public resetAssignments() {
    this._assignments.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignmentsInput() {
    return this._assignments.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      assignments: cdktf.listMapper(networkingIpAssignmentAssignmentsToTerraform, false)(this._assignments.internalValue),
      region: cdktf.stringToTerraform(this._region),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      assignments: {
        value: cdktf.listMapperHcl(networkingIpAssignmentAssignmentsToHclTerraform, false)(this._assignments.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NetworkingIpAssignmentAssignmentsList",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
