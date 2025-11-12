// https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ObjectFmgDeviceBlueprintConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#adom ObjectFmgDeviceBlueprint#adom}
  */
  readonly adom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#auth_template ObjectFmgDeviceBlueprint#auth_template}
  */
  readonly authTemplate?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#cliprofs ObjectFmgDeviceBlueprint#cliprofs}
  */
  readonly cliprofs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#description ObjectFmgDeviceBlueprint#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#dev_group ObjectFmgDeviceBlueprint#dev_group}
  */
  readonly devGroup?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#enforce_device_config ObjectFmgDeviceBlueprint#enforce_device_config}
  */
  readonly enforceDeviceConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#folder ObjectFmgDeviceBlueprint#folder}
  */
  readonly folder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#ha_config ObjectFmgDeviceBlueprint#ha_config}
  */
  readonly haConfig?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#ha_hbdev ObjectFmgDeviceBlueprint#ha_hbdev}
  */
  readonly haHbdev?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#ha_monitor ObjectFmgDeviceBlueprint#ha_monitor}
  */
  readonly haMonitor?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#ha_password ObjectFmgDeviceBlueprint#ha_password}
  */
  readonly haPassword?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#id ObjectFmgDeviceBlueprint#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#linked_to_model ObjectFmgDeviceBlueprint#linked_to_model}
  */
  readonly linkedToModel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#name ObjectFmgDeviceBlueprint#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#pkg ObjectFmgDeviceBlueprint#pkg}
  */
  readonly pkg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#platform ObjectFmgDeviceBlueprint#platform}
  */
  readonly platform?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#port_provisioning ObjectFmgDeviceBlueprint#port_provisioning}
  */
  readonly portProvisioning?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#prefer_img_ver ObjectFmgDeviceBlueprint#prefer_img_ver}
  */
  readonly preferImgVer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#prerun_cliprof ObjectFmgDeviceBlueprint#prerun_cliprof}
  */
  readonly prerunCliprof?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#prov_type ObjectFmgDeviceBlueprint#prov_type}
  */
  readonly provType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#scopetype ObjectFmgDeviceBlueprint#scopetype}
  */
  readonly scopetype?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#sdwan_management ObjectFmgDeviceBlueprint#sdwan_management}
  */
  readonly sdwanManagement?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#split_switch_port ObjectFmgDeviceBlueprint#split_switch_port}
  */
  readonly splitSwitchPort?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#template_group ObjectFmgDeviceBlueprint#template_group}
  */
  readonly templateGroup?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#templates ObjectFmgDeviceBlueprint#templates}
  */
  readonly templates?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#vm_log_disk ObjectFmgDeviceBlueprint#vm_log_disk}
  */
  readonly vmLogDisk?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint fortimanager_object_fmg_device_blueprint}
