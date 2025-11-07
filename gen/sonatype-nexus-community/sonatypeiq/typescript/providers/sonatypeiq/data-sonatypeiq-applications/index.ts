// https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/applications
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataSonatypeiqApplicationsConfig extends cdktf.TerraformMetaArguments {
}
export interface DataSonatypeiqApplicationsApplicationsApplicationTags {
}

export function dataSonatypeiqApplicationsApplicationsApplicationTagsToTerraform(struct?: DataSonatypeiqApplicationsApplicationsApplicationTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataSonatypeiqApplicationsApplicationsApplicationTagsToHclTerraform(struct?: DataSonatypeiqApplicationsApplicationsApplicationTags): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataSonatypeiqApplicationsApplicationsApplicationTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSonatypeiqApplicationsApplicationsApplicationTags | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSonatypeiqApplicationsApplicationsApplicationTags | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_id - computed: true, optional: false, required: false
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // tag_id - computed: true, optional: false, required: false
  public get tagId() {
    return this.getStringAttribute('tag_id');
  }
}

export class DataSonatypeiqApplicationsApplicationsApplicationTagsList extends cdktf.ComplexList {

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
  public get(index: number): DataSonatypeiqApplicationsApplicationsApplicationTagsOutputReference {
    return new DataSonatypeiqApplicationsApplicationsApplicationTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataSonatypeiqApplicationsApplications {
  /**
  * User Name of the Contact for the Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/applications#contact_user_name DataSonatypeiqApplications#contact_user_name}
  */
  readonly contactUserName?: string;
  /**
  * Internal ID of the Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/applications#id DataSonatypeiqApplications#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of the Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/applications#name DataSonatypeiqApplications#name}
  */
  readonly name?: string;
  /**
  * Public ID of the Application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/applications#public_id DataSonatypeiqApplications#public_id}
  */
  readonly publicId?: string;
}

export function dataSonatypeiqApplicationsApplicationsToTerraform(struct?: DataSonatypeiqApplicationsApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    contact_user_name: cdktf.stringToTerraform(struct!.contactUserName),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    public_id: cdktf.stringToTerraform(struct!.publicId),
  }
}


export function dataSonatypeiqApplicationsApplicationsToHclTerraform(struct?: DataSonatypeiqApplicationsApplications): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    contact_user_name: {
      value: cdktf.stringToHclTerraform(struct!.contactUserName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    public_id: {
      value: cdktf.stringToHclTerraform(struct!.publicId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataSonatypeiqApplicationsApplicationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataSonatypeiqApplicationsApplications | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._contactUserName !== undefined) {
      hasAnyValues = true;
      internalValueResult.contactUserName = this._contactUserName;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._publicId !== undefined) {
      hasAnyValues = true;
      internalValueResult.publicId = this._publicId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataSonatypeiqApplicationsApplications | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._contactUserName = undefined;
      this._id = undefined;
      this._name = undefined;
      this._publicId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._contactUserName = value.contactUserName;
      this._id = value.id;
      this._name = value.name;
      this._publicId = value.publicId;
    }
  }

  // application_tags - computed: true, optional: false, required: false
  private _applicationTags = new DataSonatypeiqApplicationsApplicationsApplicationTagsList(this, "application_tags", false);
  public get applicationTags() {
    return this._applicationTags;
  }

  // contact_user_name - computed: true, optional: true, required: false
  private _contactUserName?: string; 
  public get contactUserName() {
    return this.getStringAttribute('contact_user_name');
  }
  public set contactUserName(value: string) {
    this._contactUserName = value;
  }
  public resetContactUserName() {
    this._contactUserName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contactUserNameInput() {
    return this._contactUserName;
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

  // name - computed: true, optional: true, required: false
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

  // organization_id - computed: true, optional: false, required: false
  public get organizationId() {
    return this.getStringAttribute('organization_id');
  }

  // public_id - computed: true, optional: true, required: false
  private _publicId?: string; 
  public get publicId() {
    return this.getStringAttribute('public_id');
  }
  public set publicId(value: string) {
    this._publicId = value;
  }
  public resetPublicId() {
    this._publicId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get publicIdInput() {
    return this._publicId;
  }
}

export class DataSonatypeiqApplicationsApplicationsList extends cdktf.ComplexList {
  public internalValue? : DataSonatypeiqApplicationsApplications[] | cdktf.IResolvable

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
  public get(index: number): DataSonatypeiqApplicationsApplicationsOutputReference {
    return new DataSonatypeiqApplicationsApplicationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/applications sonatypeiq_applications}
*/
export class DataSonatypeiqApplications extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sonatypeiq_applications";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataSonatypeiqApplications resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataSonatypeiqApplications to import
  * @param importFromId The id of the existing DataSonatypeiqApplications that should be imported. Refer to the {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/applications#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataSonatypeiqApplications to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sonatypeiq_applications", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/sonatype-nexus-community/sonatypeiq/0.12.1/docs/data-sources/applications sonatypeiq_applications} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataSonatypeiqApplicationsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataSonatypeiqApplicationsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'sonatypeiq_applications',
      terraformGeneratorMetadata: {
        providerName: 'sonatypeiq',
        providerVersion: '0.12.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // applications - computed: true, optional: false, required: false
  private _applications = new DataSonatypeiqApplicationsApplicationsList(this, "applications", false);
  public get applications() {
    return this._applications;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
    };
    return attrs;
  }
}
