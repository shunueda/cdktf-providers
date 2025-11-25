// https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudApplicationInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the cloud application instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance#instance_type CloudApplicationInstance#instance_type}
  */
  readonly instanceType?: string;
  /**
  * Name of the cloud application instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance#name CloudApplicationInstance#name}
  */
  readonly name?: string;
  /**
  * instance_identifiers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance#instance_identifiers CloudApplicationInstance#instance_identifiers}
  */
  readonly instanceIdentifiers?: CloudApplicationInstanceInstanceIdentifiers[] | cdktf.IResolvable;
}
export interface CloudApplicationInstanceInstanceIdentifiers {
  /**
  * Type of the cloud application instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance#identifier_type CloudApplicationInstance#identifier_type}
  */
  readonly identifierType?: string;
  /**
  * Unique identifying string for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance#instance_identifier CloudApplicationInstance#instance_identifier}
  */
  readonly instanceIdentifier?: string;
  /**
  * Unique identifying string for the instance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance#instance_identifier_name CloudApplicationInstance#instance_identifier_name}
  */
  readonly instanceIdentifierName?: string;
}

export function cloudApplicationInstanceInstanceIdentifiersToTerraform(struct?: CloudApplicationInstanceInstanceIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    identifier_type: cdktf.stringToTerraform(struct!.identifierType),
    instance_identifier: cdktf.stringToTerraform(struct!.instanceIdentifier),
    instance_identifier_name: cdktf.stringToTerraform(struct!.instanceIdentifierName),
  }
}


export function cloudApplicationInstanceInstanceIdentifiersToHclTerraform(struct?: CloudApplicationInstanceInstanceIdentifiers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    identifier_type: {
      value: cdktf.stringToHclTerraform(struct!.identifierType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_identifier: {
      value: cdktf.stringToHclTerraform(struct!.instanceIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_identifier_name: {
      value: cdktf.stringToHclTerraform(struct!.instanceIdentifierName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudApplicationInstanceInstanceIdentifiersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): CloudApplicationInstanceInstanceIdentifiers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._identifierType !== undefined) {
      hasAnyValues = true;
      internalValueResult.identifierType = this._identifierType;
    }
    if (this._instanceIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIdentifier = this._instanceIdentifier;
    }
    if (this._instanceIdentifierName !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceIdentifierName = this._instanceIdentifierName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudApplicationInstanceInstanceIdentifiers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._identifierType = undefined;
      this._instanceIdentifier = undefined;
      this._instanceIdentifierName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._identifierType = value.identifierType;
      this._instanceIdentifier = value.instanceIdentifier;
      this._instanceIdentifierName = value.instanceIdentifierName;
    }
  }

  // identifier_type - computed: false, optional: true, required: false
  private _identifierType?: string; 
  public get identifierType() {
    return this.getStringAttribute('identifier_type');
  }
  public set identifierType(value: string) {
    this._identifierType = value;
  }
  public resetIdentifierType() {
    this._identifierType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identifierTypeInput() {
    return this._identifierType;
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_identifier - computed: false, optional: true, required: false
  private _instanceIdentifier?: string; 
  public get instanceIdentifier() {
    return this.getStringAttribute('instance_identifier');
  }
  public set instanceIdentifier(value: string) {
    this._instanceIdentifier = value;
  }
  public resetInstanceIdentifier() {
    this._instanceIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdentifierInput() {
    return this._instanceIdentifier;
  }

  // instance_identifier_name - computed: false, optional: true, required: false
  private _instanceIdentifierName?: string; 
  public get instanceIdentifierName() {
    return this.getStringAttribute('instance_identifier_name');
  }
  public set instanceIdentifierName(value: string) {
    this._instanceIdentifierName = value;
  }
  public resetInstanceIdentifierName() {
    this._instanceIdentifierName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdentifierNameInput() {
    return this._instanceIdentifierName;
  }
}

export class CloudApplicationInstanceInstanceIdentifiersList extends cdktf.ComplexList {
  public internalValue? : CloudApplicationInstanceInstanceIdentifiers[] | cdktf.IResolvable

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
  public get(index: number): CloudApplicationInstanceInstanceIdentifiersOutputReference {
    return new CloudApplicationInstanceInstanceIdentifiersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance zia_cloud_application_instance}
*/
export class CloudApplicationInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_cloud_application_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudApplicationInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudApplicationInstance to import
  * @param importFromId The id of the existing CloudApplicationInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudApplicationInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_cloud_application_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.4/docs/resources/cloud_application_instance zia_cloud_application_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudApplicationInstanceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudApplicationInstanceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_cloud_application_instance',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.4',
        providerVersionConstraint: '4.6.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._instanceType = config.instanceType;
    this._name = config.name;
    this._instanceIdentifiers.internalValue = config.instanceIdentifiers;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // instance_id - computed: true, optional: false, required: false
  public get instanceId() {
    return this.getNumberAttribute('instance_id');
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // instance_identifiers - computed: false, optional: true, required: false
  private _instanceIdentifiers = new CloudApplicationInstanceInstanceIdentifiersList(this, "instance_identifiers", false);
  public get instanceIdentifiers() {
    return this._instanceIdentifiers;
  }
  public putInstanceIdentifiers(value: CloudApplicationInstanceInstanceIdentifiers[] | cdktf.IResolvable) {
    this._instanceIdentifiers.internalValue = value;
  }
  public resetInstanceIdentifiers() {
    this._instanceIdentifiers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdentifiersInput() {
    return this._instanceIdentifiers.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      instance_type: cdktf.stringToTerraform(this._instanceType),
      name: cdktf.stringToTerraform(this._name),
      instance_identifiers: cdktf.listMapper(cloudApplicationInstanceInstanceIdentifiersToTerraform, true)(this._instanceIdentifiers.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      instance_type: {
        value: cdktf.stringToHclTerraform(this._instanceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      instance_identifiers: {
        value: cdktf.listMapperHcl(cloudApplicationInstanceInstanceIdentifiersToHclTerraform, true)(this._instanceIdentifiers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudApplicationInstanceInstanceIdentifiersList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
