// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/golden_tag_image_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterGoldenTagImageDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * deviceFamilyIdentifier path parameter. Device family identifier e.g. : 277696480-283933147, e.g. : 277696480
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/golden_tag_image_details#device_family_identifier DataDnacenterGoldenTagImageDetails#device_family_identifier}
  */
  readonly deviceFamilyIdentifier: string;
  /**
  * deviceRole path parameter. Device Role. Permissible Values : ALL, UNKNOWN, ACCESS, BORDER ROUTER, DISTRIBUTION and CORE.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/golden_tag_image_details#device_role DataDnacenterGoldenTagImageDetails#device_role}
  */
  readonly deviceRole: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/golden_tag_image_details#id DataDnacenterGoldenTagImageDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * imageId path parameter. Image Id in uuid format.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/golden_tag_image_details#image_id DataDnacenterGoldenTagImageDetails#image_id}
  */
  readonly imageId: string;
  /**
  * siteId path parameter. Site Id in uuid format. Set siteId as -1 for Global site.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/golden_tag_image_details#site_id DataDnacenterGoldenTagImageDetails#site_id}
  */
  readonly siteId: string;
}
export interface DataDnacenterGoldenTagImageDetailsItem {
}

export function dataDnacenterGoldenTagImageDetailsItemToTerraform(struct?: DataDnacenterGoldenTagImageDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterGoldenTagImageDetailsItemToHclTerraform(struct?: DataDnacenterGoldenTagImageDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterGoldenTagImageDetailsItemOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataDnacenterGoldenTagImageDetailsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterGoldenTagImageDetailsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // device_role - computed: true, optional: false, required: false
  public get deviceRole() {
    return this.getStringAttribute('device_role');
  }

  // inherited_site_id - computed: true, optional: false, required: false
  public get inheritedSiteId() {
    return this.getStringAttribute('inherited_site_id');
  }

  // inherited_site_name - computed: true, optional: false, required: false
  public get inheritedSiteName() {
    return this.getStringAttribute('inherited_site_name');
  }

  // tagged_golden - computed: true, optional: false, required: false
  public get taggedGolden() {
    return this.getStringAttribute('tagged_golden');
  }
}

export class DataDnacenterGoldenTagImageDetailsItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterGoldenTagImageDetailsItemOutputReference {
    return new DataDnacenterGoldenTagImageDetailsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/golden_tag_image_details dnacenter_golden_tag_image_details}
*/
export class DataDnacenterGoldenTagImageDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_golden_tag_image_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterGoldenTagImageDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterGoldenTagImageDetails to import
  * @param importFromId The id of the existing DataDnacenterGoldenTagImageDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/golden_tag_image_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterGoldenTagImageDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_golden_tag_image_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/golden_tag_image_details dnacenter_golden_tag_image_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterGoldenTagImageDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterGoldenTagImageDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_golden_tag_image_details',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceFamilyIdentifier = config.deviceFamilyIdentifier;
    this._deviceRole = config.deviceRole;
    this._id = config.id;
    this._imageId = config.imageId;
    this._siteId = config.siteId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_family_identifier - computed: false, optional: false, required: true
  private _deviceFamilyIdentifier?: string; 
  public get deviceFamilyIdentifier() {
    return this.getStringAttribute('device_family_identifier');
  }
  public set deviceFamilyIdentifier(value: string) {
    this._deviceFamilyIdentifier = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceFamilyIdentifierInput() {
    return this._deviceFamilyIdentifier;
  }

  // device_role - computed: false, optional: false, required: true
  private _deviceRole?: string; 
  public get deviceRole() {
    return this.getStringAttribute('device_role');
  }
  public set deviceRole(value: string) {
    this._deviceRole = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceRoleInput() {
    return this._deviceRole;
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

  // image_id - computed: false, optional: false, required: true
  private _imageId?: string; 
  public get imageId() {
    return this.getStringAttribute('image_id');
  }
  public set imageId(value: string) {
    this._imageId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageIdInput() {
    return this._imageId;
  }

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterGoldenTagImageDetailsItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_family_identifier: cdktf.stringToTerraform(this._deviceFamilyIdentifier),
      device_role: cdktf.stringToTerraform(this._deviceRole),
      id: cdktf.stringToTerraform(this._id),
      image_id: cdktf.stringToTerraform(this._imageId),
      site_id: cdktf.stringToTerraform(this._siteId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_family_identifier: {
        value: cdktf.stringToHclTerraform(this._deviceFamilyIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_role: {
        value: cdktf.stringToHclTerraform(this._deviceRole),
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
      image_id: {
        value: cdktf.stringToHclTerraform(this._imageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
