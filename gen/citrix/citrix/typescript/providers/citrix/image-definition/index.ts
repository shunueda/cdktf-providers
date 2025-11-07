// https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ImageDefinitionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Details of the Azure Image Definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#azure_image_definition ImageDefinition#azure_image_definition}
  */
  readonly azureImageDefinition?: ImageDefinitionAzureImageDefinition;
  /**
  * Description of the image definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#description ImageDefinition#description}
  */
  readonly description?: string;
  /**
  * ID of the hypervisor connection to be used for image definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#hypervisor ImageDefinition#hypervisor}
  */
  readonly hypervisor: string;
  /**
  * ID of the hypervisor resource pool to be used for image definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#hypervisor_resource_pool ImageDefinition#hypervisor_resource_pool}
  */
  readonly hypervisorResourcePool: string;
  /**
  * Name of the image definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#name ImageDefinition#name}
  */
  readonly name: string;
  /**
  * Operating system type of the image definition. Valid values are `Windows` and `Linux`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#os_type ImageDefinition#os_type}
  */
  readonly osType: string;
  /**
  * Session support of the image definition. Valid values are `MultiSession` and `SingleSession`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#session_support ImageDefinition#session_support}
  */
  readonly sessionSupport: string;
  /**
  * Timeout in minutes for the long-running jobs in image definition resource's create, delete operation(s).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#timeout ImageDefinition#timeout}
  */
  readonly timeout?: ImageDefinitionTimeout;
}
export interface ImageDefinitionAzureImageDefinition {
  /**
  * Name of the existing image gallery. If not specified and `use_image_gallery` is `true`, a new image gallery will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#image_gallery_name ImageDefinition#image_gallery_name}
  */
  readonly imageGalleryName?: string;
  /**
  * Existing resource group to store the image definition. If not specified, a new resource group will be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#resource_group ImageDefinition#resource_group}
  */
  readonly resourceGroup?: string;
  /**
  * Whether image gallery is used to store the image definition. Defaults to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#use_image_gallery ImageDefinition#use_image_gallery}
  */
  readonly useImageGallery?: boolean | cdktf.IResolvable;
}

export function imageDefinitionAzureImageDefinitionToTerraform(struct?: ImageDefinitionAzureImageDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    image_gallery_name: cdktf.stringToTerraform(struct!.imageGalleryName),
    resource_group: cdktf.stringToTerraform(struct!.resourceGroup),
    use_image_gallery: cdktf.booleanToTerraform(struct!.useImageGallery),
  }
}