*/
export class ObjectFmgDeviceBlueprint extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fortimanager_object_fmg_device_blueprint";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ObjectFmgDeviceBlueprint resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ObjectFmgDeviceBlueprint to import
  * @param importFromId The id of the existing ObjectFmgDeviceBlueprint that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ObjectFmgDeviceBlueprint to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fortimanager_object_fmg_device_blueprint", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fortimanager/1.14.0/docs/resources/object_fmg_device_blueprint fortimanager_object_fmg_device_blueprint} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ObjectFmgDeviceBlueprintConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ObjectFmgDeviceBlueprintConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fortimanager_object_fmg_device_blueprint',
      terraformGeneratorMetadata: {
        providerName: 'fortimanager',
        providerVersion: '1.14.0',
        providerVersionConstraint: '1.14.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._adom = config.adom;
    this._authTemplate = config.authTemplate;
    this._cliprofs = config.cliprofs;
    this._description = config.description;
    this._devGroup = config.devGroup;
    this._enforceDeviceConfig = config.enforceDeviceConfig;
    this._folder = config.folder;
    this._haConfig = config.haConfig;
    this._haHbdev = config.haHbdev;
    this._haMonitor = config.haMonitor;
    this._haPassword = config.haPassword;
    this._id = config.id;
    this._linkedToModel = config.linkedToModel;
    this._name = config.name;
    this._pkg = config.pkg;
    this._platform = config.platform;
    this._portProvisioning = config.portProvisioning;
    this._preferImgVer = config.preferImgVer;
    this._prerunCliprof = config.prerunCliprof;
    this._provType = config.provType;
    this._scopetype = config.scopetype;
    this._sdwanManagement = config.sdwanManagement;
    this._splitSwitchPort = config.splitSwitchPort;
    this._templateGroup = config.templateGroup;
    this._templates = config.templates;
    this._vmLogDisk = config.vmLogDisk;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // adom - computed: false, optional: true, required: false
  private _adom?: string; 
  public get adom() {
    return this.getStringAttribute('adom');
  }
  public set adom(value: string) {
    this._adom = value;
  }
  public resetAdom() {
    this._adom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adomInput() {
    return this._adom;
  }

  // auth_template - computed: true, optional: true, required: false
  private _authTemplate?: string[]; 
  public get authTemplate() {
    return cdktf.Fn.tolist(this.getListAttribute('auth_template'));
  }
  public set authTemplate(value: string[]) {
    this._authTemplate = value;
  }
  public resetAuthTemplate() {
    this._authTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTemplateInput() {
    return this._authTemplate;
  }

  // cliprofs - computed: true, optional: true, required: false
  private _cliprofs?: string[]; 
  public get cliprofs() {
    return cdktf.Fn.tolist(this.getListAttribute('cliprofs'));
  }
  public set cliprofs(value: string[]) {
    this._cliprofs = value;
  }
  public resetCliprofs() {
    this._cliprofs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cliprofsInput() {
    return this._cliprofs;
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

  // dev_group - computed: true, optional: true, required: false
  private _devGroup?: string[]; 
  public get devGroup() {
    return cdktf.Fn.tolist(this.getListAttribute('dev_group'));
  }
  public set devGroup(value: string[]) {
    this._devGroup = value;
  }
  public resetDevGroup() {
    this._devGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get devGroupInput() {
    return this._devGroup;
  }

  // enforce_device_config - computed: true, optional: true, required: false
  private _enforceDeviceConfig?: string; 
  public get enforceDeviceConfig() {
    return this.getStringAttribute('enforce_device_config');
  }
  public set enforceDeviceConfig(value: string) {
    this._enforceDeviceConfig = value;
  }
  public resetEnforceDeviceConfig() {
    this._enforceDeviceConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enforceDeviceConfigInput() {
    return this._enforceDeviceConfig;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // ha_config - computed: true, optional: true, required: false
  private _haConfig?: string; 
  public get haConfig() {
    return this.getStringAttribute('ha_config');
  }
  public set haConfig(value: string) {
    this._haConfig = value;
  }
  public resetHaConfig() {
    this._haConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haConfigInput() {
    return this._haConfig;
  }

  // ha_hbdev - computed: false, optional: true, required: false
  private _haHbdev?: string; 
  public get haHbdev() {
    return this.getStringAttribute('ha_hbdev');
  }
  public set haHbdev(value: string) {
    this._haHbdev = value;
  }
  public resetHaHbdev() {
    this._haHbdev = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haHbdevInput() {
    return this._haHbdev;
  }

  // ha_monitor - computed: true, optional: true, required: false
  private _haMonitor?: string[]; 
  public get haMonitor() {
    return cdktf.Fn.tolist(this.getListAttribute('ha_monitor'));
  }
  public set haMonitor(value: string[]) {
    this._haMonitor = value;
  }
  public resetHaMonitor() {
    this._haMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haMonitorInput() {
    return this._haMonitor;
  }

  // ha_password - computed: true, optional: true, required: false
  private _haPassword?: string[]; 
  public get haPassword() {
    return cdktf.Fn.tolist(this.getListAttribute('ha_password'));
  }
  public set haPassword(value: string[]) {
    this._haPassword = value;
  }
  public resetHaPassword() {
    this._haPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haPasswordInput() {
    return this._haPassword;
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

  // linked_to_model - computed: true, optional: true, required: false
  private _linkedToModel?: string; 
  public get linkedToModel() {
    return this.getStringAttribute('linked_to_model');
  }
  public set linkedToModel(value: string) {
    this._linkedToModel = value;
  }
  public resetLinkedToModel() {
    this._linkedToModel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkedToModelInput() {
    return this._linkedToModel;
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

  // pkg - computed: false, optional: true, required: false
  private _pkg?: string; 
  public get pkg() {
    return this.getStringAttribute('pkg');
  }
  public set pkg(value: string) {
    this._pkg = value;
  }
  public resetPkg() {
    this._pkg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pkgInput() {
    return this._pkg;
  }

  // platform - computed: false, optional: true, required: false
  private _platform?: string; 
  public get platform() {
    return this.getStringAttribute('platform');
  }
  public set platform(value: string) {
    this._platform = value;
  }
  public resetPlatform() {
    this._platform = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get platformInput() {
    return this._platform;
  }

  // port_provisioning - computed: true, optional: true, required: false
  private _portProvisioning?: number; 
  public get portProvisioning() {
    return this.getNumberAttribute('port_provisioning');
  }
  public set portProvisioning(value: number) {
    this._portProvisioning = value;
  }
  public resetPortProvisioning() {
    this._portProvisioning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portProvisioningInput() {
    return this._portProvisioning;
  }

  // prefer_img_ver - computed: false, optional: true, required: false
  private _preferImgVer?: string; 
  public get preferImgVer() {
    return this.getStringAttribute('prefer_img_ver');
  }
  public set preferImgVer(value: string) {
    this._preferImgVer = value;
  }
  public resetPreferImgVer() {
    this._preferImgVer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferImgVerInput() {
    return this._preferImgVer;
  }

  // prerun_cliprof - computed: true, optional: true, required: false
  private _prerunCliprof?: string[]; 
  public get prerunCliprof() {
    return cdktf.Fn.tolist(this.getListAttribute('prerun_cliprof'));
  }
  public set prerunCliprof(value: string[]) {
    this._prerunCliprof = value;
  }
  public resetPrerunCliprof() {
    this._prerunCliprof = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prerunCliprofInput() {
    return this._prerunCliprof;
  }

  // prov_type - computed: false, optional: true, required: false
  private _provType?: string; 
  public get provType() {
    return this.getStringAttribute('prov_type');
  }
  public set provType(value: string) {
    this._provType = value;
  }
  public resetProvType() {
    this._provType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provTypeInput() {
    return this._provType;
  }

  // scopetype - computed: false, optional: true, required: false
  private _scopetype?: string; 
  public get scopetype() {
    return this.getStringAttribute('scopetype');
  }
  public set scopetype(value: string) {
    this._scopetype = value;
  }
  public resetScopetype() {
    this._scopetype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scopetypeInput() {
    return this._scopetype;
  }

  // sdwan_management - computed: true, optional: true, required: false
  private _sdwanManagement?: string; 
  public get sdwanManagement() {
    return this.getStringAttribute('sdwan_management');
  }
  public set sdwanManagement(value: string) {
    this._sdwanManagement = value;
  }
  public resetSdwanManagement() {
    this._sdwanManagement = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sdwanManagementInput() {
    return this._sdwanManagement;
  }

  // split_switch_port - computed: true, optional: true, required: false
  private _splitSwitchPort?: string; 
  public get splitSwitchPort() {
    return this.getStringAttribute('split_switch_port');
  }
  public set splitSwitchPort(value: string) {
    this._splitSwitchPort = value;
  }
  public resetSplitSwitchPort() {
    this._splitSwitchPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get splitSwitchPortInput() {
    return this._splitSwitchPort;
  }

  // template_group - computed: false, optional: true, required: false
  private _templateGroup?: string; 
  public get templateGroup() {
    return this.getStringAttribute('template_group');
  }
  public set templateGroup(value: string) {
    this._templateGroup = value;
  }
  public resetTemplateGroup() {
    this._templateGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateGroupInput() {
    return this._templateGroup;
  }

  // templates - computed: true, optional: true, required: false
  private _templates?: string[]; 
  public get templates() {
    return cdktf.Fn.tolist(this.getListAttribute('templates'));
  }
  public set templates(value: string[]) {
    this._templates = value;
  }
  public resetTemplates() {
    this._templates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templatesInput() {
    return this._templates;
  }

  // vm_log_disk - computed: true, optional: true, required: false
  private _vmLogDisk?: string; 
  public get vmLogDisk() {
    return this.getStringAttribute('vm_log_disk');
  }
  public set vmLogDisk(value: string) {
    this._vmLogDisk = value;
  }
  public resetVmLogDisk() {
    this._vmLogDisk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vmLogDiskInput() {
    return this._vmLogDisk;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      adom: cdktf.stringToTerraform(this._adom),
      auth_template: cdktf.listMapper(cdktf.stringToTerraform, false)(this._authTemplate),
      cliprofs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._cliprofs),
      description: cdktf.stringToTerraform(this._description),
      dev_group: cdktf.listMapper(cdktf.stringToTerraform, false)(this._devGroup),
      enforce_device_config: cdktf.stringToTerraform(this._enforceDeviceConfig),
      folder: cdktf.stringToTerraform(this._folder),
      ha_config: cdktf.stringToTerraform(this._haConfig),
      ha_hbdev: cdktf.stringToTerraform(this._haHbdev),
      ha_monitor: cdktf.listMapper(cdktf.stringToTerraform, false)(this._haMonitor),
      ha_password: cdktf.listMapper(cdktf.stringToTerraform, false)(this._haPassword),
      id: cdktf.stringToTerraform(this._id),
      linked_to_model: cdktf.stringToTerraform(this._linkedToModel),
      name: cdktf.stringToTerraform(this._name),
      pkg: cdktf.stringToTerraform(this._pkg),
      platform: cdktf.stringToTerraform(this._platform),
      port_provisioning: cdktf.numberToTerraform(this._portProvisioning),
      prefer_img_ver: cdktf.stringToTerraform(this._preferImgVer),
      prerun_cliprof: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prerunCliprof),
      prov_type: cdktf.stringToTerraform(this._provType),
      scopetype: cdktf.stringToTerraform(this._scopetype),
      sdwan_management: cdktf.stringToTerraform(this._sdwanManagement),
      split_switch_port: cdktf.stringToTerraform(this._splitSwitchPort),
      template_group: cdktf.stringToTerraform(this._templateGroup),
      templates: cdktf.listMapper(cdktf.stringToTerraform, false)(this._templates),
      vm_log_disk: cdktf.stringToTerraform(this._vmLogDisk),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      adom: {
        value: cdktf.stringToHclTerraform(this._adom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_template: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._authTemplate),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      cliprofs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._cliprofs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dev_group: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._devGroup),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      enforce_device_config: {
        value: cdktf.stringToHclTerraform(this._enforceDeviceConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_config: {
        value: cdktf.stringToHclTerraform(this._haConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_hbdev: {
        value: cdktf.stringToHclTerraform(this._haHbdev),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_monitor: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._haMonitor),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ha_password: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._haPassword),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linked_to_model: {
        value: cdktf.stringToHclTerraform(this._linkedToModel),
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
      pkg: {
        value: cdktf.stringToHclTerraform(this._pkg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      platform: {
        value: cdktf.stringToHclTerraform(this._platform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      port_provisioning: {
        value: cdktf.numberToHclTerraform(this._portProvisioning),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prefer_img_ver: {
        value: cdktf.stringToHclTerraform(this._preferImgVer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prerun_cliprof: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prerunCliprof),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      prov_type: {
        value: cdktf.stringToHclTerraform(this._provType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scopetype: {
        value: cdktf.stringToHclTerraform(this._scopetype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sdwan_management: {
        value: cdktf.stringToHclTerraform(this._sdwanManagement),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      split_switch_port: {
        value: cdktf.stringToHclTerraform(this._splitSwitchPort),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_group: {
        value: cdktf.stringToHclTerraform(this._templateGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      templates: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._templates),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      vm_log_disk: {
        value: cdktf.stringToHclTerraform(this._vmLogDisk),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
