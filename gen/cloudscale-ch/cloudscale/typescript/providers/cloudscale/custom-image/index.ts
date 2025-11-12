// https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomImageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#firmware_type CustomImage#firmware_type}
  */
  readonly firmwareType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#id CustomImage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#import_source_format CustomImage#import_source_format}
  */
  readonly importSourceFormat?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#import_url CustomImage#import_url}
  */
  readonly importUrl: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#name CustomImage#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#slug CustomImage#slug}
  */
  readonly slug?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#tags CustomImage#tags}
  */
  readonly tags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#user_data_handling CustomImage#user_data_handling}
  */
  readonly userDataHandling: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#zone_slugs CustomImage#zone_slugs}
  */
  readonly zoneSlugs: string[];
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#timeouts CustomImage#timeouts}
  */
  readonly timeouts?: CustomImageTimeouts;
}
export interface CustomImageTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#create CustomImage#create}
  */
  readonly create?: string;
}

export function customImageTimeoutsToTerraform(struct?: CustomImageTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function customImageTimeoutsToHclTerraform(struct?: CustomImageTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomImageTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomImageTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomImageTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image cloudscale_custom_image}
*/
export class CustomImage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cloudscale_custom_image";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomImage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomImage to import
  * @param importFromId The id of the existing CustomImage that should be imported. Refer to the {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomImage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cloudscale_custom_image", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cloudscale-ch/cloudscale/5.0.0/docs/resources/custom_image cloudscale_custom_image} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomImageConfig
  */
  public constructor(scope: Construct, id: string, config: CustomImageConfig) {
    super(scope, id, {
      terraformResourceType: 'cloudscale_custom_image',
      terraformGeneratorMetadata: {
        providerName: 'cloudscale',
        providerVersion: '5.0.0',
        providerVersionConstraint: '5.0.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._firmwareType = config.firmwareType;
    this._id = config.id;
    this._importSourceFormat = config.importSourceFormat;
    this._importUrl = config.importUrl;
    this._name = config.name;
    this._slug = config.slug;
    this._tags = config.tags;
    this._userDataHandling = config.userDataHandling;
    this._zoneSlugs = config.zoneSlugs;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checksums - computed: true, optional: false, required: false
  private _checksums = new cdktf.StringMap(this, "checksums");
  public get checksums() {
    return this._checksums;
  }

  // firmware_type - computed: true, optional: true, required: false
  private _firmwareType?: string; 
  public get firmwareType() {
    return this.getStringAttribute('firmware_type');
  }
  public set firmwareType(value: string) {
    this._firmwareType = value;
  }
  public resetFirmwareType() {
    this._firmwareType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firmwareTypeInput() {
    return this._firmwareType;
  }

  // href - computed: true, optional: false, required: false
  public get href() {
    return this.getStringAttribute('href');
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

  // import_href - computed: true, optional: false, required: false
  public get importHref() {
    return this.getStringAttribute('import_href');
  }

  // import_source_format - computed: false, optional: true, required: false
  private _importSourceFormat?: string; 
  public get importSourceFormat() {
    return this.getStringAttribute('import_source_format');
  }
  public set importSourceFormat(value: string) {
    this._importSourceFormat = value;
  }
  public resetImportSourceFormat() {
    this._importSourceFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get importSourceFormatInput() {
    return this._importSourceFormat;
  }

  // import_status - computed: true, optional: false, required: false
  public get importStatus() {
    return this.getStringAttribute('import_status');
  }

  // import_url - computed: false, optional: false, required: true
  private _importUrl?: string; 
  public get importUrl() {
    return this.getStringAttribute('import_url');
  }
  public set importUrl(value: string) {
    this._importUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get importUrlInput() {
    return this._importUrl;
  }

  // import_uuid - computed: true, optional: false, required: false
  public get importUuid() {
    return this.getStringAttribute('import_uuid');
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

  // size_gb - computed: true, optional: false, required: false
  public get sizeGb() {
    return this.getNumberAttribute('size_gb');
  }

  // slug - computed: false, optional: true, required: false
  private _slug?: string; 
  public get slug() {
    return this.getStringAttribute('slug');
  }
  public set slug(value: string) {
    this._slug = value;
  }
  public resetSlug() {
    this._slug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slugInput() {
    return this._slug;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }

  // user_data_handling - computed: false, optional: false, required: true
  private _userDataHandling?: string; 
  public get userDataHandling() {
    return this.getStringAttribute('user_data_handling');
  }
  public set userDataHandling(value: string) {
    this._userDataHandling = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userDataHandlingInput() {
    return this._userDataHandling;
  }

  // zone_slugs - computed: false, optional: false, required: true
  private _zoneSlugs?: string[]; 
  public get zoneSlugs() {
    return cdktf.Fn.tolist(this.getListAttribute('zone_slugs'));
  }
  public set zoneSlugs(value: string[]) {
    this._zoneSlugs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get zoneSlugsInput() {
    return this._zoneSlugs;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CustomImageTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CustomImageTimeouts) {
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
      firmware_type: cdktf.stringToTerraform(this._firmwareType),
      id: cdktf.stringToTerraform(this._id),
      import_source_format: cdktf.stringToTerraform(this._importSourceFormat),
      import_url: cdktf.stringToTerraform(this._importUrl),
      name: cdktf.stringToTerraform(this._name),
      slug: cdktf.stringToTerraform(this._slug),
      tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._tags),
      user_data_handling: cdktf.stringToTerraform(this._userDataHandling),
      zone_slugs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._zoneSlugs),
      timeouts: customImageTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      firmware_type: {
        value: cdktf.stringToHclTerraform(this._firmwareType),
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
      import_source_format: {
        value: cdktf.stringToHclTerraform(this._importSourceFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      import_url: {
        value: cdktf.stringToHclTerraform(this._importUrl),
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
      slug: {
        value: cdktf.stringToHclTerraform(this._slug),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._tags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      user_data_handling: {
        value: cdktf.stringToHclTerraform(this._userDataHandling),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      zone_slugs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._zoneSlugs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      timeouts: {
        value: customImageTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomImageTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
