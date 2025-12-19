// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface HotfixConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix#id Hotfix#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * revoke a hotfix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix#revoke Hotfix#revoke}
  */
  readonly revoke?: number;
  /**
  * apply block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix#apply Hotfix#apply}
  */
  readonly apply?: HotfixApply;
}
export interface HotfixApply {
  /**
  * File URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix#file_url Hotfix#file_url}
  */
  readonly fileUrl?: string;
  /**
  * image file from AXAPI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix#image_file Hotfix#image_file}
  */
  readonly imageFile?: string;
  /**
  * Source ip address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix#source_ip_address Hotfix#source_ip_address}
  */
  readonly sourceIpAddress?: string;
  /**
  * Use management port as source port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix#use_mgmt_port Hotfix#use_mgmt_port}
  */
  readonly useMgmtPort?: number;
}

export function hotfixApplyToTerraform(struct?: HotfixApplyOutputReference | HotfixApply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_url: cdktf.stringToTerraform(struct!.fileUrl),
    image_file: cdktf.stringToTerraform(struct!.imageFile),
    source_ip_address: cdktf.stringToTerraform(struct!.sourceIpAddress),
    use_mgmt_port: cdktf.numberToTerraform(struct!.useMgmtPort),
  }
}


export function hotfixApplyToHclTerraform(struct?: HotfixApplyOutputReference | HotfixApply): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_url: {
      value: cdktf.stringToHclTerraform(struct!.fileUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_file: {
      value: cdktf.stringToHclTerraform(struct!.imageFile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_ip_address: {
      value: cdktf.stringToHclTerraform(struct!.sourceIpAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_mgmt_port: {
      value: cdktf.numberToHclTerraform(struct!.useMgmtPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class HotfixApplyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): HotfixApply | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileUrl = this._fileUrl;
    }
    if (this._imageFile !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageFile = this._imageFile;
    }
    if (this._sourceIpAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceIpAddress = this._sourceIpAddress;
    }
    if (this._useMgmtPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.useMgmtPort = this._useMgmtPort;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: HotfixApply | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._fileUrl = undefined;
      this._imageFile = undefined;
      this._sourceIpAddress = undefined;
      this._useMgmtPort = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._fileUrl = value.fileUrl;
      this._imageFile = value.imageFile;
      this._sourceIpAddress = value.sourceIpAddress;
      this._useMgmtPort = value.useMgmtPort;
    }
  }

  // file_url - computed: false, optional: true, required: false
  private _fileUrl?: string; 
  public get fileUrl() {
    return this.getStringAttribute('file_url');
  }
  public set fileUrl(value: string) {
    this._fileUrl = value;
  }
  public resetFileUrl() {
    this._fileUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileUrlInput() {
    return this._fileUrl;
  }

  // image_file - computed: false, optional: true, required: false
  private _imageFile?: string; 
  public get imageFile() {
    return this.getStringAttribute('image_file');
  }
  public set imageFile(value: string) {
    this._imageFile = value;
  }
  public resetImageFile() {
    this._imageFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageFileInput() {
    return this._imageFile;
  }

  // source_ip_address - computed: false, optional: true, required: false
  private _sourceIpAddress?: string; 
  public get sourceIpAddress() {
    return this.getStringAttribute('source_ip_address');
  }
  public set sourceIpAddress(value: string) {
    this._sourceIpAddress = value;
  }
  public resetSourceIpAddress() {
    this._sourceIpAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIpAddressInput() {
    return this._sourceIpAddress;
  }

  // use_mgmt_port - computed: false, optional: true, required: false
  private _useMgmtPort?: number; 
  public get useMgmtPort() {
    return this.getNumberAttribute('use_mgmt_port');
  }
  public set useMgmtPort(value: number) {
    this._useMgmtPort = value;
  }
  public resetUseMgmtPort() {
    this._useMgmtPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useMgmtPortInput() {
    return this._useMgmtPort;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix thunder_hotfix}
*/
export class Hotfix extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_hotfix";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Hotfix resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Hotfix to import
  * @param importFromId The id of the existing Hotfix that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Hotfix to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_hotfix", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/hotfix thunder_hotfix} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options HotfixConfig = {}
  */
  public constructor(scope: Construct, id: string, config: HotfixConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_hotfix',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._revoke = config.revoke;
    this._apply.internalValue = config.apply;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // revoke - computed: false, optional: true, required: false
  private _revoke?: number; 
  public get revoke() {
    return this.getNumberAttribute('revoke');
  }
  public set revoke(value: number) {
    this._revoke = value;
  }
  public resetRevoke() {
    this._revoke = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revokeInput() {
    return this._revoke;
  }

  // apply - computed: false, optional: true, required: false
  private _apply = new HotfixApplyOutputReference(this, "apply");
  public get apply() {
    return this._apply;
  }
  public putApply(value: HotfixApply) {
    this._apply.internalValue = value;
  }
  public resetApply() {
    this._apply.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      revoke: cdktf.numberToTerraform(this._revoke),
      apply: hotfixApplyToTerraform(this._apply.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      revoke: {
        value: cdktf.numberToHclTerraform(this._revoke),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      apply: {
        value: hotfixApplyToHclTerraform(this._apply.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "HotfixApplyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