export function imageDefinitionAzureImageDefinitionToHclTerraform(struct?: ImageDefinitionAzureImageDefinition | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    image_gallery_name: {
      value: cdktf.stringToHclTerraform(struct!.imageGalleryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_group: {
      value: cdktf.stringToHclTerraform(struct!.resourceGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_image_gallery: {
      value: cdktf.booleanToHclTerraform(struct!.useImageGallery),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageDefinitionAzureImageDefinitionOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageDefinitionAzureImageDefinition | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._imageGalleryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageGalleryName = this._imageGalleryName;
    }
    if (this._resourceGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceGroup = this._resourceGroup;
    }
    if (this._useImageGallery !== undefined) {
      hasAnyValues = true;
      internalValueResult.useImageGallery = this._useImageGallery;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageDefinitionAzureImageDefinition | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._imageGalleryName = undefined;
      this._resourceGroup = undefined;
      this._useImageGallery = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._imageGalleryName = value.imageGalleryName;
      this._resourceGroup = value.resourceGroup;
      this._useImageGallery = value.useImageGallery;
    }
  }

  // image_gallery_name - computed: false, optional: true, required: false
  private _imageGalleryName?: string; 
  public get imageGalleryName() {
    return this.getStringAttribute('image_gallery_name');
  }
  public set imageGalleryName(value: string) {
    this._imageGalleryName = value;
  }
  public resetImageGalleryName() {
    this._imageGalleryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageGalleryNameInput() {
    return this._imageGalleryName;
  }

  // resource_group - computed: false, optional: true, required: false
  private _resourceGroup?: string; 
  public get resourceGroup() {
    return this.getStringAttribute('resource_group');
  }
  public set resourceGroup(value: string) {
    this._resourceGroup = value;
  }
  public resetResourceGroup() {
    this._resourceGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceGroupInput() {
    return this._resourceGroup;
  }

  // use_image_gallery - computed: true, optional: true, required: false
  private _useImageGallery?: boolean | cdktf.IResolvable; 
  public get useImageGallery() {
    return this.getBooleanAttribute('use_image_gallery');
  }
  public set useImageGallery(value: boolean | cdktf.IResolvable) {
    this._useImageGallery = value;
  }
  public resetUseImageGallery() {
    this._useImageGallery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useImageGalleryInput() {
    return this._useImageGallery;
  }
}
export interface ImageDefinitionTimeout {
  /**
  * Timeout in minutes for the long-running jobs in create operation. Defaults to 10. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#create ImageDefinition#create}
  */
  readonly create?: number;
  /**
  * Timeout in minutes for the long-running jobs in delete operation. Defaults to 10. Minimum value is 5.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#delete ImageDefinition#delete}
  */
  readonly delete?: number;
}

export function imageDefinitionTimeoutToTerraform(struct?: ImageDefinitionTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.numberToTerraform(struct!.create),
    delete: cdktf.numberToTerraform(struct!.delete),
  }
}


export function imageDefinitionTimeoutToHclTerraform(struct?: ImageDefinitionTimeout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.numberToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    delete: {
      value: cdktf.numberToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ImageDefinitionTimeoutOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ImageDefinitionTimeout | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ImageDefinitionTimeout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
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
    }
  }

  // create - computed: true, optional: true, required: false
  private _create?: number; 
  public get create() {
    return this.getNumberAttribute('create');
  }
  public set create(value: number) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: true, optional: true, required: false
  private _delete?: number; 
  public get delete() {
    return this.getNumberAttribute('delete');
  }
  public set delete(value: number) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition citrix_image_definition}
*/
export class ImageDefinition extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "citrix_image_definition";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ImageDefinition resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ImageDefinition to import
  * @param importFromId The id of the existing ImageDefinition that should be imported. Refer to the {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ImageDefinition to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "citrix_image_definition", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/citrix/citrix/1.0.30/docs/resources/image_definition citrix_image_definition} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ImageDefinitionConfig
  */
  public constructor(scope: Construct, id: string, config: ImageDefinitionConfig) {
    super(scope, id, {
      terraformResourceType: 'citrix_image_definition',
      terraformGeneratorMetadata: {
        providerName: 'citrix',
        providerVersion: '1.0.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureImageDefinition.internalValue = config.azureImageDefinition;
    this._description = config.description;
    this._hypervisor = config.hypervisor;
    this._hypervisorResourcePool = config.hypervisorResourcePool;
    this._name = config.name;
    this._osType = config.osType;
    this._sessionSupport = config.sessionSupport;
    this._timeout.internalValue = config.timeout;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // azure_image_definition - computed: false, optional: true, required: false
  private _azureImageDefinition = new ImageDefinitionAzureImageDefinitionOutputReference(this, "azure_image_definition");
  public get azureImageDefinition() {
    return this._azureImageDefinition;
  }
  public putAzureImageDefinition(value: ImageDefinitionAzureImageDefinition) {
    this._azureImageDefinition.internalValue = value;
  }
  public resetAzureImageDefinition() {
    this._azureImageDefinition.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureImageDefinitionInput() {
    return this._azureImageDefinition.internalValue;
  }

  // description - computed: true, optional: true, required: false
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

  // hypervisor - computed: false, optional: false, required: true
  private _hypervisor?: string; 
  public get hypervisor() {
    return this.getStringAttribute('hypervisor');
  }
  public set hypervisor(value: string) {
    this._hypervisor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorInput() {
    return this._hypervisor;
  }

  // hypervisor_resource_pool - computed: false, optional: false, required: true
  private _hypervisorResourcePool?: string; 
  public get hypervisorResourcePool() {
    return this.getStringAttribute('hypervisor_resource_pool');
  }
  public set hypervisorResourcePool(value: string) {
    this._hypervisorResourcePool = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hypervisorResourcePoolInput() {
    return this._hypervisorResourcePool;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // latest_version - computed: true, optional: false, required: false
  public get latestVersion() {
    return this.getNumberAttribute('latest_version');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // os_type - computed: false, optional: false, required: true
  private _osType?: string; 
  public get osType() {
    return this.getStringAttribute('os_type');
  }
  public set osType(value: string) {
    this._osType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get osTypeInput() {
    return this._osType;
  }

  // session_support - computed: false, optional: false, required: true
  private _sessionSupport?: string; 
  public get sessionSupport() {
    return this.getStringAttribute('session_support');
  }
  public set sessionSupport(value: string) {
    this._sessionSupport = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionSupportInput() {
    return this._sessionSupport;
  }

  // timeout - computed: false, optional: true, required: false
  private _timeout = new ImageDefinitionTimeoutOutputReference(this, "timeout");
  public get timeout() {
    return this._timeout;
  }
  public putTimeout(value: ImageDefinitionTimeout) {
    this._timeout.internalValue = value;
  }
  public resetTimeout() {
    this._timeout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInput() {
    return this._timeout.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_image_definition: imageDefinitionAzureImageDefinitionToTerraform(this._azureImageDefinition.internalValue),
      description: cdktf.stringToTerraform(this._description),
      hypervisor: cdktf.stringToTerraform(this._hypervisor),
      hypervisor_resource_pool: cdktf.stringToTerraform(this._hypervisorResourcePool),
      name: cdktf.stringToTerraform(this._name),
      os_type: cdktf.stringToTerraform(this._osType),
      session_support: cdktf.stringToTerraform(this._sessionSupport),
      timeout: imageDefinitionTimeoutToTerraform(this._timeout.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_image_definition: {
        value: imageDefinitionAzureImageDefinitionToHclTerraform(this._azureImageDefinition.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageDefinitionAzureImageDefinition",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor: {
        value: cdktf.stringToHclTerraform(this._hypervisor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hypervisor_resource_pool: {
        value: cdktf.stringToHclTerraform(this._hypervisorResourcePool),
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
      os_type: {
        value: cdktf.stringToHclTerraform(this._osType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      session_support: {
        value: cdktf.stringToHclTerraform(this._sessionSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout: {
        value: imageDefinitionTimeoutToHclTerraform(this._timeout.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ImageDefinitionTimeout",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
