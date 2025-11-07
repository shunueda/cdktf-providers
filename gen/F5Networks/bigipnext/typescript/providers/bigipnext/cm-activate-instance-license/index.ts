// https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_activate_instance_license
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CmActivateInstanceLicenseConfig extends cdktf.TerraformMetaArguments {
  /**
  * List of instances to activate the license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_activate_instance_license#instances CmActivateInstanceLicense#instances}
  */
  readonly instances: CmActivateInstanceLicenseInstances[] | cdktf.IResolvable;
}
export interface CmActivateInstanceLicenseInstances {
  /**
  * IP Address of the instance to activate the license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_activate_instance_license#instance_address CmActivateInstanceLicense#instance_address}
  */
  readonly instanceAddress: string;
  /**
  * JWT ID to be used to activate the license
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_activate_instance_license#jwt_id CmActivateInstanceLicense#jwt_id}
  */
  readonly jwtId: string;
}

export function cmActivateInstanceLicenseInstancesToTerraform(struct?: CmActivateInstanceLicenseInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_address: cdktf.stringToTerraform(struct!.instanceAddress),
    jwt_id: cdktf.stringToTerraform(struct!.jwtId),
  }
}


export function cmActivateInstanceLicenseInstancesToHclTerraform(struct?: CmActivateInstanceLicenseInstances | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_address: {
      value: cdktf.stringToHclTerraform(struct!.instanceAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jwt_id: {
      value: cdktf.stringToHclTerraform(struct!.jwtId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CmActivateInstanceLicenseInstancesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CmActivateInstanceLicenseInstances | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceAddress = this._instanceAddress;
    }
    if (this._jwtId !== undefined) {
      hasAnyValues = true;
      internalValueResult.jwtId = this._jwtId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CmActivateInstanceLicenseInstances | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceAddress = undefined;
      this._jwtId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceAddress = value.instanceAddress;
      this._jwtId = value.jwtId;
    }
  }

  // instance_address - computed: false, optional: false, required: true
  private _instanceAddress?: string; 
  public get instanceAddress() {
    return this.getStringAttribute('instance_address');
  }
  public set instanceAddress(value: string) {
    this._instanceAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceAddressInput() {
    return this._instanceAddress;
  }

  // jwt_id - computed: false, optional: false, required: true
  private _jwtId?: string; 
  public get jwtId() {
    return this.getStringAttribute('jwt_id');
  }
  public set jwtId(value: string) {
    this._jwtId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtIdInput() {
    return this._jwtId;
  }
}

export class CmActivateInstanceLicenseInstancesList extends cdktf.ComplexList {
  public internalValue? : CmActivateInstanceLicenseInstances[] | cdktf.IResolvable

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
  public get(index: number): CmActivateInstanceLicenseInstancesOutputReference {
    return new CmActivateInstanceLicenseInstancesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_activate_instance_license bigipnext_cm_activate_instance_license}
*/
export class CmActivateInstanceLicense extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "bigipnext_cm_activate_instance_license";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CmActivateInstanceLicense resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CmActivateInstanceLicense to import
  * @param importFromId The id of the existing CmActivateInstanceLicense that should be imported. Refer to the {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_activate_instance_license#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CmActivateInstanceLicense to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "bigipnext_cm_activate_instance_license", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/f5networks/bigipnext/1.4.0/docs/resources/cm_activate_instance_license bigipnext_cm_activate_instance_license} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CmActivateInstanceLicenseConfig
  */
  public constructor(scope: Construct, id: string, config: CmActivateInstanceLicenseConfig) {
    super(scope, id, {
      terraformResourceType: 'bigipnext_cm_activate_instance_license',
      terraformGeneratorMetadata: {
        providerName: 'bigipnext',
        providerVersion: '1.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instances.internalValue = config.instances;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instances - computed: false, optional: false, required: true
  private _instances = new CmActivateInstanceLicenseInstancesList(this, "instances", false);
  public get instances() {
    return this._instances;
  }
  public putInstances(value: CmActivateInstanceLicenseInstances[] | cdktf.IResolvable) {
    this._instances.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instancesInput() {
    return this._instances.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instances: cdktf.listMapper(cmActivateInstanceLicenseInstancesToTerraform, false)(this._instances.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instances: {
        value: cdktf.listMapperHcl(cmActivateInstanceLicenseInstancesToHclTerraform, false)(this._instances.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CmActivateInstanceLicenseInstancesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
